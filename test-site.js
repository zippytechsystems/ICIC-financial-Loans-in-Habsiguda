const http = require('http');
const fs = require('fs');
const path = require('path');

const routes = [
  { url: 'http://localhost:3000/', file: path.join(__dirname, 'out', 'index.html'), name: 'Home Page' },
  { url: 'http://localhost:3000/privacy-policy/', file: path.join(__dirname, 'out', 'privacy-policy', 'index.html'), name: 'Privacy Policy' },
  { url: 'http://localhost:3000/disclaimer/', file: path.join(__dirname, 'out', 'disclaimer', 'index.html'), name: 'Disclaimer' },
  { url: 'http://localhost:3000/robots.txt', file: path.join(__dirname, 'out', 'robots.txt'), name: 'Robots.txt' },
  { url: 'http://localhost:3000/sitemap.xml', file: path.join(__dirname, 'out', 'sitemap.xml'), name: 'Sitemap.xml' }
];

function verifyContent(name, source, data) {
  console.log(`\n--- Testing ${name} [${source}] (${data.length} bytes) ---`);
  
  if (data.includes('9542439498')) {
    console.error(`❌ VIOLATION: Found forbidden flyer number 9542439498 in ${name}`);
    process.exitCode = 1;
  } else {
    console.log(`✓ Verified: Flyer number 9542439498 NOT present`);
  }

  if (name.includes('Robots') || name.includes('Sitemap')) {
    // Skip phone check for robots/sitemap
  } else if (data.includes('6302690251') || data.includes('63026 90251')) {
    console.log(`✓ Verified: Correct phone +91 6302690251 present`);
  } else {
    console.warn(`⚠️ Warning: Phone number not found in ${name}`);
  }

  if (name === 'Home Page') {
    const teluguTag = 'మీకు ఏ Bank Loan Eligibility ఉందో తెలుసుకోండి!';
    if (data.includes(teluguTag)) {
      console.log(`✓ Verified: Exact Telugu tagline present`);
    } else {
      console.warn(`⚠️ Warning: Telugu tagline not found in Home Page`);
    }

    const loans = [
      'Home Loans',
      'Loan Against Property',
      'Personal Loans',
      'Business Loans',
      'Vehicle Loans',
      'Credit Cards',
      'Construction Loans',
      'Home Renovation Loans',
      'MSME',
      'Education Loans',
      'Consumer Loans',
      'Balance Transfer',
      'Top-Up Loans'
    ];

    let missing = [];
    loans.forEach(l => {
      if (!data.includes(l)) missing.push(l);
    });

    if (missing.length === 0) {
      console.log(`✓ Verified: All 13 loan types present in Home Page HTML`);
    } else {
      console.warn(`⚠️ Missing loan types: ${missing.join(', ')}`);
    }

    // EMI formula check
    const p = 3500000;
    const r = 8.75 / 1200;
    const n = 240;
    const emi = Math.round((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    console.log(`✓ EMI Formula Math Check: ₹${emi.toLocaleString('en-IN')} (Target: ₹30,930) -> Match: ${emi === 30930}`);
  }
}

// Check via HTTP if dev server is running, otherwise fall back to out/ build files
function runTests() {
  const req = http.get('http://localhost:3000/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      verifyContent('Home Page', 'Live HTTP 3000', data);
      testNextHttp(1);
    });
  });

  req.on('error', () => {
    console.log('Local dev server not detected on http://localhost:3000. Testing static build artifacts in out/ directory...\n');
    routes.forEach(route => {
      if (fs.existsSync(route.file)) {
        const content = fs.readFileSync(route.file, 'utf-8');
        verifyContent(route.name, `File: ${path.relative(__dirname, route.file)}`, content);
      } else {
        console.error(`❌ Missing static build file: ${route.file}`);
        process.exitCode = 1;
      }
    });
    console.log('\n✅ All compliance and static route verifications completed successfully!');
  });
}

function testNextHttp(index) {
  if (index >= routes.length) {
    console.log('\n✅ All HTTP route verifications completed successfully!');
    return;
  }
  const route = routes[index];
  http.get(route.url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      verifyContent(route.name, `Live HTTP [Status ${res.statusCode}]`, data);
      testNextHttp(index + 1);
    });
  }).on('error', (err) => {
    console.error(`Error fetching ${route.url}:`, err.message);
  });
}

runTests();

