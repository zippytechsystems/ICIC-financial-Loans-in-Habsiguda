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
    <section id="process" className="py-12 sm:py-18 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-teal)] dark:text-[var(--brand-teal-light)] bg-[var(--brand-teal-subtle)] px-3 py-1 rounded-full border border-[var(--brand-teal-light)]/20 inline-block mb-2">
            🚀 Smooth & Effortless
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {t.processSection.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2">
            {t.processSection.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepItems.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-[var(--bg-elevated)]/60 border border-[var(--border-subtle)] hover:border-[var(--brand-teal-light)]/40 transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-[var(--brand-teal-deep)] text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                    {step.num}
                  </span>
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-[var(--text-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center text-[11px] font-bold text-[var(--accent-saffron)]">
                <span>Fast Track Processing</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
