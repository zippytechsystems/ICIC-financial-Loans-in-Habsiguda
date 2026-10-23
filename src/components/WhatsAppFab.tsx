"use client";

import React from "react";
import { siteConfig } from "../config/site";
import { useLanguage } from "../i18n/context";

export const WhatsAppFab: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <aside
        aria-label="Instant WhatsApp Assistance"
        className="hidden sm:block fixed bottom-6 right-6 z-50 group"
      >
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappPrefillText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3.5 rounded-full bg-[var(--whatsapp-green)] hover:bg-[var(--whatsapp-hover)] text-white shadow-xl hover:shadow-2xl transition-colors cursor-pointer border border-white/20"
          aria-label="Chat on WhatsApp Business (+91 6302690251)"
        >
          <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.564 5.714 5.867-1.539c1.677.915 3.597 1.437 5.633 1.437 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
          </svg>
          <span className="font-bold text-sm tracking-wide">
            {lang === "te" ? "వాట్సాప్ సహాయం" : "WhatsApp Chat"}
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Floating Action Bar (Fixed at bottom for 360px+ screens) */}
      <aside
        aria-label="Quick Mobile Actions"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg-surface)]/95 backdrop-blur-md border-t border-[var(--border-subtle)] px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2"
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-[var(--accent-saffron)] uppercase tracking-wider">
            {siteConfig.businessName}
          </span>
          <span className="text-xs font-extrabold text-[var(--text-primary)]">
            📞 {siteConfig.displayPhone}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Direct Call Button */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="w-11 h-11 rounded-full bg-[var(--brand-teal-deep)] text-white flex items-center justify-center text-lg shadow-md active:scale-95 transition-transform"
            aria-label={`Call ${siteConfig.displayPhone}`}
          >
            📞
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappPrefillText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 h-11 rounded-full bg-[var(--whatsapp-green)] text-white font-bold text-xs shadow-md active:scale-95 transition-transform"
            aria-label="Open WhatsApp Business chat"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.564 5.714 5.867-1.539c1.677.915 3.597 1.437 5.633 1.437 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
};
