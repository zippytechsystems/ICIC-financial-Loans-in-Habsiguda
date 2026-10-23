"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "../../config/site";
import { useLanguage } from "../../i18n/context";

export default function DisclaimerPage() {
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
              చట్టబద్ధమైన డిస్క్లైమర్ (Statutory Disclaimer)
            </h1>
            <p className="text-xs text-[var(--text-muted)]">
              చివరి నవీకరణ తేదీ: అక్టోబర్ 2026 • {siteConfig.businessNameTe}
            </p>

            <div className="p-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-500 text-xs sm:text-sm text-amber-950 dark:text-amber-200">
              ⚖️ <strong>గమనిక:</strong> ఈ వెబ్‌సైట్ ICICI బ్యాంక్ యొక్క అధికారిక వెబ్‌సైట్ కాదు. మేము అధీకృత లోన్ కనెక్టర్ / ఛానల్ పార్ట్‌నర్‌గా మాత్రమే వినియోగదారులకు మార్గదర్శకత్వం అందిస్తున్నాము.
            </div>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                1. లోన్ ఆమోదం & విచక్షణ
              </h2>
              <p className="text-sm leading-relaxed">
                లోన్ ఆమోదం, మంజూరు మొత్తం, వడ్డీ రేటు, కాలపరిమితి మరియు తుది నిబంధనలు పూర్తిగా సంబంధిత బ్యాంక్ లేదా ఆర్థిక సంస్థ యొక్క అంతర్గత క్రెడిట్ పాలసీ మరియు డాక్యుమెంట్ వెరిఫికేషన్‌పై ఆధారపడి ఉంటాయి. ఏ సందర్భంలోనూ &ldquo;వంద శాతం గ్యారెంటీ ఆమోదం&rdquo; లేదా &ldquo;తక్షణ హామీ&rdquo; ఇవ్వబడదు.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                2. వడ్డీ రేట్లు & EMI లెక్కలు
              </h2>
              <p className="text-sm leading-relaxed">
                ఈ వెబ్‌సైట్‌లోని కాలిక్యులేటర్‌లో చూపబడిన వడ్డీ రేట్లు కేవలం సూచనాత్మకమైనవి (Indicative). మార్కెట్ రెపో రేటు, మీ సిబిల్ స్కోర్ మరియు బ్యాంక్ పాలసీ ఆధారంగా వాస్తవ వడ్డీ రేట్లలో మార్పులు ఉండవచ్చు.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                3. ఎడ్యుకేషన్ మరియు కన్స్యూమర్ లోన్స్ (*)
              </h2>
              <p className="text-sm leading-relaxed">
                ఎడ్యుకేషన్ లోన్స్ మరియు కన్స్యూమర్ లోన్స్‌పై గుర్తించబడిన ఆస్టరిస్క్ (*) సూచన ప్రకారం, ఈ లోన్ల లభ్యత ప్రతి బ్యాంక్ ప్రస్తుత పాలసీ మరియు రుణగ్రహీత ప్రొఫైల్‌పై ఆధారపడి ఉంటుంది.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                4. ఎటువంటి ముందస్తు ఫీజులు లేవు
              </h2>
              <p className="text-sm leading-relaxed">
                మేము మా క్లయింట్ల నుండి ఎటువంటి ముందస్తు లోన్ శాంక్షన్ ఫీజులను నగదు రూపంలో వసూలు చేయము. చట్టబద్ధమైన బ్యాంక్ ప్రాసెసింగ్ ఫీజులు నేరుగా సంబంధిత బ్యాంక్ ఖాతాకు మాత్రమే చెల్లించవలసి ఉంటుంది.
              </p>
            </section>
          </article>
        ) : (
          <article className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-[var(--text-secondary)]">
            <h1 className="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Statutory Disclaimer & Compliance Disclosure
            </h1>
            <p className="text-xs text-[var(--text-muted)]">
              Last Updated: October 2026 • {siteConfig.businessName}
            </p>

            <div className="p-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-500 text-xs sm:text-sm text-amber-950 dark:text-amber-200">
              ⚖️ <strong>Institutional Disclosure:</strong> This is NOT the official website of ICICI Bank. We operate as an authorized independent loan connector / channel sourcing partner assisting clients with retail and commercial borrowing.
            </div>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                1. Loan Approval & Sanction Discretion
              </h2>
              <p className="text-sm leading-relaxed">
                Loan approval, final sanctioned credit limit, applicable interest rate, tenure, and disbursal terms are at the sole and absolute discretion of the respective bank or financial institution. Terms and conditions apply. We do not make promises of &ldquo;guaranteed approval&rdquo; or &ldquo;instant sanction&rdquo;.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                2. Indicative Interest Rates & Calculator Estimates
              </h2>
              <p className="text-sm leading-relaxed">
                Any interest rates or EMI values generated on this website or communicated during initial consultations are purely indicative estimates meant for mathematical estimation purposes. Final rates are determined solely by lending institutions following formal credit appraisal.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                3. Conditional Categories (*)
              </h2>
              <p className="text-sm leading-relaxed">
                Categories marked with an asterisk (*), including Education Loans and Consumer Loans, are subject to specific partner institutional availability, underwriting criteria, and student or borrower credentials.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                4. Zero Upfront Cash Sanction Fees
              </h2>
              <p className="text-sm leading-relaxed">
                We never demand or accept cash handover for loan sanctions or approvals. All official administrative or processing charges must be remitted strictly through institutional bank payment gateways or account debits.
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
