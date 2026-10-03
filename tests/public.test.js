/**
 * Integration Tests for Phase 2: Public APIs
 * Built with node:test and supertest
 */

process.env.NODE_ENV = 'test';
process.env.DB_CLIENT = 'sqlite';
process.env.DB_PATH = './data/test_zippytech.db';
process.env.RATE_LIMIT_MAX_LEADS = '10'; // relaxed for test suite

const { test, describe, before, after } = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const fs = require('fs');
const path = require('path');

const app = require('../src/app');
const db = require('../db');
const { runMigrations } = require('../db/migrate');

describe('Phase 2: Public APIs Integration Test Suite', () => {
  
  before(async () => {
    // Clean test DB if exists
    const testDbPath = path.resolve(process.env.DB_PATH);
    if (fs.existsSync(testDbPath)) {
      fs.unlinkSync(testDbPath);
    }
    // Run migrations and seeds
    await runMigrations();
  });

  after(async () => {
    await db.close();
    const testDbPath = path.resolve(process.env.DB_PATH);
    if (fs.existsSync(testDbPath)) {
      try {
        fs.unlinkSync(testDbPath);
      } catch (e) {
        // Ignore file lock on Windows
      }
    }
  });

  // 1. GET /api/loan-types
  describe('GET /api/loan-types', () => {
    test('should return all 15 active loan types with subject_to_availability flag', async () => {
      const res = await request(app)
        .get('/api/loan-types')
        .expect('Content-Type', /json/)
        .expect(200);

      assert.equal(res.body.success, true);
      assert.ok(Array.isArray(res.body.data));
      assert.equal(res.body.data.length, 15);

      const plotLoan = res.body.data.find(l => l.slug === 'plot-loans');
      assert.ok(plotLoan);
      assert.equal(plotLoan.name, 'Plot Loans (Hyderabad plots)');
      assert.equal(plotLoan.subject_to_availability, false);

      const agriLoan = res.body.data.find(l => l.slug === 'agriculture-loans');
      assert.ok(agriLoan);
      assert.equal(agriLoan.subject_to_availability, true);
    });
  });

  // 2. POST /api/leads - Creation & Validation
  describe('POST /api/leads', () => {
    test('should create a lead with valid inputs and normalized Indian phone (+91 formatted)', async () => {
      const payload = {
        name: 'Srinivas Rao',
        phone: '+91 98490 12345',
        email: 'srinivas.rao@example.com',
        area: 'Habsiguda Street No 8',
        loan_type: 'Plot Loans (Hyderabad plots)',
        loan_amount: 3500000,
        employment_type: 'Salaried',
        monthly_income: 85000,
        existing_emi: 12000,
        consent: true
      };

      const res = await request(app)
        .post('/api/leads')
        .send(payload)
        .expect(200);

      assert.equal(res.body.success, true);
      assert.equal(res.body.isDuplicate, false);
      assert.ok(res.body.leadId > 0);

      // Verify row in DB directly: phone must be normalized to '9849012345', ip_hash exists, no raw IP
      const dbRow = await db.get('SELECT * FROM leads WHERE id = ?', [res.body.leadId]);
      assert.ok(dbRow);
      assert.equal(dbRow.phone, '9849012345');
      assert.equal(dbRow.name, 'Srinivas Rao');
      assert.ok(dbRow.ip_hash);
      assert.ok(dbRow.consent_at);
      assert.equal(dbRow.pan_encrypted, null); // never stored unless provided in admin flow
    });

    test('should detect duplicate lead for same phone and loan type within 30 days without inserting a new row', async () => {
      const payload = {
        name: 'Srinivas Rao',
        phone: '9849012345', // same phone as previous test
        area: 'Habsiguda',
        slug: 'plot-loans', // same loan type
        loan_amount: 4000000,
        consent: true
      };

      const countBefore = await db.get('SELECT COUNT(*) as count FROM leads');

      const res = await request(app)
        .post('/api/leads')
        .send(payload)
        .expect(200);

      assert.equal(res.body.success, true);
      assert.equal(res.body.isDuplicate, true);
      assert.match(res.body.message, /already received/i);

      const countAfter = await db.get('SELECT COUNT(*) as count FROM leads');
      assert.equal(countBefore.count, countAfter.count, 'No new row should be inserted on duplicate');
    });

    test('should allow same phone for a DIFFERENT loan type', async () => {
      const payload = {
        name: 'Srinivas Rao',
        phone: '9849012345',
        area: 'Habsiguda',
        slug: 'personal-loans', // DIFFERENT loan type
        loan_amount: 500000,
        consent: true
      };

      const res = await request(app)
        .post('/api/leads')
        .send(payload)
        .expect(200);

      assert.equal(res.body.success, true);
      assert.equal(res.body.isDuplicate, false);
      assert.ok(res.body.leadId > 0);
    });

    test('should reject request when consent is false or omitted', async () => {
      const payload = {
        name: 'Vijay Kumar',
        phone: '9848011223',
        area: 'Boduppal',
        slug: 'home-loans',
        loan_amount: 4500000,
        consent: false
      };

      const res = await request(app)
        .post('/api/leads')
        .send(payload)
        .expect(400);

      assert.equal(res.body.success, false);
      assert.match(res.body.error, /Validation failed/i);
    });

    test('should reject request when Indian mobile is invalid', async () => {
      const payload = {
        name: 'Vijay Kumar',
        phone: '1234567890', // invalid: does not start with 6-9
        area: 'Uppal',
        slug: 'home-loans',
        loan_amount: 4500000,
        consent: true
      };

      const res = await request(app)
        .post('/api/leads')
        .send(payload)
        .expect(400);

      assert.equal(res.body.success, false);
    });

    test('should drop spam when honeypot field is filled without saving to database', async () => {
      const countBefore = await db.get('SELECT COUNT(*) as count FROM leads');

      const payload = {
        name: 'Spam Bot',
        phone: '9988776655',
        area: 'Online',
        slug: 'personal-loans',
        loan_amount: 100000,
        consent: true,
        website: 'http://spam-link.example.com' // Honeypot filled!
      };

      const res = await request(app)
        .post('/api/leads')
        .send(payload)
        .expect(200);

      assert.equal(res.body.success, true);
      assert.equal(res.body.isSpam, true);

      const countAfter = await db.get('SELECT COUNT(*) as count FROM leads');
      assert.equal(countBefore.count, countAfter.count, 'Honeypot submission must not create a DB record');
    });

    test('should trigger 429 rate limiter when requests exceed threshold', async () => {
      const payload = {
        name: 'Rate Limit Tester',
        phone: '9849999999',
        area: 'Uppal',
        slug: 'home-loans',
        loan_amount: 2500000,
        consent: true
      };

      // Hit rate limiter threshold with unique test IP
      const testIp = '198.51.100.42';
      let triggered429 = false;

      for (let i = 0; i < 12; i++) {
        const res = await request(app)
          .post('/api/leads')
          .set('x-test-rate-limit', 'true')
          .set('x-forwarded-for', testIp)
          .send({ ...payload, phone: `984999999${i % 9}` });

        if (res.status === 429) {
          triggered429 = true;
          assert.equal(res.body.success, false);
          assert.match(res.body.error, /Too many/i);
          break;
        }
      }

      assert.ok(triggered429, 'Rate limiter should return 429 when threshold exceeded');
    });
  });

  // 3. POST /api/eligibility-check
  describe('POST /api/eligibility-check', () => {
    test('should return "likely eligible" when EMI is comfortably within FOIR limits', async () => {
      const payload = {
        loan_type: 'Home Loans',
        monthly_income: 120000,
        existing_emi: 15000,
        loan_amount: 4000000,
        tenure_years: 20
      };

      const res = await request(app)
        .post('/api/eligibility-check')
        .send(payload)
        .expect(200);

      assert.equal(res.body.success, true);
      assert.equal(res.body.guidance, 'likely eligible');
      assert.ok(res.body.indicativeEstimates);
      assert.ok(res.body.indicativeEstimates.indicativeRateRange.includes('indicative range'));
      assert.ok(res.body.disclaimer.includes("Loan approval, interest rate, amount and eligibility are subject to the respective bank/financial institution's terms and approval."));
    });

    test('should return "needs documents/co-applicant" when requested amount exceeds FOIR limit', async () => {
      const payload = {
        loan_type: 'Plot Loans (Hyderabad plots)',
        monthly_income: 30000,
        existing_emi: 12000,
        loan_amount: 5000000, // Very high loan for ₹30k income
        tenure_years: 15
      };

      const res = await request(app)
        .post('/api/eligibility-check')
        .send(payload)
        .expect(200);

      assert.equal(res.body.success, true);
      assert.equal(res.body.guidance, 'needs documents/co-applicant');
      assert.ok(res.body.recommendations.some(r => r.includes('co-applicant')));
      assert.ok(res.body.disclaimer);
    });

    test('should reject invalid input values (negative income, tenure > 30)', async () => {
      const payload = {
        loan_type: 'Home Loans',
        monthly_income: -50000,
        loan_amount: 2000000,
        tenure_years: 35
      };

      const res = await request(app)
        .post('/api/eligibility-check')
        .send(payload)
        .expect(400);

      assert.equal(res.body.success, false);
    });
  });

});
