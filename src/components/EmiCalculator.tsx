"use client";

import React, { useState, useId } from "react";
import { siteConfig } from "../config/site";
import { useLanguage } from "../i18n/context";

export const EmiCalculator: React.FC = () => {
  const { lang, t } = useLanguage();
  const amtInputId = useId();
  const roiInputId = useId();
  const tenureInputId = useId();

  // State
  const [loanAmount, setLoanAmount] = useState<number>(3500000); // 35 Lakhs default
  const [annualRate, setAnnualRate] = useState<number>(8.75); // 8.75% sample rate
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years

  // Indian Rupee Currency Formatter
  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(Math.round(val));
  };

  // EMI Math: EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
  // r = annual rate / 12 / 100, n = tenureYears * 12
  const calculateEMI = () => {
    const p = loanAmount;
    const r = annualRate / (12 * 100);
    const n = tenureYears * 12;

    if (r === 0) {
      const emi = p / n;
      return {
        monthlyEmi: Math.round(emi),
        totalInterest: 0,
        totalPayable: Math.round(p),
      };
    }

    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emi * n;
    const totalInterest = totalPayable - p;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayable: Math.round(totalPayable),
    };
  };

  const { monthlyEmi, totalInterest, totalPayable } = calculateEMI();
  const principalPercentage = Math.round((loanAmount / totalPayable) * 100);
  const interestPercentage = 100 - principalPercentage;

  const handleShareToWhatsApp = () => {
    const text =
      `Hello ${siteConfig.businessName},\n\n` +
      `I checked my tentative EMI calculation:\n` +
      `• Loan Amount: ${formatINR(loanAmount)}\n` +
      `• Indicative Interest Rate: ${annualRate}%\n` +
      `• Tenure: ${tenureYears} Years\n` +
      `• Calculated Monthly EMI: ${formatINR(monthlyEmi)}/month\n` +
      `• Total Interest: ${formatINR(totalInterest)}\n` +
      `• Preferred Area: Habsiguda / Hyderabad\n\n` +
      `Please check my bank eligibility and best available options.`;

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="calculator"
      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-7 shadow-md relative overflow-hidden transition-all"
    >
      {/* Badge / Header */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#F37021] bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 px-2.5 py-1 rounded-md inline-block">
            {t.emiCalc.indicativeTag}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            {t.emiCalc.title}
          </h2>
        </div>
        <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
          {lang === "te" ? "సూత్రప్రాయ ఈఎంఐ" : "Standard Reducing Balance"}
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5">
        {t.emiCalc.subtitle}
      </p>

      {/* Control 1: Loan Amount */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-1.5 text-sm">
          <label htmlFor={amtInputId} className="font-bold text-slate-700 dark:text-slate-300">
            {t.emiCalc.loanAmountLabel}
          </label>
          <span className="font-extrabold text-base text-[#851A1D] dark:text-[#F37021] bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/60 px-2.5 py-0.5 rounded-md font-mono">
            {formatINR(loanAmount)}
          </span>
        </div>
        <input
          id={amtInputId}
          type="range"
          min={100000}
          max={15000000}
          step={50000}
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#851A1D]"
          aria-label={t.emiCalc.loanAmountLabel}
        />
        <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1">
          <span>₹1 Lakh</span>
          <span>₹75 Lakhs</span>
          <span>₹1.5 Crore</span>
        </div>
        
        {/* Quick Amount Chips */}
        <div className="flex items-center gap-1.5 mt-2 flex-wrap">
          {[2500000, 3500000, 5000000, 7500000, 10000000].map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setLoanAmount(preset)}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer border ${
                loanAmount === preset
                  ? "bg-[#851A1D] text-white border-[#851A1D]"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-600 hover:border-[#851A1D]"
              }`}
            >
              ₹{preset >= 10000000 ? `${preset / 10000000} Cr` : `${preset / 100000}L`}
            </button>
          ))}
        </div>
      </div>

      {/* Control 2: Interest Rate */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-1.5 text-sm">
          <label htmlFor={roiInputId} className="font-bold text-slate-700 dark:text-slate-300">
            {t.emiCalc.rateLabel}
          </label>
          <span className="font-extrabold text-base text-[#F37021] bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-900/60 px-2.5 py-0.5 rounded-md font-mono">
            {annualRate.toFixed(2)}% p.a.
          </span>
        </div>
        <input
          id={roiInputId}
          type="range"
          min={7.5}
          max={16.0}
          step={0.1}
          value={annualRate}
          onChange={(e) => setAnnualRate(Number(e.target.value))}
          className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#F37021]"
          aria-label={t.emiCalc.rateLabel}
        />
        <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1">
          <span>7.5%</span>
          <span>8.35% (Home Benchmark)</span>
          <span>16.0%</span>
        </div>

        {/* Quick ROI Chips */}
        <div className="flex items-center gap-1.5 mt-2 flex-wrap">
          {[
            { label: "8.35% (Home)", val: 8.35 },
            { label: "9.25% (LAP)", val: 9.25 },
            { label: "10.65% (Personal)", val: 10.65 },
            { label: "11.25% (Business)", val: 11.25 },
          ].map((preset) => (
            <button
              key={preset.val}
              type="button"
              onClick={() => setAnnualRate(preset.val)}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer border ${
                annualRate === preset.val
                  ? "bg-[#F37021] text-white border-[#F37021]"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-600 hover:border-[#F37021]"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Control 3: Loan Tenure */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1.5 text-sm">
          <label htmlFor={tenureInputId} className="font-bold text-slate-700 dark:text-slate-300">
            {t.emiCalc.tenureLabel}
          </label>
          <span className="font-extrabold text-base text-[#851A1D] dark:text-[#F37021] bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/60 px-2.5 py-0.5 rounded-md font-mono">
            {tenureYears} {t.emiCalc.yearsText}
          </span>
        </div>
        <input
          id={tenureInputId}
          type="range"
          min={1}
          max={30}
          step={1}
          value={tenureYears}
          onChange={(e) => setTenureYears(Number(e.target.value))}
          className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#851A1D]"
          aria-label={t.emiCalc.tenureLabel}
        />
        <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1">
          <span>1 Year</span>
          <span>15 Years</span>
          <span>30 Years</span>
        </div>

        {/* Quick Tenure Chips */}
        <div className="flex items-center gap-1.5 mt-2 flex-wrap">
          {[5, 10, 15, 20, 25, 30].map((yr) => (
            <button
              key={yr}
              type="button"
              onClick={() => setTenureYears(yr)}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer border ${
                tenureYears === yr
                  ? "bg-[#851A1D] text-white border-[#851A1D]"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-600 hover:border-[#851A1D]"
              }`}
            >
              {yr} Yrs
            </button>
          ))}
        </div>
      </div>

      {/* Calculated Output Display Box */}
      <div className="bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-surface)] border border-[var(--border-strong)] rounded-xl p-4 sm:p-5 mb-5 shadow-sm">
        <div className="text-center sm:text-left mb-3">
          <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-bold">
            {t.emiCalc.monthlyEmiLabel}
          </span>
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">
            {formatINR(monthlyEmi)}
            <span className="text-xs font-semibold text-[var(--text-muted)] ml-1">/ month</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[var(--border-subtle)]">
          <div>
            <span className="text-[11px] text-[var(--text-muted)] block">
              {t.emiCalc.totalInterestLabel}
            </span>
            <span className="font-bold text-sm text-[var(--text-primary)]">
              {formatINR(totalInterest)}
            </span>
          </div>
          <div>
            <span className="text-[11px] text-[var(--text-muted)] block">
              {t.emiCalc.totalAmountLabel}
            </span>
            <span className="font-bold text-sm text-[var(--text-primary)]">
              {formatINR(totalPayable)}
            </span>
          </div>
        </div>

        {/* Visual Ratio Bar */}
        <div className="mt-3.5">
          <div className="h-2 w-full bg-orange-200 dark:bg-orange-950/60 rounded-full overflow-hidden flex">
            <div
              className="h-full bg-[var(--brand-teal)]"
              style={{ width: `${principalPercentage}%` }}
              title={`Principal: ${principalPercentage}%`}
            ></div>
            <div
              className="h-full bg-[var(--accent-saffron)]"
              style={{ width: `${interestPercentage}%` }}
              title={`Interest: ${interestPercentage}%`}
            ></div>
          </div>
          <div className="flex justify-between text-[10px] text-[var(--text-muted)] mt-1">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-teal)] inline-block"></span>
              Principal ({principalPercentage}%)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-saffron)] inline-block"></span>
              Interest ({interestPercentage}%)
            </span>
          </div>
        </div>
      </div>

      {/* Statutory Sample Rate Note */}
      <div className="text-[11px] text-[var(--text-muted)] bg-[var(--bg-elevated)] p-2.5 rounded-lg border border-[var(--border-subtle)] leading-relaxed mb-4">
        ⚖️ {t.emiCalc.sampleRateNote}
      </div>

      {/* Share Calculation to WhatsApp Button */}
      <button
        type="button"
        onClick={handleShareToWhatsApp}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm sm:text-base bg-[var(--whatsapp-green)] hover:bg-[var(--whatsapp-hover)] text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
        aria-label="Send EMI Calculation breakdown to WhatsApp"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.564 5.714 5.867-1.539c1.677.915 3.597 1.437 5.633 1.437 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
        </svg>
        <span>{t.emiCalc.shareBtn}</span>
      </button>
    </div>
  );
};
