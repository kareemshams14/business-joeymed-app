"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What programs do you offer?",
    a: "We offer five program categories: (1) Individualized Weight Loss with compounded GLP-1/GIP, (2) Brand-Name Weight Loss with Wegovy/Ozempic/Zepbound/Mounjaro only, (3) Testosterone Replacement Therapy (TRT), (4) Female Hormone Replacement Therapy (HRT) for menopause/perimenopause, (5) Men's and Women's Sexual Health (ED, PE, libido), and (6) Anti-Aging & Longevity. All are clinically supervised and delivered via telemedicine.",
  },
  {
    q: "How does the at-home screening work?",
    a: "For programs requiring labs (TRT, Female HRT), we ship screening kits directly to enrolled employees. They complete at-home blood collection guided by a live certified proctor via telehealth. Results are clinically reviewed, and eligible employees receive their prescription. Weight loss, sexual health, and longevity programs typically don't require labs.",
  },
  {
    q: "What's the difference between Individualized and Brand-Name Weight Loss?",
    a: "Individualized WL uses compounded semaglutide/tirzepatide with three titration tracks (Alternative, Rapid, Twice-Weekly) and symptom-targeted additives for personalization. Brand-Name WL uses only FDA-approved brand medications (Wegovy, Ozempic, Zepbound, Mounjaro) with strict eligibility — no compounded products. Both include safety screening and ongoing follow-ups.",
  },
  {
    q: "What medications are prescribed for TRT and Female HRT?",
    a: "TRT: Testosterone Lotion (2-20mg/ml), Testosterone Lotion 5-10%, and Testosterone Cypionate injections — all requiring mandatory low-T lab confirmation. Female HRT: Estrogen therapy (Estrogel, Divigel, Vivelle-Dot patches, oral Estrace, Evamist spray), Progesterone (Prometrium, Provera, Norethindrone), and Vaginal Estrogen for genitourinary symptoms. Female HRT does not include controlled substances like testosterone.",
  },
  {
    q: "What sexual health treatments are available?",
    a: "Men's ED: Sildenafil, Tadalafil, Vardenafil, Avanafil, and compounded combinations. Premature Ejaculation: SSRI class (Paroxetine, Sertraline, Fluoxetine, Citalopram) and PDE5i class, plus desensitizing products. Women's Sexual Health: PT-141 (Bremelanotide) and Oxytocin for desire and intimacy support. No labs required for any sexual health program.",
  },
  {
    q: "How does pricing work for employers?",
    a: "We offer flexible cost models: fully employer-subsidized, partially subsidized (cost-sharing), or employee-paid. We can also integrate with your existing PBM (like CVS Caremark). Contact our team for custom pricing based on your workforce size, selected programs, and coverage model.",
  },
  {
    q: "What kind of reporting do employers receive?",
    a: "Our Population Health Dashboard provides aggregated, de-identified analytics including enrollment rates by program, retention, outcomes, medication adherence, and engagement scores. Enterprise plans include custom ROI reporting and executive health briefings.",
  },
  {
    q: "How is patient privacy handled?",
    a: "All services are fully HIPAA-compliant. Employers receive only aggregated, de-identified data — never individual employee health information. Our platform uses enterprise-grade encryption and follows strict healthcare data governance protocols. Sexual health programs feature additional privacy safeguards.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-blue/6 text-blue rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight mb-4">
            Common questions about{" "}
            <span className="gradient-text">our business programs</span>
          </h2>
        </div>

        <div className="max-w-[720px] mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border/60">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-5 text-left text-[15px] font-semibold text-text-primary hover:text-blue transition-colors"
              >
                {faq.q}
                <span
                  className={`ml-4 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 4v10M4 9h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[500px] pb-5" : "max-h-0"
                }`}
              >
                <p className="text-[14px] text-text-secondary leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
