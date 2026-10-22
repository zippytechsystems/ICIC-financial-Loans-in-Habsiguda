"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "../config/site";
import { useLanguage } from "../i18n/context";
import { useTheme } from "./ThemeProvider";

export const Header: React.FC = () => {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.loans, href: "#loans" },
    { label: t.nav.calculator, href: "#calculator" },
    { label: t.nav.eligibility, href: "#eligibility" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-lg">
      {/* 1. Official ICICI Bank Top Notification & Security Bar */}
      <div className="bg-[#621013] text-white text-[11px] py-1.5 px-4 border-b border-white/10 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="px-2 py-0.5 rounded bg-[#F37021] text-[9px] font-black uppercase tracking-wider text-white shadow-xs">
              OFFICIAL SOURCING
            </span>
            <span className="truncate">
              🏛️ <strong>ICICI Bank Retail Asset Hub (Habsiguda Branch Code: 0492)</strong> • Partner Code: <span className="font-mono text-[#FFB020] font-bold">CP-HBG-04921</span> • Special Home Loan ROI @ <strong>8.35%* p.a.</strong>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0 text-[10px] text-white/80">
            <span>📞 Direct Desk: <strong>+91 6302690251</strong></span>
            <span>•</span>
            <span>Working Hours: <strong>9:30 AM – 7:30 PM</strong></span>
          </div>
        </div>
      </div>

      {/* 2. Main ICICI Bank Brand Navigation Header */}
      <div className="w-full bg-[#851A1D] border-b-2 border-[#F37021] text-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Official ICICI Bank Loan Desk Brand Emblem */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="ICICI Bank Loan Connector - Habsiguda"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F37021] via-[#E05A10] to-[#851A1D] text-white flex items-center justify-center font-black text-2xl shadow-md border border-white/30 transform group-hover:scale-105 transition-transform">
              i
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-xl tracking-tight uppercase text-white font-serif">
                  ICICI Bank
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-black bg-[#F37021] text-white uppercase tracking-wider shadow-xs">
                  Loans
                </span>
              </div>
              <span className="text-xs font-semibold text-amber-200/90 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                {lang === "te"
                  ? "అధికారిక లోన్ కనెక్టర్ • హబ్సిగూడ డెస్క్ (0492)"
                  : "Authorized Loan Connector Desk • Habsiguda Hub"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-bold text-white/90 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Controls: Language, Theme, Phone, Eligibility CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-white/15 hover:bg-white/25 border border-white/20 text-white transition-all cursor-pointer shadow-xs"
              aria-label={`Switch to ${lang === "en" ? "Telugu" : "English"}`}
              title={`Switch to ${lang === "en" ? "Telugu" : "English"}`}
            >
              <span>🌐</span>
              <span>{t.nav.switchLang}</span>
            </button>

            {/* Theme Switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 border border-white/20 text-white text-xs cursor-pointer shadow-xs"
              aria-label={t.nav.toggleTheme}
              title={t.nav.toggleTheme}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Direct Call Button (Desktop) */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#621013] hover:bg-[#500c0e] text-white border border-white/15 shadow-sm transition-all hover:-translate-y-0.5"
              aria-label={`Call ${siteConfig.displayPhone}`}
            >
              <span>📞</span>
              <span>{siteConfig.displayPhone}</span>
            </a>

            {/* High-Converting Public Lead CTA Button */}
            <a
              href="#eligibility"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold bg-[#F37021] hover:bg-[#D8580E] text-white shadow-md transition-all hover:scale-102 cursor-pointer border border-white/20"
              title="Check Loan Eligibility Online"
            >
              <span>⚡</span>
              <span>{lang === "te" ? "అర్హత చెక్ చేయండి" : "Check Eligibility"}</span>
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white bg-white/15 hover:bg-white/25 border border-white/20 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#6B1215] border-t border-white/15 px-4 pt-3 pb-5 space-y-2 shadow-2xl animate-fadeIn text-white">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-white/90 hover:bg-white/10 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/15 flex flex-col gap-2.5">
              <a
                href="#eligibility"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-extrabold bg-[#F37021] text-white shadow-md text-center"
              >
                <span>⚡</span>
                <span>{lang === "te" ? "ఉచిత లోన్ అర్హత చెక్ చేయండి" : "Check Free Loan Eligibility"}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white shadow-md text-center border border-white/20"
              >
                <span>📞</span>
                <span>{t.nav.callNow}: 63026 90251</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappPrefillText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-[var(--whatsapp-green)] hover:bg-[var(--whatsapp-hover)] text-white shadow-md text-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.564 5.714 5.867-1.539c1.677.915 3.597 1.437 5.633 1.437 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                </svg>
                <span>WhatsApp: 63026 90251</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
