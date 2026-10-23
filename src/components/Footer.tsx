"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "../config/site";
import { useLanguage } from "../i18n/context";

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A192F] text-slate-300 border-t-2 border-[#F37021] pt-12 pb-24 sm:pb-12 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-8 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F37021] via-[#E05A10] to-[#851A1D] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                i
              </div>
              <span className="font-extrabold text-lg text-white font-serif tracking-wide uppercase">
                {lang === "te" ? siteConfig.businessNameTe : siteConfig.businessName}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-lg">
              {t.footer.brandTagline}
            </p>
            <div className="text-xs text-slate-400 flex items-center gap-2 pt-1">
              <span>📍 {lang === "te" ? siteConfig.addressTe : siteConfig.address}</span>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span>📞 Direct Line: <strong className="text-white">{siteConfig.phone}</strong> (WhatsApp & Direct Call)</span>
            </div>
            <div className="text-xs text-amber-300/90 font-medium">
              🏛️ ICICI Bank Hub Code: <strong>0492</strong> • Partner Code: <strong className="font-mono text-white">CP-HBG-04921</strong>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-extrabold text-xs text-white uppercase tracking-wider mb-3 text-amber-400">
              {lang === "te" ? "ముఖ్య లింకులు" : "Quick Navigation"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#loans" className="hover:text-amber-300 transition-colors">
                  {t.nav.loans}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-300 transition-colors">
                  {t.nav.calculator}
                </a>
              </li>
              <li>
                <a href="#eligibility" className="hover:text-amber-300 transition-colors">
                  {t.nav.eligibility}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-300 transition-colors">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-extrabold text-xs text-white uppercase tracking-wider mb-3 text-amber-400">
              {lang === "te" ? "చట్టపరమైన సమాచారం" : "Regulatory & Policies"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-300 transition-colors">
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-amber-300 transition-colors">
                  {t.footer.disclaimer}
                </Link>
              </li>
            </ul>
            <div className="pt-3 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
              <span>🛡️</span>
              <span>100% Free Consultation • Zero Fee</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Strict Adherence to RBI Fair Lending Code
            </div>
          </div>

        </div>

        {/* Mandatory Regulatory Compliance Box */}
        <div className="bg-[#0D223E] border border-white/10 rounded-2xl p-5 sm:p-6 mb-8 text-xs leading-relaxed text-slate-300 shadow-inner">
          <div className="flex items-start gap-2.5 mb-2">
            <span className="text-base flex-shrink-0">⚖️</span>
            <strong className="text-white font-bold text-xs uppercase tracking-wide">
              {lang === "te" ? "చట్టబద్ధమైన రెగ్యులేటరీ డిస్క్లైమర్ (Statutory Compliance Disclaimer)" : "Statutory Regulatory Compliance & Channel Disclosure"}
            </strong>
          </div>
          <p className="mb-2 text-justify text-slate-300">
            {lang === "te" ? siteConfig.complianceDisclaimerTe : siteConfig.complianceDisclaimerEn}
          </p>
          <p className="text-justify text-[11px] text-slate-400 border-t border-white/10 pt-2 mt-2">
            {t.footer.authorizedNotice}
          </p>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            &copy; {currentYear} {siteConfig.businessName}. {t.footer.allRightsReserved}
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              {t.footer.disclaimer}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
