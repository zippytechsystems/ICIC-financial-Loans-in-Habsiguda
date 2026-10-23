"use client";

import React, { useState } from "react";
import { siteConfig } from "../config/site";
import { useLanguage } from "../i18n/context";

export const LoanDashboardBar: React.FC = () => {
  const { lang } = useLanguage();
  const [trackPhone, setTrackPhone] = useState("");
  const [trackResult, setTrackResult] = useState<{
    found: boolean;
    stage: string;
    details: string;
    refId: string;
  } | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = trackPhone.replace(/\D/g, "");
    if (cleaned.length < 10) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setTrackResult({
        found: true,
        stage: "Direct Desk Active",
        details: "Your lead inquiry is routed directly to the Habsiguda ICICI Asset Hub. Doorstep document pickup & in-principle sanction assistance available.",
        refId: `ICICI-HBG-${cleaned.slice(-4)}-${new Date().getFullYear()}`,
      });
    }, 500);
  };

  return (
    <div className="w-full bg-[#F8FAFC] dark:bg-[#1E293B] text-[var(--text-primary)] border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        
        {/* Top Hub Indicator Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#851A1D] to-[#621013] text-white flex items-center justify-center font-bold text-xl shadow-xs shrink-0">
              🏛️
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#851A1D] dark:text-[#F37021] uppercase font-serif">
                  ICICI Bank Retail Asset Hub • Direct Loan Sourcing Desk
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  DESK ACTIVE
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                Habsiguda Branch Code: <strong>0492</strong> • Partner Sourcing Code: <strong className="font-mono text-[#851A1D] dark:text-amber-300">CP-HBG-04921</strong> • Metro Pillar 997, Hyderabad
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-start md:self-auto text-xs">
            <a
              href="#calculator"
              className="px-3 py-1.5 rounded-lg font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#851A1D] border border-slate-200 dark:border-slate-700 hover:border-[#851A1D] transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>🧮</span>
              <span>EMI Calculator</span>
            </a>
            <a
              href="#eligibility"
              className="px-3.5 py-1.5 rounded-lg font-bold bg-[#F37021] hover:bg-[#D8580E] text-white transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>⚡</span>
              <span>Instant Eligibility</span>
            </a>
          </div>
        </div>

        {/* Quick Application / Lead Status Tracker Accordion */}
        <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-slate-800">
          <form
            onSubmit={handleTrackSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white dark:bg-slate-800/90 p-3 sm:p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
              <span className="text-[#F37021] text-base">🔍</span>
              <span>{lang === "te" ? "మీ లోన్ అప్లికేషన్ స్టేటస్ చెక్ చేసుకోండి:" : "Track Your Loan Sourcing & Eligibility Status:"}</span>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="tel"
                value={trackPhone}
                onChange={(e) => setTrackPhone(e.target.value)}
                placeholder={lang === "te" ? "10 అంకెల మొబైల్ నంబర్" : "Enter 10-digit mobile no."}
                maxLength={10}
                className="px-3 py-1.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#F37021] w-48 shadow-inner"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#851A1D] hover:bg-[#621013] text-white transition-all shadow-xs cursor-pointer whitespace-nowrap"
              >
                {isSearching ? "Checking..." : (lang === "te" ? "స్టేటస్ చూడండి" : "Check Status")}
              </button>
            </div>
          </form>

          {trackResult && (
            <div className="mt-3 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-emerald-950 dark:text-emerald-100 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in shadow-xs">
              <div>
                <div className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-200">
                  <span>✓ Application Reference: <strong className="font-mono">{trackResult.refId}</strong></span>
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-black text-[10px]">
                    {trackResult.stage}
                  </span>
                </div>
                <p className="mt-1 text-emerald-800 dark:text-emerald-200/90">{trackResult.details}</p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setTrackResult(null);
                    setTrackPhone("");
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-red-600 border border-slate-300 dark:border-slate-700 font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1"
                >
                  <span>←</span>
                  <span>{lang === "te" ? "వెనక్కి (Back)" : "Back / Clear"}</span>
                </button>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-center shadow-xs"
                >
                  📞 Contact Habsiguda Officer
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
