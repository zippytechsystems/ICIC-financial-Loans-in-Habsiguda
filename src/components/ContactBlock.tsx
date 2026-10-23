"use client";

import React from "react";
import { siteConfig } from "../config/site";
import { useLanguage } from "../i18n/context";

export const ContactBlock: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="contact" className="py-12 sm:py-18 bg-white dark:bg-slate-900 scroll-mt-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#851A1D] dark:text-[#F37021] bg-red-50 dark:bg-red-950/60 px-3.5 py-1 rounded-full border border-red-200 dark:border-red-900/60 inline-block mb-3 shadow-xs">
            📍 Local Habsiguda Guidance & Asset Hub
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.contactSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t.contactSection.subtitle}
          </p>
        </div>

        {/* 2-Column Layout: Details on Left, Map/Office on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Contact Details & Service Areas */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Phone & WhatsApp Card */}
            <div className="bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 flex items-center justify-center text-xl shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {t.contactSection.phoneTitle}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    WhatsApp Business & Direct Line
                  </span>
                </div>
              </div>

              <div className="text-2xl sm:text-3xl font-extrabold text-[#851A1D] dark:text-[#F37021] tracking-tight mb-4 font-mono">
                {siteConfig.phone}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-[#851A1D] hover:bg-[#621013] text-white shadow-xs transition-all cursor-pointer"
                  aria-label={`Call ${siteConfig.displayPhone}`}
                >
                  <span>📞</span>
                  <span>{t.contactSection.callNowBtn}</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappPrefillText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-[var(--whatsapp-green)] hover:bg-[var(--whatsapp-hover)] text-white shadow-xs transition-all cursor-pointer"
                  aria-label="Chat on WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.564 5.714 5.867-1.539c1.677.915 3.597 1.437 5.633 1.437 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                  </svg>
                  <span>{t.contactSection.chatWaBtn}</span>
                </a>
              </div>
            </div>

            {/* Address & Working Hours Card */}
            <div className="bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-xs">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">🏢</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {t.contactSection.addressTitle}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5 font-normal">
                      {lang === "te" ? siteConfig.addressTe : siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-xl flex-shrink-0 mt-0.5">⏰</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {t.contactSection.hoursTitle}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5 font-normal">
                      {lang === "te" ? siteConfig.hoursTe : siteConfig.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-xs">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span>📍</span>
                <span>{t.contactSection.serviceAreasTitle}</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {(lang === "te" ? siteConfig.serviceAreasTe : siteConfig.serviceAreas).map(
                  (area, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-xs"
                    >
                      {area}
                    </span>
                  )
                )}
              </div>
            </div>

          </div>

          {/* Map Embed or Office Profile Column */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
            
            {/* Owner Profile Card */}
            <div className="bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#851A1D] to-[#621013] text-white flex items-center justify-center text-2xl font-black shadow-md border border-white/20 shrink-0">
                  HLD
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F37021] uppercase tracking-wider block">
                    {lang === "te" ? siteConfig.ownerTitleTe : siteConfig.ownerTitle}
                  </span>
                  <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {lang === "te" ? siteConfig.businessNameTe : siteConfig.businessName}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Habsiguda, Uppal & East Hyderabad Loan Advisory Desk
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Direct ICICI Bank Loan Facilitation</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">✓ Verified Connector</span>
              </div>
            </div>

            {/* Google Maps Embed Slot */}
            {siteConfig.googleMapsEmbedUrl ? (
              <div className="bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-2xl p-2 shadow-xs overflow-hidden flex-1 min-h-[300px]">
                <iframe
                  title="Habsiguda Loan Desk Location Map"
                  src={siteConfig.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  className="rounded-xl border-0 min-h-[280px]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            ) : null}

          </div>

        </div>
      </div>
    </section>
  );
};
