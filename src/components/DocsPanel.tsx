"use client";

import React from "react";
import { useLanguage } from "../i18n/context";

export const DocsPanel: React.FC = () => {
  const { t } = useLanguage();

  const docList = [
    { title: t.docsPanel.doc1Title, desc: t.docsPanel.doc1Desc, icon: "🪪" },
    { title: t.docsPanel.doc2Title, desc: t.docsPanel.doc2Desc, icon: "📄" },
    { title: t.docsPanel.doc3Title, desc: t.docsPanel.doc3Desc, icon: "🏦" },
    { title: t.docsPanel.doc4Title, desc: t.docsPanel.doc4Desc, icon: "📜" },
    { title: t.docsPanel.doc5Title, desc: t.docsPanel.doc5Desc, icon: "🏭" },
  ];

  return (
    <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-7 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">📁</span>
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
          {t.docsPanel.title}
        </h3>
      </div>
      <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6">
        {t.docsPanel.subtitle}
      </p>

      <div className="space-y-4">
        {docList.map((doc, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-[var(--bg-elevated)]/60 border border-[var(--border-subtle)] hover:border-[var(--brand-teal-light)]/30 transition-colors"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0 mt-0.5">{doc.icon}</span>
              <div>
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">
                  {doc.title}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-900 dark:text-amber-300 leading-relaxed">
        ⚠️ <strong>Note:</strong> {t.docsPanel.disclaimer}
      </div>
    </div>
  );
};
