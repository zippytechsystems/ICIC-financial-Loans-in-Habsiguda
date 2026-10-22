"use client";

import React from "react";
import { useLanguage } from "../i18n/context";

export const TrustStrip: React.FC = () => {
  const { t } = useLanguage();

  const trustCards = [
    {
      icon: "🏛️",
      title: t.trustStrip.item1Title,
      desc: t.trustStrip.item1Desc,
    },
    {
      icon: "⚡",
      title: t.trustStrip.item2Title,
      desc: t.trustStrip.item2Desc,
    },
    {
      icon: "🤝",
      title: t.trustStrip.item3Title,
      desc: t.trustStrip.item3Desc,
    },
  ];

  return (
    <section className="py-8 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustCards.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-elevated)]/60 border border-[var(--border-subtle)] hover:border-[var(--brand-teal-light)]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--brand-teal-deep)] text-white flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-base text-[var(--text-primary)] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
