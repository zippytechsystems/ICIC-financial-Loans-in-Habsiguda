import React from "react";
import { siteConfig } from "../config/site";

export const JsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": siteConfig.businessName,
    "alternateName": [siteConfig.businessNameTe, "ICICI Bank Loan Connector Habsiguda"],
    "description": "Authorized loan connector in Habsiguda, Hyderabad facilitating home loans, LAP, personal loans, and business loans across ICICI Bank and leading institutions.",
    "url": siteConfig.domain,
    "telephone": siteConfig.phone,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address,
      "addressLocality": siteConfig.city,
      "addressRegion": siteConfig.state,
      "postalCode": siteConfig.pincode,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.geo.latitude,
      "longitude": siteConfig.geo.longitude,
    },
    "areaServed": siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      "name": `${area}, Hyderabad`,
    })),
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "19:30",
      },
    ],
    "knowsAbout": [
      "Home Loans",
      "Loan Against Property",
      "Personal Loans",
      "Business Loans",
      "MSME Loans",
      "Construction Loans",
      "Loan Balance Transfer",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
