/**
 * In-Memory Sliding Window Rate Limiter
 * Tracks requests by hashed IP address to preserve privacy.
 */

const { hashIp } = require('../utils/crypto');
const config = require('../config');

function createRateLimiter(options = {}) {
  const windowMs = options.windowMs || config.rateLimit.windowMs;
  const maxRequests = options.max || config.rateLimit.maxLeads;
  const message = options.message || 'Too many submissions from this connection. Please try again in an hour or message us directly on WhatsApp at 63026 90251.';

  // Map of ipHash -> array of timestamps
  const hits = new Map();

  // Periodic cleanup every 10 minutes
  setInterval(() => {
    const now = Date.now();
    for (const [key, timestamps] of hits.entries()) {
      const valid = timestamps.filter(t => now - t < windowMs);
      if (valid.length === 0) {
        hits.delete(key);
      } else {
        hits.set(key, valid);
      }
    }
  }, 10 * 60 * 1000).unref();

  return function rateLimiter(req, res, next) {
    // In test environment, bypass rate limit unless explicitly testing rate limiter
    if (process.env.NODE_ENV === 'test' && !req.headers['x-test-rate-limit']) {
      req.clientIpHash = hashIp(req.ip || '127.0.0.1');
      return next();
    }

    const rawIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || req.ip;
    const ipHash = hashIp(rawIp);
    const now = Date.now();

    const timestamps = hits.get(ipHash) || [];
    const recent = timestamps.filter(t => now - t < windowMs);

    if (recent.length >= maxRequests) {
      return res.status(429).json({
        success: false,
        error: message
      });
    }

    recent.push(now);
    hits.set(ipHash, recent);
    req.clientIpHash = ipHash;
    next();
  };
}

module.exports = {
  createRateLimiter
};
