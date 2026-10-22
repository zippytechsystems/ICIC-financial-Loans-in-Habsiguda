"use client";

import React from "react";
import { Header } from "../components/Header";
import { LoanDashboardBar } from "../components/LoanDashboardBar";
import { Hero } from "../components/Hero";
import { TrustStrip } from "../components/TrustStrip";
import { TwoStepFlow } from "../components/TwoStepFlow";
import { LoanGrid } from "../components/LoanGrid";
import { EligibilityForm } from "../components/EligibilityForm";
import { Steps } from "../components/Steps";
import { ContactBlock } from "../components/ContactBlock";
import { Footer } from "../components/Footer";
import { WhatsAppFab } from "../components/WhatsAppFab";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* 1. Sticky Header with Language & Theme Toggles */}
      <Header />

      {/* 2. Official ICICI Bank Loan Customer Dashboard & Status Tracker Bar */}
      <LoanDashboardBar />

      <main className="flex-1">
        {/* 3. Hero Section with Live EMI Calculator */}
        <Hero />

        {/* 3. Trust Strip (The 3 Flyer Items) */}
        <TrustStrip />

        {/* 4. Two-Step Flow Banner */}
        <TwoStepFlow />

        {/* 5. 13 Loan Types Grid with Direct WhatsApp Pre-fills */}
        <LoanGrid />

        {/* 6. Eligibility Inquiry Form & Documents Usually Needed Panel */}
        <EligibilityForm />

        {/* 7. How It Works (4 Steps) */}
        <Steps />

        {/* 8. Contact Block & Habsiguda Office Information */}
        <ContactBlock />
      </main>

      {/* 9. Compliance & Disclaimers Footer */}
      <Footer />

      {/* 10. Floating WhatsApp Action Button */}
      <WhatsAppFab />
    </div>
  );
}
