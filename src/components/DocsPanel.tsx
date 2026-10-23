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
    <div className="bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-7 shadow-xs">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">📁</span>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          {t.docsPanel.title}
        </h3>
      </div>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 font-normal">
        {t.docsPanel.subtitle}
      </p>

      <div className="space-y-3.5">
        {docList.map((doc, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-[#F37021] transition-all shadow-xs group"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">{doc.icon}</span>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-0.5">
                  {doc.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {doc.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-[11px] text-amber-950 dark:text-amber-200 leading-relaxed">
        ⚠️ <strong>Note:</strong> {t.docsPanel.disclaimer}
      </div>
    </div>
  );
};
