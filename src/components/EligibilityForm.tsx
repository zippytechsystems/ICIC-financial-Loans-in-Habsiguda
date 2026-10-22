"use client";

import React, { useState } from "react";
import { siteConfig } from "../config/site";
import { LOAN_ITEMS } from "../config/loans";
import { useLanguage } from "../i18n/context";
import { DocsPanel } from "./DocsPanel";

export const EligibilityForm: React.FC = () => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    loanType: "Home Loans",
    loanAmount: "₹35,00,000",
    monthlyIncome: "₹60,000 / month",
    locationArea: "Habsiguda",
  });

  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Validate Indian 10-digit mobile number (starts with 6, 7, 8, or 9)
  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s\-+]/g, "").replace(/^91/, "");
    const indianMobileRegex = /^[6-9]\d{9}$/;
    return indianMobileRegex.test(cleaned);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData({ ...formData, phone: val });
    if (phoneError && validatePhone(val)) {
      setPhoneError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanedPhone = formData.phone.replace(/[\s\-+]/g, "").replace(/^91/, "");
    if (!validatePhone(cleanedPhone)) {
      setPhoneError(t.eligibilityForm.phoneError);
      return;
    }

    setPhoneError("");
    setSubmitted(true);

    // Format WhatsApp message
    const message =
      `Hi ${siteConfig.businessName},\n\n` +
      `I would like to check my bank loan eligibility:\n` +
      `• Name: ${formData.fullName.trim()}\n` +
      `• Mobile: ${cleanedPhone}\n` +
      `• Loan Category: ${formData.loanType}\n` +
      `• Loan Amount Needed: ${formData.loanAmount.trim()}\n` +
      `• Monthly Income / Turnover: ${formData.monthlyIncome.trim()}\n` +
      `• Location: ${formData.locationArea.trim()}, Hyderabad\n` +
      `• Priority Lending Sourcing: ICICI Bank (Habsiguda Branch) & Leading Financial Institutions\n\n` +
      `Please let me know suitable bank options, in-principle approval criteria, and doorstep service.`;

    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="eligibility" className="py-12 sm:py-18 bg-[var(--bg-elevated)]/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-saffron)] bg-[var(--accent-saffron-subtle)] px-3 py-1 rounded-full border border-[var(--accent-saffron)]/20 inline-block mb-2">
            📝 1-Minute Eligibility Check
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {t.eligibilityForm.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2">
            {t.eligibilityForm.subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Form on Left, Documents Panel on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Eligibility Form Column */}
          <div className="lg:col-span-7 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 shadow-md">
            
            {/* STRICT SECURITY WARNING BANNER */}
            <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-500 text-amber-950 dark:text-amber-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🛡️</span>
                <div>
                  <h4 className="font-bold text-sm">
                    {t.eligibilityForm.securityAlertTitle}
                  </h4>
                  <p className="text-xs leading-relaxed mt-0.5">
                    {t.eligibilityForm.securityAlertMsg}
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
              
              {/* Full Name */}
              <div>
                <label htmlFor="user-name" className="block text-xs sm:text-sm font-bold text-[var(--text-primary)] mb-1.5">
                  {t.eligibilityForm.fullNameLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  id="user-name"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={t.eligibilityForm.fullNamePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-strong)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-saffron)] transition-all"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="user-phone" className="block text-xs sm:text-sm font-bold text-[var(--text-primary)] mb-1.5">
                  {t.eligibilityForm.phoneLabel} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-xs sm:text-sm font-bold text-[var(--text-muted)]">
                    +91
                  </div>
                  <input
                    id="user-phone"
                    type="tel"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder={t.eligibilityForm.phonePlaceholder}
                    className={`w-full pl-13 pr-4 py-3 rounded-xl bg-[var(--bg-elevated)] border text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:ring-2 transition-all ${
                      phoneError
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[var(--border-strong)] focus:ring-[var(--accent-saffron)]"
                    }`}
                  />
                </div>
                {phoneError && (
                  <p className="text-xs text-red-500 font-semibold mt-1.5 flex items-center gap-1">
                    <span>⚠️</span>
                    <span>{phoneError}</span>
                  </p>
                )}
              </div>

              {/* Loan Category Dropdown */}
              <div>
                <label htmlFor="user-loan-type" className="block text-xs sm:text-sm font-bold text-[var(--text-primary)] mb-1.5">
                  {t.eligibilityForm.loanTypeLabel} <span className="text-red-500">*</span>
                </label>
                <select
                  id="user-loan-type"
                  value={formData.loanType}
                  onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-strong)] text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-saffron)] transition-all cursor-pointer"
                >
                  {LOAN_ITEMS.map((loan) => (
                    <option key={loan.id} value={loan.nameEn}>
                      {loan.icon} {lang === "te" ? loan.nameTe : loan.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2-Column: Loan Amount & Monthly Income */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="user-amount" className="block text-xs sm:text-sm font-bold text-[var(--text-primary)] mb-1.5">
                    {t.eligibilityForm.loanAmountLabel}
                  </label>
                  <input
                    id="user-amount"
                    type="text"
                    value={formData.loanAmount}
                    onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                    placeholder={t.eligibilityForm.loanAmountPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-strong)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-saffron)] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="user-income" className="block text-xs sm:text-sm font-bold text-[var(--text-primary)] mb-1.5">
                    {t.eligibilityForm.incomeLabel}
                  </label>
                  <input
                    id="user-income"
                    type="text"
                    value={formData.monthlyIncome}
                    onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                    placeholder={t.eligibilityForm.incomePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-strong)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-saffron)] transition-all"
                  />
                </div>
              </div>

              {/* Location in Hyderabad */}
              <div>
                <label htmlFor="user-location" className="block text-xs sm:text-sm font-bold text-[var(--text-primary)] mb-1.5">
                  {t.eligibilityForm.areaLabel}
                </label>
                <input
                  id="user-location"
                  type="text"
                  value={formData.locationArea}
                  onChange={(e) => setFormData({ ...formData, locationArea: e.target.value })}
                  placeholder={t.eligibilityForm.areaPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-strong)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-saffron)] transition-all"
                />
              </div>

              {/* First Sourcing Preference (Readonly indicator) */}
              <div>
                <label className="block text-xs font-bold text-[var(--text-muted)] mb-1">
                  {t.eligibilityForm.preferredBankLabel}
                </label>
                <div className="px-4 py-2.5 rounded-xl bg-[var(--brand-teal-subtle)] border border-[var(--brand-teal-light)]/30 text-xs sm:text-sm font-bold text-[var(--brand-teal)] dark:text-sky-300 flex items-center justify-between">
                  <span>⭐ {t.eligibilityForm.preferredBankVal}</span>
                  <span className="text-xs font-semibold opacity-75">Habsiguda Desk</span>
                </div>
              </div>

              {/* Submit CTA (WhatsApp) */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-base bg-[var(--whatsapp-green)] hover:bg-[var(--whatsapp-hover)] text-white shadow-md hover:shadow-lg transition-all cursor-pointer mt-4"
                aria-label="Submit eligibility inquiry to WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.564 5.714 5.867-1.539c1.677.915 3.597 1.437 5.633 1.437 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                </svg>
                <span>{t.eligibilityForm.submitBtn}</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs text-center font-semibold">
                  ✓ Opening WhatsApp with your prefilled details...
                </div>
              )}
            </form>

          </div>

          {/* Documents Usually Needed Column */}
          <div className="lg:col-span-5">
            <DocsPanel />
          </div>

        </div>
      </div>
    </section>
  );
};
