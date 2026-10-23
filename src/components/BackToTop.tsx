"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../i18n/context";

export const BackToTop: React.FC = () => {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 hover:bg-[#851A1D] text-white text-xs font-extrabold shadow-xl hover:shadow-2xl backdrop-blur-md border border-white/20 transition-colors cursor-pointer animate-fade-in"
    >
      <span className="text-sm font-black">↑</span>
      <span>{lang === "te" ? "పైకి వెళ్లండి (Back)" : "Back to Top"}</span>
    </button>
  );
};
