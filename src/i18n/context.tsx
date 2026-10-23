"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language } from "../types/loan";
import { TranslationDictionary } from "./types";
import { en } from "./en";
import { te } from "./te";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  t: en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("habsiguda_lang") as Language;
      if (saved === "en" || saved === "te") {
        document.documentElement.lang = saved;
        queueMicrotask(() => {
          setLangState(saved);
        });
      } else {
        document.documentElement.lang = "en";
      }
    } catch {
      // localStorage unavailable or restricted
      document.documentElement.lang = "en";
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("habsiguda_lang", newLang);
      document.documentElement.lang = newLang;
    } catch {
      // Ignored safely
    }
  };

  const toggleLang = () => {
    const nextLang = lang === "en" ? "te" : "en";
    setLang(nextLang);
  };

  const t = lang === "te" ? te : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
