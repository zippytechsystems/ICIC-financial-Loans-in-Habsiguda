"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "../config/site";

export default function NotFound() {
  useEffect(() => {
    // Graceful automatic redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#061118] text-[#0F172A] dark:text-[#F8FAFC] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-[#0A1B26] p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 text-center space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#851A1D] to-[#F37021] text-white flex items-center justify-center font-black text-2xl mx-auto shadow-md">
          HLD
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F37021]">
            Habsiguda Loan Desk
          </span>
          <h1 className="text-2xl font-black text-[#0F172A] dark:text-white">
            Page Redirect
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Redirecting you to the authorized Habsiguda Loan Desk homepage in 3 seconds...
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F37021] to-[#D8580E] text-white font-extrabold text-sm block shadow-md hover:scale-102 transition-all"
          >
            Go to Homepage Now →
          </Link>
        </div>

        <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
          Need immediate loan assistance? Call: <strong>{siteConfig.displayPhone}</strong>
        </div>
      </div>
    </div>
  );
}
