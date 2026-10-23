"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "../../config/site";
import { useLanguage } from "../../i18n/context";

export default function PrivacyPolicyPage() {
  const { lang, toggleLang } = useLanguage();

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-10 shadow-sm">
        
        {/* Navigation & Language Switch */}
        <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)] mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-teal)] dark:text-sky-400 hover:text-[var(--accent-saffron)] transition-colors"
          >
            <span>←</span>
            <span>{lang === "te" ? "హోమ్‌కు తిరిగి వెళ్లండి" : "Back to Home"}</span>
          </Link>

          <button
            type="button"
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-full text-xs font-bold bg-[var(--bg-elevated)] border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent-saffron)] transition-all cursor-pointer"
          >
            🌐 {lang === "en" ? "తెలుగులో చదవండి" : "Read in English"}
          </button>
        </div>

        {/* Content */}
        {lang === "te" ? (
          <article className="prose prose-slate dark:prose-invert max-w-none font-telugu space-y-6 text-[var(--text-secondary)]">
            <h1 className="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              గోప్యతా విధానం (Privacy Policy)
            </h1>
            <p className="text-xs text-[var(--text-muted)]">
              చివరి నవీకరణ తేదీ: అక్టోబర్ 2026 • {siteConfig.businessNameTe}
            </p>

            <div className="p-4 rounded-xl bg-emerald-500/10 border-l-4 border-emerald-500 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200">
              🛡️ <strong>డేటా భద్రత హామీ:</strong> ఈ వెబ్‌సైట్‌లో ఎలాంటి ఆధార్ నంబర్, పాన్ కార్డ్ నంబర్, బ్యాంక్ పాస్‌వర్డ్ లేదా ఓటీపీ (OTP) వివరాలు సేకరించబడవు మరియు నిల్వ చేయబడవు.
            </div>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                1. మేము సేకరించే ప్రాథమిక సమాచారం
              </h2>
              <p className="text-sm leading-relaxed">
                మీరు మా వెబ్‌సైట్ ద్వారా సంప్రదించినప్పుడు లేదా వాట్సాప్ ద్వారా సమాచారం కోరినప్పుడు, కేవలం ప్రాథమిక వివరాలు మాత్రమే పరిగణనలోకి తీసుకుంటాము:
              </p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>మీ పేరు మరియు 10 అంకెల మొబైల్ నంబర్</li>
                <li>మీకు కావలసిన లోన్ కేటగిరీ (ఉదా. హోమ్ లోన్, LAP, పర్సనల్ లోన్)</li>
                <li>అంచనా వేయబడిన లోన్ మొత్తం మరియు నెలవారీ ఆదాయం</li>
                <li>హైదరాబాద్‌లో మీ నివాస ప్రాంతం (ఉదా. హబ్సిగూడ, ఉప్పల్)</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                2. మీ సమాచారం ఎలా ఉపయోగించబడుతుంది?
              </h2>
              <p className="text-sm leading-relaxed">
                సేకరించిన వివరాలు కేవలం మీ లోన్ అర్హతను అంచనా వేయడానికి, ICICI బ్యాంక్ లేదా సంబంధిత ఆర్థిక సంస్థల తగిన లోన్ స్కీములను మీకు వివరించడానికి మరియు బ్యాంక్ ప్రతినిధితో సమావేశం ఏర్పాటు చేయడానికి మాత్రమే ఉపయోగించబడతాయి. మీ డేటాను ఎలాంటి బయటి టెలిమార్కెటింగ్ ఏజెన్సీలకు విక్రయించడం జరగదు.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                3. డాక్యుమెంట్ల పరిశీలన విధానం
              </h2>
              <p className="text-sm leading-relaxed">
                బ్యాంక్ లోన్ ప్రాసెసింగ్ కోసం అవసరమైన అసలు లేదా అధికారిక కాపీలు కేవలం బ్యాంక్ లాగిన్ ప్రక్రియ సమయంలో మీ అనుమతితో మాత్రమే బ్యాంక్ అధికారులకు అందజేయబడతాయి.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                4. మమ్మల్ని సంప్రదించండి
              </h2>
              <p className="text-sm leading-relaxed">
                ఈ గోప్యతా విధానంపై మీకు ఏవైనా సందేహాలు ఉంటే, నేరుగా మా వాట్సాప్ లేదా ఫోన్ నంబర్ <strong>+91 6302690251</strong> ద్వారా లేదా మా హబ్సిగూడ కార్యాలయంలో సంప్రదించవచ్చు.
              </p>
            </section>
          </article>
        ) : (
          <article className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-[var(--text-secondary)]">
            <h1 className="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-[var(--text-muted)]">
              Last Updated: October 2026 • {siteConfig.businessName}
            </p>

            <div className="p-4 rounded-xl bg-emerald-500/10 border-l-4 border-emerald-500 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200">
              🛡️ <strong>Zero Sensitive Data Stored:</strong> We do NOT collect or store PAN numbers, Aadhaar numbers, net banking passwords, or OTPs on this website or server.
            </div>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                1. Information We Collect
              </h2>
              <p className="text-sm leading-relaxed">
                When you initiate an inquiry via our web forms or WhatsApp links, we only gather basic preliminary details needed to assess loan options:
              </p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Your name and contact phone number</li>
                <li>Desired loan category and indicative loan amount</li>
                <li>Monthly in-hand income or business turnover bracket</li>
                <li>Location area within Hyderabad (e.g. Habsiguda, Uppal, Tarnaka)</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                2. How Your Information Is Used
              </h2>
              <p className="text-sm leading-relaxed">
                Your information is used exclusively to evaluate lender eligibility guidelines across ICICI Bank and partnered financial institutions, communicate repayment estimates, and coordinate physical documentation pickups. We strictly do not sell, rent, or trade your contact data with telemarketers or unauthorized third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                3. Physical Verification & Bank Processing
              </h2>
              <p className="text-sm leading-relaxed">
                Official documents needed for credit evaluation (ITR, payslips, property title deeds) are collected in person or through authorized channels directly for institutional bank login with your express authorization.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                4. Contact Information
              </h2>
              <p className="text-sm leading-relaxed">
                For questions regarding your data privacy, contact our desk at <strong>+91 6302690251</strong> or write to us at Habsiguda, Hyderabad.
              </p>
            </section>
          </article>
        )}

        {/* Bottom Back Button */}
        <div className="pt-8 mt-8 border-t border-[var(--border-subtle)] flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-sm bg-[#851A1D] hover:bg-[#621013] text-white shadow-xs hover:shadow-md transition-all"
          >
            <span>←</span>
            <span>{lang === "te" ? "హోమ్‌కు తిరిగి వెళ్లండి (Back to Home)" : "Back to Home"}</span>
          </Link>
          <span className="text-xs text-[var(--text-muted)] font-semibold">{siteConfig.businessName}</span>
        </div>

      </div>
    </main>
  );
}
