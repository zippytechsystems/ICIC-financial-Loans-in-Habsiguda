import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../config/site";
import { LanguageProvider } from "../i18n/context";
import { ThemeProvider } from "../components/ThemeProvider";
import { JsonLd } from "../components/JsonLd";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const notoSansTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  variable: "--font-telugu",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#083344" },
    { media: "(prefers-color-scheme: dark)", color: "#061118" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Habsiguda Loan Desk | Check Eligibility & Bank Loans in Hyderabad",
    template: "%s | Habsiguda Loan Desk",
  },
  description:
    "One place to check eligibility and access loan options across ICICI Bank & multiple institutions in Habsiguda, Hyderabad. Home loans, LAP, personal loans, MSME & business loans. Free guidance on WhatsApp +91 6302690251.",
  keywords: [
    "ICICI loan Habsiguda",
    "home loan Habsiguda",
    "home loan Hyderabad",
    "personal loan Hyderabad",
    "business loan Hyderabad",
    "loan against property Hyderabad",
    "plot loan Hyderabad",
    "loan connector Habsiguda",
    "loan eligibility check Hyderabad",
    "హోమ్ లోన్స్ హైదరాబాద్",
    "పర్సనల్ లోన్స్ హబ్సిగూడ",
    "బ్యాంక్ లోన్ ఎలిజిబిలిటీ",
  ],
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  publisher: siteConfig.businessName,
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  alternates: {
    canonical: siteConfig.domain,
    languages: {
      "en-IN": siteConfig.domain,
      "te-IN": siteConfig.domain,
    },
  },
  openGraph: {
    title: "Habsiguda Loan Desk | Check Eligibility & Bank Loans in Hyderabad",
    description:
      "Check your eligibility across ICICI Bank and leading institutions in Hyderabad. Fast assistance, doorstep service, and transparent loans.",
    url: siteConfig.domain,
    siteName: siteConfig.businessName,
    locale: "en_IN",
    alternateLocale: "te_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Habsiguda Loan Desk | Check Eligibility & Bank Loans in Hyderabad",
    description:
      "One place for multiple bank loan options in Habsiguda, Hyderabad. Contact on WhatsApp +91 6302690251.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${figtree.variable} ${notoSansTelugu.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased selection:bg-[var(--accent-saffron)] selection:text-white">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
