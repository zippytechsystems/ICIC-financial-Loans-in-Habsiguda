"use client";

import React from "react";
import { useLanguage } from "../i18n/context";

export const Steps: React.FC = () => {
  const { t } = useLanguage();

  const stepItems = [
    {
      num: "01",
      icon: "💬",
      title: t.processSection.step1Title,
      desc: t.processSection.step1Desc,
    },
    {
      num: "02",
      icon: "📊",
      title: t.processSection.step2Title,
      desc: t.processSection.step2Desc,
    },
    {
      num: "03",
      icon: "📑",
      title: t.processSection.step3Title,
      desc: t.processSection.step3Desc,
    },
    {
      num: "04",
      icon: "🎉",
      title: t.processSection.step4Title,
      desc: t.processSection.step4Desc,
    },
  ];

  return (
    <section id="process" className="py-12 sm:py-18 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-black uppercase tracking-wider text-[#851A1D] dark:text-[#F37021] bg-red-50 dark:bg-red-950/60 px-3.5 py-1 rounded-full border border-red-200 dark:border-red-900/60 inline-block mb-3 shadow-xs">
            🚀 Transparent Bank Underwriting Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.processSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t.processSection.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepItems.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 hover:border-[#F37021] transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#851A1D] to-[#621013] text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                    {step.num}
                  </span>
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center text-[11px] font-bold text-[#F37021]">
                <span>Doorstep Execution</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
