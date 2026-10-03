/**
 * Server Entrypoint
 */

require('dotenv').config();
const app = require('./app');
const config = require('./config');
const db = require('../db');
const { runMigrations } = require('../db/migrate');

async function startServer() {
  try {
    // Run migrations on startup to ensure database readiness
    await runMigrations();

    const server = app.listen(config.port, () => {
      console.log(`====================================================`);
      console.log(`🚀 Zippytech Systems Loan API running on port ${config.port}`);
      console.log(`📍 Environment: ${config.env}`);
      console.log(`💾 Database: ${config.db.client} (${config.db.path || 'remote'})`);
      console.log(`🌐 Public Landing Page: http://localhost:${config.port}/zippytech-loans.html`);
      console.log(`====================================================`);
    });

    // Graceful shutdown handling
    const shutdown = async () => {
      console.log('\nShutting down server gracefully...');
      server.close(async () => {
        await db.close();
        console.log('Database connections closed. Goodbye.');
        process.exit(0);
      });
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

if (require.main === module) {
  startServer();
}

module.exports = { startServer };
