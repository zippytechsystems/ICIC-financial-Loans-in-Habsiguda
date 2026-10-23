"use client";

import React, { useState } from "react";
import { siteConfig } from "../config/site";
import { LOAN_ITEMS } from "../config/loans";
import { LoanCategory } from "../types/loan";
import { useLanguage } from "../i18n/context";

export const LoanGrid: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<LoanCategory>("all");
  const [selectedLoan, setSelectedLoan] = useState<typeof LOAN_ITEMS[0] | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedLoan(null);
      }
    };
    if (selectedLoan) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedLoan]);

  const filterCategories: { key: LoanCategory; label: string }[] = [
    { key: "all", label: t.loansSection.filterAll },
    { key: "property", label: t.loansSection.filterProperty },
    { key: "business", label: t.loansSection.filterBusiness },
    { key: "personal", label: t.loansSection.filterPersonal },
    { key: "special", label: t.loansSection.filterSpecial },
  ];

  const filteredLoans = LOAN_ITEMS.filter((loan) => {
    if (selectedCategory === "all") return true;
    return loan.category === selectedCategory;
  });

  const getLoanWhatsAppUrl = (loanName: string) => {
    const text =
      `Hello ${siteConfig.businessName},\n\n` +
      `I would like to check my bank loan eligibility for:\n` +
      `• Loan Category: ${loanName}\n` +
      `• Preferred Area: Habsiguda / Hyderabad\n\n` +
      `Please let me know the eligible bank options across ICICI Bank and other institutions.`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="loans" className="py-12 sm:py-18 bg-slate-50 dark:bg-slate-900/60 scroll-mt-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#851A1D] dark:text-[#F37021] bg-red-50 dark:bg-red-950/60 px-3.5 py-1 rounded-full border border-red-200 dark:border-red-900/60 inline-block mb-3 shadow-xs">
            📋 One Place – Multiple Bank Options
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.loansSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t.loansSection.subtitle}
          </p>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-8 sm:mb-10" role="tablist">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              role="tab"
              aria-selected={selectedCategory === cat.key}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                selectedCategory === cat.key
                  ? "bg-[#851A1D] text-white border-[#851A1D] shadow-sm"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[#F37021] hover:text-[#851A1D] dark:hover:text-[#F37021]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 13 Loan Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredLoans.map((loan) => (
            <div
              key={loan.id}
              onClick={() => setSelectedLoan(loan)}
              className="bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 hover:border-[#F37021] transition-all group cursor-pointer"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800 text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {loan.icon}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {loan.badgeEn && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-[#851A1D] dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                        {lang === "te" ? loan.badgeTe : loan.badgeEn}
                      </span>
                    )}
                    <span className="text-[11px] font-bold text-[#F37021] bg-orange-50 dark:bg-orange-950/50 px-2 py-0.5 rounded-md border border-orange-200 dark:border-orange-900 group-hover:bg-[#F37021] group-hover:text-white transition-colors">
                      {lang === "te" ? "వివరాలు →" : "Details →"}
                    </span>
                  </div>
                </div>

                {/* Loan Titles (English + Telugu) */}
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mb-1 group-hover:text-[#851A1D] dark:group-hover:text-[#F37021] transition-colors">
                  {lang === "te" ? loan.nameTe : loan.nameEn}
                </h3>
                {lang === "en" && (
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-telugu mb-2.5 font-medium">
                    {loan.nameTe}
                  </div>
                )}
                {lang === "te" && (
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-2.5 font-medium">
                    {loan.nameEn}
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 font-normal">
                  {lang === "te" ? loan.descriptionTe : loan.descriptionEn}
                </p>
              </div>

              {/* Action Buttons: WhatsApp inquiry & Call */}
              <div
                className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={getLoanWhatsAppUrl(loan.nameEn)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-[var(--whatsapp-green)] hover:bg-[var(--whatsapp-hover)] text-white shadow-xs hover:shadow-md transition-all cursor-pointer"
                  aria-label={`Inquire about ${loan.nameEn} on WhatsApp`}
                >
                  <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.564 5.714 5.867-1.539c1.677.915 3.597 1.437 5.633 1.437 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                  </svg>
                  <span>{t.loansSection.cardCta}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-[#851A1D] hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                  title="Call Loan Officer"
                  aria-label="Call Loan Officer"
                >
                  📞
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Asterisk Explanatory Footer Note (Flyer rule compliance) */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 inline-block shadow-xs">
            ℹ️ {lang === "te" ? siteConfig.conditionalLoanNoteTe : siteConfig.conditionalLoanNoteEn}
          </p>
        </div>

      </div>

      {/* LOAN DETAIL MODAL / POPUP WITH PROMINENT BACK BUTTONS */}
      {selectedLoan && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="loan-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedLoan(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Prominent Back Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60 sticky top-0 z-10 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setSelectedLoan(null)}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-700 text-[#851A1D] dark:text-[#F37021] border border-slate-200 dark:border-slate-600 text-xs sm:text-sm font-black shadow-xs hover:bg-[#851A1D] hover:text-white dark:hover:bg-[#F37021] dark:hover:text-white transition-all cursor-pointer"
                aria-label="Back to All Loans"
              >
                <span className="text-base font-bold">←</span>
                <span>{lang === "te" ? "వెనక్కి వెళ్లండి (Back to Loans)" : "Back to Loans"}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedLoan(null)}
                className="w-9 h-9 rounded-full bg-slate-200/60 dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:bg-red-500 hover:text-white flex items-center justify-center text-sm font-bold transition-all cursor-pointer"
                aria-label="Close details"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Header Info */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 text-3xl flex items-center justify-center shrink-0 shadow-xs">
                  {selectedLoan.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#851A1D] dark:text-[#F37021]">
                      {selectedLoan.category.toUpperCase()} CATEGORY
                    </span>
                    {selectedLoan.badgeEn && (
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700">
                        {lang === "te" ? selectedLoan.badgeTe : selectedLoan.badgeEn}
                      </span>
                    )}
                  </div>
                  <h2 id="loan-modal-title" className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {lang === "te" ? selectedLoan.nameTe : selectedLoan.nameEn}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {lang === "te" ? selectedLoan.nameEn : selectedLoan.nameTe}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {lang === "te" ? selectedLoan.descriptionTe : selectedLoan.descriptionEn}
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-orange-50/60 dark:bg-slate-800 border border-orange-100 dark:border-slate-700 text-center">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Interest Rate</span>
                  <strong className="text-xs sm:text-sm text-[#851A1D] dark:text-[#F37021] font-black">Repo Linked</strong>
                </div>
                <div className="p-3 rounded-xl bg-orange-50/60 dark:bg-slate-800 border border-orange-100 dark:border-slate-700 text-center">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Max Tenure</span>
                  <strong className="text-xs sm:text-sm text-slate-900 dark:text-white font-black">Up to 30 Yrs</strong>
                </div>
                <div className="p-3 rounded-xl bg-orange-50/60 dark:bg-slate-800 border border-orange-100 dark:border-slate-700 text-center">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Sourcing Hub</span>
                  <strong className="text-xs sm:text-sm text-slate-900 dark:text-white font-black">ICICI Habsiguda</strong>
                </div>
                <div className="p-3 rounded-xl bg-orange-50/60 dark:bg-slate-800 border border-orange-100 dark:border-slate-700 text-center">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Brokerage Fee</span>
                  <strong className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-black">₹0 (100% Free)</strong>
                </div>
              </div>

              {/* Partner Banks Strip */}
              <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60">
                <h4 className="text-xs font-bold text-amber-950 dark:text-amber-200 mb-1.5 flex items-center gap-1.5">
                  <span>🏛️</span>
                  <span>{lang === "te" ? "అందుబాటులో ఉన్న బ్యాంక్ టై-అప్‌లు:" : "Available Sourcing Tie-ups:"}</span>
                </h4>
                <p className="text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
                  ICICI Bank (Habsiguda Retail Hub #0492), HDFC Bank, State Bank of India (SBI), Axis Bank, Kotak, and Premier Scheduled NBFCs.
                </p>
              </div>

              {/* Documents Checklist for this Loan */}
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
                  <span>📑</span>
                  <span>{lang === "te" ? "కావలసిన ప్రాథమిక ధృవీకరణ పత్రాలు (Checklist):" : "Key Documents Checklist:"}</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-700">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>KYC (Aadhaar & PAN Card)</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-700">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Last 6 Months Bank Statement</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-700">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>3 Months Salary Slips / 2 Yrs ITR</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-700">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Property Title Deeds / Link Docs (if applicable)</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={getLoanWhatsAppUrl(selectedLoan.nameEn)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-extrabold text-sm bg-[var(--whatsapp-green)] hover:bg-[var(--whatsapp-hover)] text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.564 5.714 5.867-1.539c1.677.915 3.597 1.437 5.633 1.437 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                  </svg>
                  <span>{lang === "te" ? "వాట్సాప్‌లో దరఖాస్తు చేయండి" : "Apply via WhatsApp"}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-extrabold text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-[#851A1D] dark:text-amber-300 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
                >
                  <span>📞 {siteConfig.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Bottom Modal Footer with Prominent Back Button */}
            <div className="px-6 py-3.5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedLoan(null)}
                className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-[#851A1D] dark:hover:text-[#F37021] transition-colors cursor-pointer py-1"
              >
                <span>←</span>
                <span>{lang === "te" ? "వెనక్కి వెళ్ళండి (Back to Loans)" : "Back to Loans"}</span>
              </button>
              <span className="text-[11px] text-slate-400">Habsiguda Loan Desk</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
