/**
 * Zod Validation Schemas for Public APIs
 */

const { z } = require('zod');
const { normalizeIndianPhone } = require('../utils/phone');
const { sanitizeText } = require('../utils/sanitizer');

const createLeadSchema = z.object({
  name: z.string({ required_error: 'Name is required' })
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .transform(sanitizeText),
  
  phone: z.string({ required_error: 'Mobile number is required' })
    .transform((val) => normalizeIndianPhone(val))
    .refine((val) => val !== null, {
      message: 'Please provide a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9'
    }),
  
  email: z.string().email('Please enter a valid email address').optional().nullable().or(z.literal('')),
  
  area: z.string({ required_error: 'Area or locality in Hyderabad is required' })
    .min(2, 'Area must be at least 2 characters')
    .max(150, 'Area must not exceed 150 characters')
    .transform(sanitizeText),
  
  loan_type_id: z.coerce.number().int().positive().optional(),
  loan_type: z.string().optional().transform((val) => val ? sanitizeText(val) : val),
  slug: z.string().optional().transform((val) => val ? sanitizeText(val) : val),
  
  loan_amount: z.coerce.number({ required_error: 'Loan amount is required' })
    .positive('Loan amount must be greater than zero')
    .min(10000, 'Minimum loan amount is ₹10,000')
    .max(500000000, 'Loan amount exceeds maximum limit'),
  
  employment_type: z.enum(['Salaried', 'Self-Employed', 'Business', 'Professional', 'Other']).optional().default('Salaried'),
  
  monthly_income: z.coerce.number().positive('Monthly income must be positive').optional().nullable(),
  
  existing_emi: z.coerce.number().min(0, 'Existing EMI cannot be negative').optional().default(0),
  
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must provide consent to receive loan guidance and eligibility details' })
  }),
  
  consent_text: z.string().optional().default(
    'I authorize Zippytech Systems to contact me via phone, WhatsApp, or email regarding my loan inquiry and eligibility.'
  ).transform(sanitizeText),
  
  // Honeypot field for spam detection - must remain empty
  website: z.string().optional().default(''),
  honeypot: z.string().optional().default('')
}).refine(data => data.loan_type_id || data.loan_type || data.slug, {
  message: 'Please specify a loan type (loan_type_id, loan_type, or slug)',
  path: ['loan_type']
});

const eligibilityCheckSchema = z.object({
  loan_type: z.union([z.string(), z.number()], {
    required_error: 'Loan type is required'
  }).transform((val) => typeof val === 'string' ? sanitizeText(val) : val),
  
  monthly_income: z.coerce.number({ required_error: 'Monthly income is required' })
    .positive('Monthly income must be greater than zero'),
  
  existing_emi: z.coerce.number().min(0, 'Existing EMI cannot be negative').optional().default(0),
  
  loan_amount: z.coerce.number({ required_error: 'Loan amount is required' })
    .positive('Loan amount must be greater than zero'),
  
  tenure_years: z.coerce.number({ required_error: 'Tenure in years is required' })
    .int('Tenure must be an integer')
    .min(1, 'Tenure must be at least 1 year')
    .max(30, 'Tenure cannot exceed 30 years')
});

module.exports = {
  createLeadSchema,
  eligibilityCheckSchema
};
