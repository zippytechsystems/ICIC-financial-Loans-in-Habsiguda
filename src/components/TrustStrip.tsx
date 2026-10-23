"use client";

import React from "react";
import { useLanguage } from "../i18n/context";

export const TrustStrip: React.FC = () => {
  const { lang } = useLanguage();

  const trustCards = [
    {
      icon: "🏛️",
      title: lang === "te" ? "అధికారిక బ్యాంక్ పార్టనర్" : "Authorized ICICI Hub",
      sub: "Hub Code: 0492",
      desc: lang === "te"
        ? "హబ్సిగూడ ఐసిఐసిఐ బ్యాంక్ రిటైల్ అసెట్ హబ్ మరియు ఇతర ప్రముఖ షెడ్యూల్డ్ బ్యాంకులతో ప్రత్యక్ష టై-అప్."
        : "Direct tie-up with ICICI Bank Habsiguda Retail Asset Hub & leading scheduled banks.",
    },
    {
      icon: "💰",
      title: lang === "te" ? "0% ఫీజు గ్యారెంటీ" : "Zero Sourcing Fee",
      sub: "100% Free Guidance",
      desc: lang === "te"
        ? "కస్టమర్ నుండి ఎలాంటి అడ్వాన్స్ ఛార్జీలు లేదా బ్రోకరేజ్ ఫీజు వసూలు చేయబడదు. పూర్తిగా ఉచిత సేవ."
        : "No advance fees, commission, or brokerage from applicants. 100% transparent guidance.",
    },
    {
      icon: "⚡",
      title: lang === "te" ? "డోర్‌స్టెప్ వెరిఫికేషన్" : "Doorstep Sourcing",
      sub: "Habsiguda & East Hyd",
      desc: lang === "te"
        ? "మీ ఇల్లు లేదా ఆఫీస్ వద్దకే వచ్చి డాక్యుమెంట్ల సేకరణ మరియు ఇన్-ప్రిన్సిపల్ సాంక్షన్ సాయం."
        : "Representative visits your home/office in Habsiguda, Uppal & Tarnaka for verification.",
    },
    {
      icon: "🛡️",
      title: lang === "te" ? "RBI ఫెయిర్ ప్రాక్టీసెస్" : "RBI Fair Lending",
      sub: "Bank Grade Privacy",
      desc: lang === "te"
        ? "మీ వివరాలు పూర్తిగా సురక్షితం. బ్యాంక్ అండర్‌రైటింగ్ నిబంధనలకు అనుగుణంగా ప్రాసెసింగ్."
        : "Bank-grade data encryption; application submitted directly to official bank systems.",
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {trustCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 rounded-xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-[#F37021] transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800 text-[#851A1D] dark:text-[#F37021] flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-bold text-[#F37021] block">
                    {item.sub}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
