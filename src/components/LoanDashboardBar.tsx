"use client";

import React, { useState } from "react";
import { siteConfig } from "../config/site";
import { useLanguage } from "../i18n/context";

export const LoanDashboardBar: React.FC = () => {
  const { lang, t } = useLanguage();
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

  const quickLoans = [
    {
      id: "home",
      icon: "🏠",
      title: "Home Loans",
      titleTe: "హోమ్ లోన్స్",
      roi: "8.35%*",
      badge: "Repo Linked",
      link: "#loans",
    },
    {
      id: "lap",
      icon: "🏢",
      title: "Property Loan (LAP)",
      titleTe: "ప్రాపర్టీ లోన్ (LAP)",
      roi: "9.25%*",
      badge: "Up to 65% LTV",
      link: "#loans",
    },
    {
      id: "msme",
      icon: "💼",
      title: "Business & MSME",
      titleTe: "బిజినెస్ & MSME",
      roi: "11.25%*",
      badge: "Collateral Free",
      link: "#loans",
    },
    {
      id: "personal",
      icon: "⚡",
      title: "Instant Personal",
      titleTe: "పర్సనల్ లోన్",
      roi: "10.65%*",
      badge: "Fast Disbursal",
      link: "#loans",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#621013] via-[#851A1D] to-[#621013] text-white border-y border-[#F37021]/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        
        {/* Top Hub Indicator Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#F37021] text-white flex items-center justify-center font-bold text-lg shadow-sm">
              🏛️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm sm:text-base tracking-wide text-white uppercase font-serif">
                  ICICI Bank Retail Asset Hub • Customer Loan Desk
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-500 text-white shadow-xs">
                  ONLINE
                </span>
              </div>
              <p className="text-xs text-amber-200/90 font-medium">
                Habsiguda Branch Code: <strong>0492</strong> • Partner Code: <strong className="font-mono text-white">CP-HBG-04921</strong> • Hyderabad – 500007
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto text-xs">
            <a
              href="#calculator"
              className="px-3.5 py-1.5 rounded-lg font-bold bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center gap-1.5"
            >
              <span>🧮</span>
              <span>EMI Calculator</span>
            </a>
            <a
              href="#eligibility"
              className="px-3.5 py-1.5 rounded-lg font-bold bg-[#F37021] hover:bg-[#D8580E] text-white transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>⚡</span>
              <span>Instant Eligibility</span>
            </a>
          </div>
        </div>

        {/* Loan Product Ticker Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4">
          {quickLoans.map((loan) => (
            <a
              key={loan.id}
              href={loan.link}
              className="group bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#F37021] rounded-xl p-3 sm:p-3.5 transition-all flex items-center justify-between shadow-xs hover:shadow-md"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl group-hover:scale-110 transition-transform">{loan.icon}</span>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-200">
                    {lang === "te" ? loan.titleTe : loan.title}
                  </div>
                  <div className="text-[10px] text-amber-300 font-semibold">
                    ROI from {loan.roi}
                  </div>
                </div>
              </div>
              <span className="hidden sm:inline-block text-[9px] font-bold px-2 py-0.5 rounded bg-[#F37021]/80 text-white">
                {loan.badge}
              </span>
            </a>
          ))}
        </div>

        {/* Quick Application / Lead Status Tracker Accordion */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <form
            onSubmit={handleTrackSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-black/20 p-3 rounded-xl border border-white/10"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
              <span className="text-amber-400 text-base">🔍</span>
              <span>{lang === "te" ? "మీ లోన్ అప్లికేషన్ స్టేటస్ చెక్ చేసుకోండి:" : "Track Your Loan Application / Inquiry Status:"}</span>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="tel"
                value={trackPhone}
                onChange={(e) => setTrackPhone(e.target.value)}
                placeholder={lang === "te" ? "10 అంకెల మొబైల్ నంబర్" : "Enter 10-digit mobile no."}
                maxLength={10}
                className="px-3 py-1.5 rounded-lg text-xs bg-white text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#F37021] w-48"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#F37021] hover:bg-[#D8580E] text-white transition-all shadow-xs cursor-pointer whitespace-nowrap"
              >
                {isSearching ? "Checking..." : (lang === "te" ? "స్టేటస్ చూడండి" : "Check Status")}
              </button>
            </div>
          </form>

          {trackResult && (
            <div className="mt-3 p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-100 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
              <div>
                <div className="flex items-center gap-2 font-bold text-emerald-300">
                  <span>✓ Application Reference: {trackResult.refId}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-black text-[10px]">
                    {trackResult.stage}
                  </span>
                </div>
                <p className="mt-1 text-emerald-200/90">{trackResult.details}</p>
              </div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center self-start sm:self-auto shrink-0 shadow-xs"
              >
                📞 Contact Habsiguda Officer
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
