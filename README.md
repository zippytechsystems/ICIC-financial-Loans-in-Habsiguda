# Habsiguda Loan Desk – Bilingual Lead Generation Website

A production-ready, high-converting, bilingual (**English + Telugu**) lead-generation web application built for an authorized loan connector based in **Habsiguda, Hyderabad, Telangana, India**. 

The website facilitates retail and commercial loan sourcing across **ICICI Bank** (Habsiguda Retail Hub) and multiple leading scheduled commercial banks and NBFCs, driving qualified borrower leads directly to **WhatsApp Business** and phone calls.

---

## 🚀 Key Highlights & Tech Stack

- **Framework:** Next.js (App Router) + React 19 + TypeScript.
- **Styling:** Tailwind CSS with light and dark mode tokens via CSS custom variables.
- **Static Export:** `output: 'export'` generates a 100% static site in `out/`, fully compatible with Hostinger shared hosting (Apache/Nginx) or any static host. Zero Node server or backend database required.
- **Lead Capture:** Direct WhatsApp integration (`wa.me/916302690251`) with pre-filled borrower details and 1-tap phone calls.
- **Bilingual Experience:** Typed dictionaries (`src/i18n/en.ts` and `src/i18n/te.ts`) with instant language switching and `localStorage` persistence.
- **Typography:** Google Fonts via `next/font`:
  - **Bricolage Grotesque** (Headings)
  - **Figtree** (Body Copy)
  - **Noto Sans Telugu** (Native Telugu Rendering)
- **Local SEO:** Built-in JSON-LD (`FinancialService` / `LocalBusiness`), OpenGraph tags, Twitter Cards, `sitemap.xml`, and `robots.txt` targeting keywords such as *"ICICI loan Habsiguda"*, *"home loan Habsiguda"*, *"business loan Hyderabad"*, and *"loan against property Hyderabad"*.

---

## 📁 Project Architecture & Components

```
habsiguda-loan-desk/
├── public/
│   ├── .htaccess             # Hostinger Apache config (HTTPS, Gzip, Caching, Clean URLs)
│   ├── icon.svg              # Brand Favicon
│   ├── og-image.svg          # Social Share / OpenGraph preview image
│   └── ...
├── src/
│   ├── app/
│   │   ├── disclaimer/       # Statutory regulatory disclaimer page (EN + TE)
│   │   ├── privacy-policy/   # Bilingual privacy policy page (EN + TE)
│   │   ├── globals.css       # Brand tokens (Deep Teal, Saffron, WhatsApp Green)
│   │   ├── layout.tsx        # Root layout, fonts, JSON-LD, metadata
│   │   ├── page.tsx          # Single-page landing experience
│   │   ├── robots.ts         # Robots.txt generator
│   │   └── sitemap.ts        # Sitemap generator
│   ├── components/
│   │   ├── ContactBlock.tsx  # Habsiguda office, map embed, service areas
│   │   ├── DocsPanel.tsx     # Checklist of documents usually needed
│   │   ├── EligibilityForm.tsx # Lead capture form with 10-digit mobile validation
│   │   ├── EmiCalculator.tsx # Live reducing balance EMI calculator
│   │   ├── Footer.tsx        # Statutory disclaimers & compliance notices
│   │   ├── Header.tsx        # Sticky header with EN/TE toggle & theme toggle
│   │   ├── Hero.tsx          # High-converting hero with Telugu flyer quotes
│   │   ├── JsonLd.tsx        # Schema.org FinancialService structured data
│   │   ├── LoanGrid.tsx      # 13 loan categories with category filters
│   │   ├── Steps.tsx         # 4-step loan process
│   │   ├── ThemeProvider.tsx # Light/dark mode context
│   │   ├── TrustStrip.tsx    # 3 core trust badges from flyer
│   │   ├── TwoStepFlow.tsx   # Two-step flow banner (Check Eligibility -> Choose Bank)
│   │   └── WhatsAppFab.tsx   # Floating WhatsApp button + mobile bottom bar
│   ├── config/
│   │   ├── loans.ts          # 13 loan categories with bilingual descriptions
│   │   └── site.ts           # Central business config (Phone, Address, Domain, Photo)
│   ├── i18n/
│   │   ├── context.tsx       # LanguageProvider context & useLanguage hook
│   │   ├── en.ts             # Complete English dictionary
│   │   ├── te.ts             # Complete Telugu dictionary
│   │   └── types.ts          # Typed translation schema
│   └── types/
│       └── loan.ts           # TypeScript interfaces
├── next.config.ts            # Next.js static export configuration (output: 'export')
├── package.json
└── README.md
```

---

## 🛠️ Local Development & Running

### 1. Prerequisites
- Node.js `v18.18+` or `v20+` or `v24+`
- npm `v9+` or `v10+`

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Automated Route & Compliance Tests
```bash
npm test
```
The test suite automatically verifies:
- All static routes return `HTTP 200`
- The old flyer number (`9542439498`) is **NOT** present anywhere
- The authorized number (`+91 6302690251`) is present across all links
- Exact Telugu taglines render cleanly
- All 13 loan types exist in the compiled DOM
- Mathematical accuracy of reducing balance EMI calculation

---

## ⚙️ Customizing Business Settings (`src/config/site.ts`)

All business identity parameters, telephone numbers, address details, and owner slots are centralized in [`src/config/site.ts`](src/config/site.ts):

```typescript
export const siteConfig = {
  // Business Branding
  businessName: "Habsiguda Loan Desk",
  businessNameTe: "హబ్సిగూడ లోన్ డెస్క్",
  tagline: "Check Your Eligibility & Find a Suitable Bank Loan",
  taglineTe: "మీకు ఏ Bank Loan Eligibility ఉందో తెలుసుకోండి!",

  // Contact Number (Strictly +91 6302690251 everywhere)
  phone: "+91 6302690251",
  displayPhone: "63026 90251",
  whatsappNumber: "916302690251",

  // Office Location
  address: "Habsiguda Main Road, Habsiguda, Hyderabad, Telangana 500007",
  addressTe: "హబ్సిగూడ మెయిన్ రోడ్, హబ్సిగూడ, హైదరాబాద్, తెలంగాణ 500007",
  area: "Habsiguda",
  city: "Hyderabad",
  pincode: "500007",

  // Working Hours (Optional)
  hours: "Monday – Saturday: 9:30 AM – 7:30 PM (Sunday by appointment)",

  // Live Production Domain (Update once domain is connected)
  domain: "https://habsigudaloandesk.com",

  // Slot for Owner's Real Photo
  // Place photo inside public/owner.jpg and set ownerPhoto: "/owner.jpg"
  ownerPhoto: "", 

  // Google Maps Embed (Paste your Google Maps iframe embed src URL here)
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=...",
};
```

---

## 📦 Building the Static Export for Production

To produce the static export bundle ready for web hosting:

```bash
npm run build
```

This compiles all pages into pure static HTML, CSS, JavaScript, and assets inside the `out/` directory:
- `out/index.html` (Landing page)
- `out/privacy-policy/index.html` (Privacy Policy)
- `out/disclaimer/index.html` (Regulatory Compliance Disclaimer)
- `out/sitemap.xml` (SEO Sitemap)
- `out/robots.txt` (Robots crawl rules)
- `out/.htaccess` (Apache server rules for Hostinger)

---

## 🌐 Deploying to Hostinger Shared Hosting

Deploying the static build to Hostinger takes under 5 minutes:

### Step 1: Build the Static Bundle
Run `npm run build` in the project root. Confirm the `out/` directory is created.

### Step 2: Log into Hostinger hPanel
1. Navigate to [hpanel.hostinger.com](https://hpanel.hostinger.com).
2. Go to **Websites** and click **Manage** next to your domain.
3. Open **Files** → **File Manager** (or connect via FTP using FileZilla).

### Step 3: Upload Files to `public_html`
1. Navigate into the `public_html` folder.
2. (Optional) Back up or delete any default placeholder `default.php` file.
3. Select **Upload** → **Folder** or zip the contents of `out/` and extract it directly inside `public_html/`.
4. Ensure `index.html` and `.htaccess` are located directly in the root of `public_html/`:
   ```
   public_html/
   ├── .htaccess
   ├── index.html
   ├── robots.txt
   ├── sitemap.xml
   ├── icon.svg
   ├── og-image.svg
   ├── disclaimer/
   │   └── index.html
   ├── privacy-policy/
   │   └── index.html
   └── _next/
   ```

### Step 4: Verify SSL Certificate
In Hostinger hPanel under **Security** → **SSL**, verify that **Let's Encrypt SSL** is active for your domain and force HTTPS is enabled. The included `.htaccess` file will automatically enforce 301 HTTPS redirects.

---

## 📍 Google Business Profile (GBP) Verification Checklist for Habsiguda

To rank #1 in Google Maps and local 3-pack search results for queries like *"loan connector Habsiguda"* or *"home loan Habsiguda"*, execute this checklist:

- [ ] **1. Business Name:** Use the exact business name set in `site.ts`: `Habsiguda Loan Desk`.
- [ ] **2. Primary Category:** Select **Loan agency** or **Mortgage broker**.
- [ ] **3. Secondary Categories:** Add *Financial consultant*, *Credit counseling service*, *Real estate consultant*.
- [ ] **4. Primary Phone Number:** Enter **+91 6302690251** (must match website and WhatsApp Business exactly).
- [ ] **5. Physical Address:** Enter the exact physical address in Habsiguda, Hyderabad.
- [ ] **6. Service Areas:** Add key neighborhood service areas:
  - Habsiguda
  - Uppal
  - Tarnaka
  - Nacharam
  - Boduppal
  - Ghatkesar
  - Ramanthapur
  - Nagole
  - Mallapur
  - Malkajgiri
  - Secunderabad
- [ ] **7. Website Link:** Enter your full domain URL (e.g. `https://habsigudaloandesk.com`).
- [ ] **8. Business Hours:** Set opening hours matching `site.ts` (e.g. `Mon-Sat: 9:30 AM - 7:30 PM`).
- [ ] **9. Description:** Include keywords in both English and Telugu:
  > *"Authorized loan connector in Habsiguda, Hyderabad assisting salaried and self-employed borrowers with Home Loans, Plot Loans, Loan Against Property (LAP), Personal Loans, and Business Loans across ICICI Bank and leading financial institutions. Doorstep document service. ఉచిత లోన్ అర్హత పరీక్ష మరియు వేగవంతమైన సహాయం."*
- [ ] **10. High-Quality Verification Photos:**
  - Exterior building entrance and street view in Habsiguda showing street name.
  - Signboard or office entrance door.
  - Office desk / workspace interior.
  - Professional photo of the owner with official bank connector badge or visiting card.
- [ ] **11. Verification Method:** Complete Google's video verification or SMS OTP verification promptly.

---

## ⚖️ Regulatory & Owner Compliance Checklist

Before taking the website live, the business owner must verify the following:

1. **ICICI Bank Brand Policy:**
   - Mention ICICI Bank in **plain text only** (as implemented).
   - **Do NOT** upload or display the official ICICI Bank logo, corporate color schemes, or copyrighted promotional art until written channel partner branding authorization has been granted by ICICI Bank.
2. **Statutory Disclaimer (Included in Footer & Subpages):**
   - Retain the mandatory disclosure: *"Loan approval, interest rates, and final terms are at the sole discretion of the respective bank or financial institution. Terms and conditions apply."*
3. **No Unrealistic Guarantees:**
   - Never promise "100% Guaranteed Approval", "Instant Disbursal in 5 minutes", or fixed promotional interest rates without formal bank credit assessment.
4. **Data Protection & KYC Privacy:**
   - Never request or store PAN card numbers, Aadhaar numbers, net banking passwords, or OTPs on the public website.
   - All KYC documentation must be verified through official banking channels.
5. **Update Owner Photo:**
   - Replace the placeholder avatar in `src/config/site.ts` by placing your actual photo inside `public/owner.jpg` and setting `ownerPhoto: "/owner.jpg"`.
