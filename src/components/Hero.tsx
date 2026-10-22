"use client";

import React from "react";
import { siteConfig } from "../config/site";
import { useLanguage } from "../i18n/context";
import { EmiCalculator } from "./EmiCalculator";

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-[#851A1D]/10 via-[var(--bg-primary)] to-[var(--bg-primary)]">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#F37021]/10 to-transparent pointer-events-none -z-10 rounded-full blur-3xl opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Official ICICI Loan Positioning, Value Props, Telugu Banner, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#851A1D]/10 text-[#851A1D] dark:text-[#F37021] border border-[#851A1D]/20 mb-4 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F37021] animate-ping"></span>
              <span>🏛️ ICICI Bank Authorized Retail Asset Hub (Code: 0492)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] leading-[1.18] tracking-tight mb-3 font-serif">
              ICICI Bank & Multi-Bank <span className="text-[#851A1D] dark:text-[#F37021]">Retail Loan Sourcing Hub</span>
            </h1>

            {/* Official Telugu Tagline Headline */}
            <div className="font-telugu font-extrabold text-lg sm:text-2xl text-[#851A1D] dark:text-[#F37021] mb-4">
              మీకు ఏ Bank Loan Eligibility ఉందో తెలుసుకోండి!
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-5 max-w-2xl font-medium">
              {lang === "te"
                ? "హబ్సిగూడ, ఉప్పల్, తార్నాక, నాచారం పరిసర ప్రాంతాల వారికి హోమ్ లోన్లు, ప్రాపర్టీపై లోన్లు (LAP) మరియు బిజినెస్ లోన్లు అత్యల్ప వడ్డీ రేట్లతో (8.35%* నుండి) డోర్‌స్టెప్ సర్వీస్."
                : "Doorstep loan processing for Home Loans, Loan Against Property (LAP), Business Loans & Personal Loans across Habsiguda, Uppal & East Hyderabad starting @ 8.35%* p.a."}
            </p>

            {/* Exact Flyer Telugu Quotes Banner (Rendered as Crisp Native Text) */}
            <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/10 border-l-4 border-[#F37021] rounded-r-xl p-4 sm:p-5 mb-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">💡</span>
                <div>
                  <p className="font-telugu font-bold text-base sm:text-lg text-[#851A1D] dark:text-amber-200 leading-snug">
                    &ldquo;మీ Profile & Eligibility ఆధారంగా సరైన bank/loan option ఎంచుకోండి.&rdquo;
                  </p>
                  <p className="font-telugu text-xs sm:text-sm text-amber-900/90 dark:text-amber-300/90 mt-1 leading-normal font-semibold">
                    ఒకే చోట ICICI బ్యాంక్ మరియు ఇతర ప్రముఖ బ్యాంకుల ద్వారా లోన్ సదుపాయం.
                  </p>
                </div>
              </div>
            </div>

            {/* Live Benchmark ROI Chips */}
            <div className="bg-white dark:bg-[#0E1722] border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 mb-7 shadow-xs">
              <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[#F37021] font-bold text-base">📈</span>
                  <span className="font-extrabold text-sm sm:text-base text-[var(--text-primary)]">
                    Official Lending Rates & Benchmarks (Q4 2026)
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#851A1D] dark:text-amber-300 bg-red-100 dark:bg-red-950/60 px-2.5 py-0.5 rounded-full border border-red-300 dark:border-red-800">
                  Habsiguda Hub (0492)
                </span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-center font-medium">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Home Loans</span>
                  <strong className="text-sm font-extrabold text-[#851A1D] dark:text-[#F37021] block">8.35% – 8.75%</strong>
                  <span className="text-[9px] text-emerald-600 font-semibold">Repo Linked</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">LAP (Property)</span>
                  <strong className="text-sm font-extrabold text-[#851A1D] dark:text-[#F37021] block">9.25% – 10.25%</strong>
                  <span className="text-[9px] text-slate-400">Up to 65% LTV</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Business MSME</span>
                  <strong className="text-sm font-extrabold text-[#851A1D] dark:text-[#F37021] block">11.25% – 14.50%</strong>
                  <span className="text-[9px] text-blue-600 font-semibold">No Collateral</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Personal Loans</span>
                  <strong className="text-sm font-extrabold text-[#851A1D] dark:text-[#F37021] block">10.65% – 12.50%</strong>
                  <span className="text-[9px] text-emerald-600 font-semibold">Express Disbursal</span>
                </div>
              </div>
            </div>

            {/* Dual CTAs (WhatsApp & Phone Call) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappPrefillText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold bg-[var(--whatsapp-green)] hover:bg-[var(--whatsapp-hover)] text-white shadow-md hover:shadow-lg transition-all text-center animate-whatsapp-pulse cursor-pointer"
                aria-label="Check eligibility on WhatsApp at +91 6302690251"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.564 5.714 5.867-1.539c1.677.915 3.597 1.437 5.633 1.437 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                </svg>
                <span>{t.hero.ctaWhatsApp}</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold bg-[#851A1D] hover:bg-[#621013] text-white shadow-md hover:shadow-lg transition-all text-center cursor-pointer border border-white/20"
                aria-label="Call authorized loan connector at +91 6302690251"
              >
                <span>📞</span>
                <span>{t.hero.ctaCall}: 63026 90251</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-500">✓</span> 100% Free Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-500">✓</span> Zero Upfront Fees
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-500">✓</span> Doorstep Document Pickup
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-500">✓</span> Habsiguda, Hyderabad
              </span>
            </div>

          </div>

          {/* Right Column: Live Reducing Balance EMI Calculator */}
          <div className="lg:col-span-5 w-full">
            <EmiCalculator />
          </div>

        </div>
      </div>
    </section>
  );
};
