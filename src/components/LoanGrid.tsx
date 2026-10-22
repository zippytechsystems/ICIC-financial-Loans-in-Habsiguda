"use client";

import React, { useState } from "react";
import { siteConfig } from "../config/site";
import { LOAN_ITEMS } from "../config/loans";
import { LoanCategory } from "../types/loan";
import { useLanguage } from "../i18n/context";

export const LoanGrid: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<LoanCategory>("all");

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
    <section id="loans" className="py-12 sm:py-18 bg-[var(--bg-primary)] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-teal)] dark:text-[var(--brand-teal-light)] bg-[var(--brand-teal-subtle)] px-3 py-1 rounded-full border border-[var(--brand-teal-light)]/20 inline-block mb-2">
            📋 One Place – Multiple Loan Options
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {t.loansSection.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2">
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
                  ? "bg-[var(--brand-teal-deep)] text-white border-[var(--brand-teal-deep)] shadow-md"
                  : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--brand-teal-light)] hover:text-[var(--text-primary)]"
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
              className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--brand-teal-light)]/40 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-teal-subtle)] text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {loan.icon}
                  </div>
                  {loan.badgeEn && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      {lang === "te" ? loan.badgeTe : loan.badgeEn}
                    </span>
                  )}
                </div>

                {/* Loan Titles (English + Telugu) */}
                <h3 className="font-extrabold text-lg sm:text-xl text-[var(--text-primary)] mb-1 group-hover:text-[var(--brand-teal)] dark:group-hover:text-[var(--brand-teal-light)] transition-colors">
                  {lang === "te" ? loan.nameTe : loan.nameEn}
                </h3>
                {lang === "en" && (
                  <div className="text-xs text-[var(--text-muted)] font-telugu mb-2.5 font-medium">
                    {loan.nameTe}
                  </div>
                )}
                {lang === "te" && (
                  <div className="text-xs text-[var(--text-muted)] mb-2.5 font-medium">
                    {loan.nameEn}
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {lang === "te" ? loan.descriptionTe : loan.descriptionEn}
                </p>
              </div>

              {/* Action Button: WhatsApp inquiry */}
              <a
                href={getLoanWhatsAppUrl(loan.nameEn)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold bg-[var(--whatsapp-green)] hover:bg-[var(--whatsapp-hover)] text-white shadow-xs hover:shadow-md transition-all cursor-pointer"
                aria-label={`Inquire about ${loan.nameEn} on WhatsApp`}
              >
                <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.564 5.714 5.867-1.539c1.677.915 3.597 1.437 5.633 1.437 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                </svg>
                <span>{t.loansSection.cardCta}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Asterisk Explanatory Footer Note (Flyer rule compliance) */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-[var(--text-muted)] bg-[var(--bg-surface)] py-2.5 px-4 rounded-xl border border-[var(--border-subtle)] inline-block">
            ℹ️ {lang === "te" ? siteConfig.conditionalLoanNoteTe : siteConfig.conditionalLoanNoteEn}
          </p>
        </div>

      </div>
    </section>
  );
};
