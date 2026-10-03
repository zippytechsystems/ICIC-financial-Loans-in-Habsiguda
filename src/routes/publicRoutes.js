/**
 * Public API Routes
 */

const express = require('express');
const router = express.Router();
const { getLoanTypes, handleCreateLead, handleEligibilityCheck } = require('../controllers/publicController');
const { createRateLimiter } = require('../middleware/rateLimiter');

// Rate limiter for lead submissions: 5 requests per hour per IP
const leadRateLimiter = createRateLimiter({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: 'Too many loan submissions from your connection. Please wait an hour or contact us on WhatsApp at 63026 90251.'
});

// Routes
router.get('/loan-types', getLoanTypes);
router.post('/leads', leadRateLimiter, handleCreateLead);
router.post('/eligibility-check', handleEligibilityCheck);

module.exports = router;
