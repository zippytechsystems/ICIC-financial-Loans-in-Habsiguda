/**
 * Migration runner for Zippytech Systems
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const db = require('./index');

async function runMigrations() {
  const isPostgres = process.env.DB_CLIENT === 'postgres';
  const dialect = isPostgres ? 'postgres' : 'sqlite';

  console.log(`Running migrations for ${dialect}...`);

  const migrationFile = path.join(__dirname, `migrations/${dialect}/001_init.sql`);
  if (!fs.existsSync(migrationFile)) {
    throw new Error(`Migration file not found: ${migrationFile}`);
  }

  const migrationSql = fs.readFileSync(migrationFile, 'utf8');
  await db.exec(migrationSql);
  console.log('✓ 001_init.sql executed successfully.');

  // Run Seeds if SQLite or if loan_types table is empty
  const countRow = await db.get('SELECT COUNT(*) as count FROM loan_types');
  const count = Number(countRow?.count || 0);

  if (count === 0) {
    console.log('Seeding loan_types table...');
    const seedFile = path.join(__dirname, 'seeds/001_loan_types.sql');
    if (fs.existsSync(seedFile)) {
      let seedSql = fs.readFileSync(seedFile, 'utf8');
      if (isPostgres) {
        // Adjust for Postgres syntax if needed
        seedSql = seedSql.replace(/INSERT OR IGNORE/gi, 'INSERT')
                         .replace(/;$/, ' ON CONFLICT (slug) DO NOTHING;');
      }
      await db.exec(seedSql);
      console.log('✓ 001_loan_types.sql seeded successfully.');
    }
  } else {
    console.log(`Loan types already present (${count} records). Skipping seed.`);
  }

  console.log('Database migrations completed successfully.');
}

if (require.main === module) {
  runMigrations()
    .then(() => {
      console.log('Migration process exited.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Migration failed:', err);
      process.exit(1);
    });
}

module.exports = { runMigrations };
