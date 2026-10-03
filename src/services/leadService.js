/**
 * Lead Management Service
 */

const db = require('../../db');
const { AppError } = require('../middleware/errorHandler');

/**
 * Resolves loan_type_id from either id, slug, or name
 */
async function resolveLoanType(input) {
  const { loan_type_id, slug, loan_type } = input;

  if (loan_type_id) {
    const row = await db.get(
      'SELECT id, name, slug, subject_to_availability FROM loan_types WHERE id = ? AND is_active = 1',
      [loan_type_id]
    );
    if (row) return row;
  }

  const lookupVal = slug || loan_type;
  if (lookupVal) {
    const row = await db.get(
      `SELECT id, name, slug, subject_to_availability FROM loan_types 
       WHERE (LOWER(slug) = LOWER(?) OR LOWER(name) = LOWER(?)) AND is_active = 1`,
      [lookupVal, lookupVal]
    );
    if (row) return row;
  }

  throw new AppError('Invalid or inactive loan category selected.', 400);
}

/**
 * Checks if a duplicate lead exists for same phone and loan type within 30 days
 */
async function findRecentDuplicate(phone, loanTypeId) {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const cutoffStr = thirtyDaysAgo.toISOString().replace('T', ' ').substring(0, 19);

  // Checks both ISO format and space-separated datetime
  const sql = `
    SELECT id, name, phone, status, created_at 
    FROM leads 
    WHERE phone = ? AND loan_type_id = ? AND (created_at >= ? OR created_at >= ?)
    ORDER BY id DESC LIMIT 1
  `;
  
  return await db.get(sql, [phone, loanTypeId, cutoffStr, thirtyDaysAgo.toISOString()]);
}

/**
 * Handles creation of a new public lead
 */
async function createLead(data, ipHash) {
  // Check honeypot
  if (data.honeypot || data.website) {
    // Silently return success to bot without creating a database entry
    return {
      isSpam: true,
      message: 'Thank you for your inquiry. A loan advisor will review your request.'
    };
  }

  // Resolve loan type
  const loanType = await resolveLoanType(data);

  // Check 30-day duplicate
  const existingLead = await findRecentDuplicate(data.phone, loanType.id);
  if (existingLead) {
    return {
      isDuplicate: true,
      leadId: existingLead.id,
      loanType: loanType.name,
      message: 'We have already received an inquiry for this loan category from your number within the last 30 days. Our loan advisor will contact you shortly!'
    };
  }

  // Insert new lead
  const insertSql = `
    INSERT INTO leads (
      name, phone, email, area, loan_type_id, loan_amount,
      employment_type, monthly_income, existing_emi, status,
      consent_text, consent_at, ip_hash
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'New', ?, CURRENT_TIMESTAMP, ?)
  `;

  const params = [
    data.name,
    data.phone,
    data.email || null,
    data.area,
    loanType.id,
    data.loan_amount,
    data.employment_type || 'Salaried',
    data.monthly_income || null,
    data.existing_emi || 0,
    data.consent_text,
    ipHash
  ];

  const result = await db.query(insertSql, params);
  const leadId = result.insertId;

  // Log activity
  try {
    await db.query(
      'INSERT INTO activity_logs (lead_id, action, details) VALUES (?, ?, ?)',
      [
        leadId,
        'LEAD_SUBMITTED',
        JSON.stringify({
          loanType: loanType.name,
          loanAmount: data.loan_amount,
          area: data.area,
          employmentType: data.employment_type
        })
      ]
    );
  } catch (logErr) {
    console.warn('Failed to write activity log:', logErr.message);
  }

  return {
    isDuplicate: false,
    leadId,
    loanType: loanType.name,
    message: 'Your loan inquiry has been submitted successfully. A Zippytech loan advisor will contact you shortly.',
    disclaimer: "Loan approval, interest rate, amount and eligibility are subject to the respective bank/financial institution's terms and approval."
  };
}

module.exports = {
  resolveLoanType,
  findRecentDuplicate,
  createLead
};
