/**
 * Global Error Handling Middleware
 */

const { ZodError } = require('zod');

class AppError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

function errorHandler(err, req, res, next) {
  // Handle Zod Validation Errors
  if (err instanceof ZodError || err.name === 'ZodError') {
    const issues = err.issues || err.errors || [];
    const errors = issues.map(e => ({
      field: Array.isArray(e.path) ? e.path.join('.') : String(e.path || ''),
      message: e.message
    }));
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: errors
    });
  }

  // Handle JSON parse errors
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      success: false,
      error: 'Malformed JSON payload'
    });
  }

  // Handle custom operational errors
  if (err.isOperational) {
    return res.status(err.statusCode || 400).json({
      success: false,
      error: err.message
    });
  }

  // Unhandled internal server error
  console.error('[Unhandled Error]:', err);
  return res.status(500).json({
    success: false,
    error: 'An unexpected internal error occurred. Please try again later.'
  });
}

module.exports = {
  AppError,
  errorHandler
};
