/**
 * Indian Mobile Phone Number Validator & Normalizer
 * Accepts +91, 0, spaces, dashes, parentheses and normalizes to 10-digit format.
 * Validates that it starts with digits 6, 7, 8, or 9.
 */

function normalizeIndianPhone(input) {
  if (!input || typeof input !== 'string') {
    return null;
  }

  // Remove all non-digit characters
  let digits = input.replace(/\D/g, '');

  // Handle +91 or 91 country code prefix
  if (digits.length === 12 && digits.startsWith('91')) {
    digits = digits.substring(2);
  } else if (digits.length === 11 && digits.startsWith('0')) {
    digits = digits.substring(1);
  }

  // Validate exactly 10 digits starting with 6, 7, 8, or 9
  if (/^[6-9]\d{9}$/.test(digits)) {
    return digits;
  }

  return null;
}

module.exports = {
  normalizeIndianPhone
};
