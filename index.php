<?php
/**
 * Habsiguda Loan Desk - Hostinger PHP Fallback Entrypoint
 * Automatically serves the compiled static application from out/index.html
 */

$outIndex = __DIR__ . '/out/index.html';

if (file_exists($outIndex)) {
    // Set appropriate headers
    header('Content-Type: text/html; charset=utf-8');
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: SAMEORIGIN');
    readfile($outIndex);
    exit;
} else {
    header('HTTP/1.1 503 Service Unavailable');
    echo 'Site is building or deploying. Please refresh in a moment.';
    exit;
}
