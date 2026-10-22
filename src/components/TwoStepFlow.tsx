"use client";

import React from "react";
import { useLanguage } from "../i18n/context";

export const TwoStepFlow: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-r from-[var(--brand-teal-deep)] via-[var(--brand-teal)] to-[var(--brand-teal-deep)] text-white relative overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-saffron-light)] bg-white/10 px-3 py-1 rounded-full border border-white/15 inline-block mb-2">
            {t.twoStepFlow.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t.twoStepFlow.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-7 relative hover:bg-white/15 transition-all shadow-lg group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-wider bg-[var(--accent-saffron)] text-white px-3 py-1 rounded-md shadow-sm">
                {t.twoStepFlow.step1Tag}
              </span>
              <span className="text-3xl group-hover:scale-110 transition-transform">🔍</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              {t.twoStepFlow.step1Title}
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed mb-4">
              {t.twoStepFlow.step1Desc}
            </p>
            <a
              href="#eligibility"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-300 hover:text-white transition-colors"
            >
              <span>Go to Eligibility Form</span>
              <span>↓</span>
            </a>
          </div>

          {/* Step 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-7 relative hover:bg-white/15 transition-all shadow-lg group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-wider bg-emerald-500 text-white px-3 py-1 rounded-md shadow-sm">
                {t.twoStepFlow.step2Tag}
              </span>
              <span className="text-3xl group-hover:scale-110 transition-transform">🏛️</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              {t.twoStepFlow.step2Title}
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed mb-4">
              {t.twoStepFlow.step2Desc}
            </p>
            <a
              href="#loans"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-300 hover:text-white transition-colors"
            >
              <span>Explore 13 Loan Options</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
