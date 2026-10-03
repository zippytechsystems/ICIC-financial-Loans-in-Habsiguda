/**
 * Application Configuration
 */

require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  db: {
    client: process.env.DB_CLIENT || 'sqlite',
    path: process.env.DB_PATH || './data/zippytech.db',
    url: process.env.DATABASE_URL
  },
  security: {
    ipHashSalt: process.env.IP_HASH_SALT || 'zippytech_default_ip_salt_2026',
    jwtSecret: process.env.JWT_SECRET || 'zippytech_jwt_secret_key_minimum_32_chars_length_random',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '8h',
    fieldEncryptionKey: process.env.FIELD_ENCRYPTION_KEY || '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
    corsOrigin: process.env.CORS_ORIGIN || '*'
  },
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '3600000', 10), // 1 hour
    maxLeads: parseInt(process.env.RATE_LIMIT_MAX_LEADS || '5', 10) // 5 per hour
  }
};

module.exports = config;
