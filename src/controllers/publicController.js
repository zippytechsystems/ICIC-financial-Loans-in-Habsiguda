/**
 * Public Endpoints Controller
 */

const db = require('../../db');
const { createLeadSchema, eligibilityCheckSchema } = require('../validations/publicValidation');
const { createLead } = require('../services/leadService');
const { evaluateEligibility } = require('../services/eligibilityService');
const { hashIp } = require('../utils/crypto');

/**
 * GET /api/loan-types
 * Returns all active loan categories, including subject_to_availability flag
 */
async function getLoanTypes(req, res, next) {
  try {
    const loanTypes = await db.all(
      `SELECT id, name, slug, category, description, badge, 
              subject_to_availability, sort_order 
       FROM loan_types 
       WHERE is_active = 1 
       ORDER BY sort_order ASC, name ASC`
    );

    // Convert subject_to_availability to boolean for frontend convenience
    const formatted = loanTypes.map(lt => ({
      ...lt,
      subject_to_availability: Boolean(lt.subject_to_availability)
    }));

    return res.status(200).json({
      success: true,
      data: formatted
    });
  } catch (err) {
    next(err);
  }
}

/**
 * POST /api/leads
 * Handles lead submission with validation, honeypot detection, and 30-day duplicate checking
 */
async function handleCreateLead(req, res, next) {
  try {
    const validatedData = createLeadSchema.parse(req.body);
    
    // Hash IP address with salt
    const rawIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || req.ip;
    const ipHash = hashIp(rawIp);

    const result = await createLead(validatedData, ipHash);

    return res.status(200).json({
      success: true,
      ...result
    });
  } catch (err) {
    next(err);
  }
}

/**
 * POST /api/eligibility-check
 * Evaluates indicative loan eligibility using standard FOIR methodology
 */
async function handleEligibilityCheck(req, res, next) {
  try {
    const validatedData = eligibilityCheckSchema.parse(req.body);
    const result = evaluateEligibility(validatedData);

    return res.status(200).json({
      success: true,
      ...result
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getLoanTypes,
  handleCreateLead,
  handleEligibilityCheck
};
