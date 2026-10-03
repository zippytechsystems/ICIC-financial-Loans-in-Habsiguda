/**
 * Cryptographic and Privacy Utilities
 */

const crypto = require('crypto');
const config = require('../config');

/**
 * Creates a salted SHA-256 hash of an IP address.
 * Ensures the raw IP address is NEVER stored in the database.
 * @param {string} ip - Raw client IP address
 * @returns {string} - Hex-encoded SHA-256 hash
 */
function hashIp(ip) {
  if (!ip) return 'unknown_ip_hash';
  const cleanIp = ip.replace(/^.*:/, ''); // normalize IPv6 mapped IPv4
  return crypto
    .createHmac('sha256', config.security.ipHashSalt)
    .update(cleanIp)
    .digest('hex');
}

/**
 * Encrypts sensitive fields (such as PAN) using AES-256-GCM.
 * @param {string} text - Plain text
 * @returns {string} - Encrypted string (iv:authTag:ciphertext)
 */
function encryptField(text) {
  if (!text) return null;
  const key = Buffer.from(config.security.fieldEncryptionKey, 'hex');
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const authTag = cipher.getAuthTag().toString('hex');
  
  return `${iv.toString('hex')}:${authTag}:${encrypted}`;
}

/**
 * Decrypts sensitive fields (such as PAN) using AES-256-GCM.
 * @param {string} encryptedString - String in iv:authTag:ciphertext format
 * @returns {string} - Plain text
 */
function decryptField(encryptedString) {
  if (!encryptedString) return null;
  const parts = encryptedString.split(':');
  if (parts.length !== 3) return null;
  
  const [ivHex, authTagHex, encryptedHex] = parts;
  const key = Buffer.from(config.security.fieldEncryptionKey, 'hex');
  const iv = Buffer.from(ivHex, 'hex');
  const authTag = Buffer.from(authTagHex, 'hex');
  
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(authTag);
  
  let decrypted = decipher.update(encryptedHex, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = {
  hashIp,
  encryptField,
  decryptField
};
