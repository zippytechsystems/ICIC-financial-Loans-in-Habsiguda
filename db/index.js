/**
 * Database Adapter for Zippytech Systems
 * Supports both SQLite (local development / testing) and PostgreSQL (production)
 * Uses standard '?' placeholders across all queries for portability.
 */

const path = require('path');
const fs = require('fs');

const isPostgres = process.env.DB_CLIENT === 'postgres';

let sqliteDb = null;
let pgPool = null;

function getSqliteInstance() {
  if (!sqliteDb) {
    const { DatabaseSync } = require('node:sqlite');
    const dbPath = process.env.DB_PATH || path.join(__dirname, '../data/zippytech.db');
    
    // Ensure directory exists
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    sqliteDb = new DatabaseSync(dbPath);
    sqliteDb.exec('PRAGMA foreign_keys = ON;');
    sqliteDb.exec('PRAGMA journal_mode = WAL;');
  }
  return sqliteDb;
}

function getPgPool() {
  if (!pgPool) {
    const { Pool } = require('pg');
    pgPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    });
  }
  return pgPool;
}

/**
 * Replaces '?' placeholders with '$1, $2, ...' for PostgreSQL queries
 */
function convertPlaceholders(sql) {
  let index = 1;
  return sql.replace(/\?/g, () => `$${index++}`);
}

/**
 * Execute parameterized query. Always use '?' in your SQL strings.
 * @param {string} sql - SQL query string with '?' placeholders
 * @param {Array} params - Array of parameters
 * @returns {Promise<{ rows: Array, rowCount: number, insertId?: number }>}
 */
async function query(sql, params = []) {
  if (isPostgres) {
    const pool = getPgPool();
    const pgSql = convertPlaceholders(sql);
    const result = await pool.query(pgSql, params);
    return {
      rows: result.rows,
      rowCount: result.rowCount,
      insertId: result.rows[0]?.id
    };
  } else {
    const db = getSqliteInstance();
    const stmt = db.prepare(sql);
    
    const isSelect = /^\s*(SELECT|PRAGMA)/i.test(sql);
    
    if (isSelect) {
      const rows = stmt.all(...params);
      return {
        rows,
        rowCount: rows.length
      };
    } else {
      const info = stmt.run(...params);
      return {
        rows: [],
        rowCount: info.changes,
        insertId: Number(info.lastInsertRowid),
        lastInsertRowid: Number(info.lastInsertRowid)
      };
    }
  }
}

/**
 * Fetch a single record matching the query
 */
async function get(sql, params = []) {
  const result = await query(sql, params);
  return result.rows[0] || null;
}

/**
 * Fetch all records matching the query
 */
async function all(sql, params = []) {
  const result = await query(sql, params);
  return result.rows;
}

/**
 * Execute raw DDL or batch script (migrations, DDL)
 */
async function exec(sql) {
  if (isPostgres) {
    const pool = getPgPool();
    await pool.query(sql);
  } else {
    const db = getSqliteInstance();
    db.exec(sql);
  }
}

/**
 * Close database connection (useful in test teardown)
 */
async function close() {
  if (sqliteDb) {
    sqliteDb.close();
    sqliteDb = null;
  }
  if (pgPool) {
    await pgPool.end();
    pgPool = null;
  }
}

module.exports = {
  query,
  get,
  all,
  exec,
  close,
  isPostgres
};
