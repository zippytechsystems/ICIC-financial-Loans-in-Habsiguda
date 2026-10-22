"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "../config/site";
import { useLanguage } from "../i18n/context";

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] pt-12 pb-24 sm:pb-12 text-[var(--text-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-8 border-b border-[var(--border-subtle)]">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--brand-teal-deep)] text-white flex items-center justify-center font-bold text-base shadow-sm">
                HLD
              </div>
              <span className="font-extrabold text-lg text-[var(--text-primary)]">
                {lang === "te" ? siteConfig.businessNameTe : siteConfig.businessName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg">
              {t.footer.brandTagline}
            </p>
            <div className="text-xs text-[var(--text-muted)] flex items-center gap-2 pt-1">
              <span>📍 {lang === "te" ? siteConfig.addressTe : siteConfig.address}</span>
            </div>
            <div className="text-xs text-[var(--text-muted)] flex items-center gap-2">
              <span>📞 {siteConfig.phone} (WhatsApp & Direct Call)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-sm text-[var(--text-primary)] uppercase tracking-wider mb-3">
              {lang === "te" ? "ముఖ్య లింకులు" : "Quick Links"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#loans" className="hover:text-[var(--accent-saffron)] transition-colors">
                  {t.nav.loans}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[var(--accent-saffron)] transition-colors">
                  {t.nav.calculator}
                </a>
              </li>
              <li>
                <a href="#eligibility" className="hover:text-[var(--accent-saffron)] transition-colors">
                  {t.nav.eligibility}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[var(--accent-saffron)] transition-colors">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--accent-saffron)] transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-sm text-[var(--text-primary)] uppercase tracking-wider mb-3">
              {lang === "te" ? "చట్టపరమైన సమాచారం" : "Regulatory & Policies"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-[var(--accent-saffron)] transition-colors">
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-[var(--accent-saffron)] transition-colors">
                  {t.footer.disclaimer}
                </Link>
              </li>
            </ul>
            <div className="pt-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
              <span>🛡️</span>
              <span>100% Secure & Free Guidance</span>
            </div>
          </div>

        </div>

        {/* Mandatory Regulatory Compliance Box */}
        <div className="bg-[var(--bg-elevated)] border border-[var(--border-strong)] rounded-2xl p-5 sm:p-6 mb-8 text-xs leading-relaxed text-[var(--text-secondary)] shadow-inner">
          <div className="flex items-start gap-2.5 mb-2">
            <span className="text-base flex-shrink-0">⚖️</span>
            <strong className="text-[var(--text-primary)] font-bold text-xs uppercase tracking-wide">
              {lang === "te" ? "చట్టబద్ధమైన రెగ్యులేటరీ డిస్క్లైమర్ (Statutory Compliance Disclaimer)" : "Statutory Regulatory Compliance & Channel Disclosure"}
            </strong>
          </div>
          <p className="mb-2 text-justify">
            {lang === "te" ? siteConfig.complianceDisclaimerTe : siteConfig.complianceDisclaimerEn}
          </p>
          <p className="text-justify text-[11px] text-[var(--text-muted)] border-t border-[var(--border-subtle)] pt-2 mt-2">
            {t.footer.authorizedNotice}
          </p>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)] text-center sm:text-left">
          <div>
            &copy; {currentYear} {siteConfig.businessName}. {t.footer.allRightsReserved}
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:underline">
              {t.footer.privacyPolicy}
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:underline">
              {t.footer.disclaimer}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
