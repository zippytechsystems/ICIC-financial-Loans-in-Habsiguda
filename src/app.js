/**
 * Express Application Setup
 */

const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const config = require('./config');
const publicRoutes = require('./routes/publicRoutes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

// Security Headers with Helmet
app.use(helmet({
  contentSecurityPolicy: false // Allows inline scripts & fonts from Google CDN in poster page
}));

// Cross-Origin Resource Sharing
app.use(cors({
  origin: config.security.corsOrigin === '*' ? true : config.security.corsOrigin,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  credentials: true
}));

// Body Parsing
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Serve static frontend from public/
const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));

// Route root to poster page if index.html doesn't exist
app.get('/', (req, res, next) => {
  const posterPath = path.join(publicDir, 'zippytech-loans.html');
  res.sendFile(posterPath, (err) => {
    if (err) next();
  });
});

// API Routes
app.use('/api', publicRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'Zippytech Systems Loan API', timestamp: new Date().toISOString() });
});

// 404 Handler for undefined API routes
app.use('/api', (req, res) => {
  res.status(404).json({
    success: false,
    error: `API route not found: ${req.method} ${req.originalUrl}`
  });
});

// Global Error Handler
app.use(errorHandler);

module.exports = app;
