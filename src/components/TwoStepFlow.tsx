"use client";

import React from "react";
import { useLanguage } from "../i18n/context";

export const TwoStepFlow: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#851A1D] dark:text-[#F37021] bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800/60 px-3.5 py-1 rounded-full inline-block mb-3 shadow-xs">
            {t.twoStepFlow.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.twoStepFlow.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {lang === "te"
              ? "కేవలం 2 దశల్లో మీ లోన్ ప్రాసెస్ ప్రారంభించి, ఉత్తమ వడ్డీ రేట్లను పొందండి."
              : "Get matched with the lowest interest rate and optimal bank sanction in 2 clear steps."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-7 relative hover:border-[#F37021] transition-all shadow-xs hover:shadow-md flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider bg-[#F37021] text-white px-3 py-1 rounded-md shadow-xs">
                  {t.twoStepFlow.step1Tag}
                </span>
                <span className="text-3xl group-hover:scale-110 transition-transform">🔍</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {t.twoStepFlow.step1Title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                {t.twoStepFlow.step1Desc}
              </p>
            </div>
            <a
              href="#eligibility"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#F37021] hover:bg-[#D8580E] text-white transition-all shadow-xs"
            >
              <span>{lang === "te" ? "ఎలిజిబిలిటీ ఫారం తెరవండి" : "Check Eligibility Online"}</span>
              <span>↓</span>
            </a>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-7 relative hover:border-[#851A1D] transition-all shadow-xs hover:shadow-md flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider bg-[#851A1D] text-white px-3 py-1 rounded-md shadow-xs">
                  {t.twoStepFlow.step2Tag}
                </span>
                <span className="text-3xl group-hover:scale-110 transition-transform">🏛️</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {t.twoStepFlow.step2Title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                {t.twoStepFlow.step2Desc}
              </p>
            </div>
            <a
              href="#loans"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#851A1D] hover:bg-[#621013] text-white transition-all shadow-xs"
            >
              <span>{lang === "te" ? "13 రకాల లోన్లు చూడండి" : "Explore 13 Loan Options"}</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
