/**
 * Site Configuration for Habsiguda Loan Desk
 * All business settings, contact numbers, and compliance parameters are centralized here.
 */
export const siteConfig = {
  // Business Branding (Configurable)
  businessName: "Habsiguda Loan Desk",
  businessNameTe: "హబ్సిగూడ లోన్ డెస్క్",
  tagline: "Check Your Eligibility & Find a Suitable Bank Loan",
  taglineTe: "మీకు ఏ Bank Loan Eligibility ఉందో తెలుసుకోండి!",
  subTagline: "One Place – Multiple Loan Options across ICICI Bank & Leading Institutions",
  subTaglineTe: "మీ Profile & Eligibility ఆధారంగా సరైన bank/loan option ఎంచుకోండి.",
  
  // Owner & Connector Details
  ownerTitle: "Authorized Loan Connector",
  ownerTitleTe: "అధికారిక లోన్ కనెక్టర్",
  // Slot for owner's real photo (leave empty or set path when photo is provided)
  ownerPhoto: "", 

  // Contact Details (Strict: +91 6302690251 used everywhere, flyer's number is never used)
  phone: "+91 6302690251",
  displayPhone: "63026 90251",
  whatsappNumber: "916302690251", // Format for wa.me links
  whatsappPrefillText: "Hello Habsiguda Loan Desk, I would like to check my loan eligibility across banks.",
  
  // Address & Local SEO (Configurable)
  address: "Habsiguda Main Road, Habsiguda, Hyderabad, Telangana 500007",
  addressTe: "హబ్సిగూడ మెయిన్ రోడ్, హబ్సిగూడ, హైదరాబాద్, తెలంగాణ 500007",
  area: "Habsiguda",
  areaTe: "హబ్సిగూడ",
  city: "Hyderabad",
  cityTe: "హైదరాబాద్",
  state: "Telangana",
  pincode: "500007",
  geo: {
    latitude: 17.4167,
    longitude: 78.5367,
  },
  
  // Service Areas around Habsiguda & East Hyderabad
  serviceAreas: [
    "Habsiguda",
    "Uppal",
    "Tarnaka",
    "Nacharam",
    "Boduppal",
    "Ghatkesar",
    "Nagole",
    "Ramanthapur",
    "Mallapur",
    "Malkajgiri",
    "Secunderabad",
    "Pocharam IT Corridor",
  ],
  serviceAreasTe: [
    "హబ్సిగూడ",
    "ఉప్పల్",
    "తార్నాక",
    "నాచారం",
    "బోడుప్పల్",
    "ఘట్‌కేసర్",
    "నాగోల్",
    "రామంతాపూర్",
    "మల్లాపూర్",
    "మల్కాజ్‌గిరి",
    "సికింద్రాబాద్",
    "పోచారం ఐటీ కారిడార్",
  ],

  // Working Hours (Optional / Configurable)
  hours: "Monday – Saturday: 9:30 AM – 7:30 PM (Sunday by appointment)",
  hoursTe: "సోమవారం – శనివారం: ఉదయం 9:30 – రాత్రి 7:30 (ఆదివారం అపాయింట్‌మెంట్‌పై)",

  // Live Domain (Update when domain is mapped on Hostinger)
  domain: "https://habsigudaloandesk.com",

  // Google Maps Embed (Only rendered if non-empty)
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226.790928236166!2d78.5367!3d17.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb997f8c09a8ab%3A0x6b4fb439c25608d0!2sHabsiguda%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000",

  // Positioning & Lending Institutions (Strict plain text only - NO LOGOS)
  primaryLenderNotice: "Facilitating ICICI Bank & Multiple Scheduled Commercial Banks and Financial Institutions",
  primaryLenderNoticeTe: "ICICI బ్యాంక్ మరియు ప్రముఖ బ్యాంకులు & ఆర్థిక సంస్థల ద్వారా లోన్ సదుపాయం",

  // Statutory Compliance Disclaimers
  complianceDisclaimerEn: "Loan approval, interest rates, sanctioned amount, processing timelines, and final terms are at the sole discretion of the respective bank or financial institution. Terms and conditions apply. Habsiguda Loan Desk operates as an independent authorized loan connector / channel partner and is NOT the official website of ICICI Bank or any other bank. For detailed institutional terms, please consult the respective bank.",
  complianceDisclaimerTe: "లోన్ ఆమోదం, వడ్డీ రేట్లు, మంజూరు మొత్తం మరియు నిబంధనలు పూర్తిగా సంబంధిత బ్యాంక్ / ఆర్థిక సంస్థ యొక్క అంతర్గత విధానాలపై మరియు క్రెడిట్ విచక్షణపై ఆధారపడి ఉంటాయి. నిబంధనలు మరియు షరతులు వర్తిస్తాయి. ఈ వెబ్‌సైట్ ICICI బ్యాంక్ యొక్క అధికారిక వెబ్‌సైట్ కాదు; మేము అధీకృత లోన్ కనెక్టర్ / ఛానల్ పార్ట్‌నర్‌గా మాత్రమే సేవలు అందిస్తున్నాము.",
  
  // Asterisk conditional note for Education and Consumer loans
  conditionalLoanNoteEn: "*Availability depends on each bank and your profile.",
  conditionalLoanNoteTe: "*లభ్యత ప్రతి బ్యాంక్ నిబంధనలు మరియు మీ అర్హత ప్రొఫైల్‌పై ఆధారపడి ఉంటుంది.",
};
