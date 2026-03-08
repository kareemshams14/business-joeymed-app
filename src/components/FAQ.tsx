"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How does the at-home screening kit work?",
    a: "We ship a program-specific screening kit directly to each enrolled employee. They schedule a short telehealth session with a certified proctor who guides them through the at-home blood collection in real-time. Results are clinically reviewed, and eligible employees receive their prescription — all without leaving home.",
  },
  {
    q: "What medications and therapies do you prescribe?",
    a: "GLP-1 Program: FDA-approved GLP-1/GIP medications including Semaglutide and Tirzepatide. TRT Program: Testosterone cypionate injections, topical gels, and other testosterone formulations. HRT Program: Bioidentical estrogen, progesterone, and combination therapies. All prescriptions are clinician-determined based on lab results and medical history.",
  },
  {
    q: "How do the at-home hormone panels work?",
    a: "Employees receive a program-specific test kit shipped to their home. For TRT, this includes total/free testosterone, SHBG, estradiol, PSA, and metabolic markers. For HRT, it covers estrogen, progesterone, FSH, LH, thyroid panel, and related hormones. A live proctor guides the collection, and results are reviewed by specialist clinicians within 48 hours.",
  },
  {
    q: "How does pricing work for employers?",
    a: "We offer flexible cost models: fully employer-subsidized, partially subsidized (cost-sharing), or employee-paid. We can also integrate with your existing PBM (like CVS Caremark) for seamless benefit administration. Contact our team for custom pricing based on your workforce size and coverage model.",
  },
  {
    q: "What kind of reporting do employers receive?",
    a: "Our Population Health Dashboard provides aggregated, de-identified analytics including enrollment rates, program retention, average weight outcomes, medication adherence metrics, and engagement scores. Enterprise plans include custom ROI reporting and executive health briefings.",
  },
  {
    q: "Is the program available in all 50 states?",
    a: "Yes. JoeyMed for Business operates with licensed providers across all 50 states. At-home screening kits ship nationwide, and our telehealth platform is accessible from anywhere in the US.",
  },
  {
    q: "How is patient privacy handled?",
    a: "All services are fully HIPAA-compliant. Employers receive only aggregated, de-identified data — never individual employee health information. Our platform uses enterprise-grade encryption and follows strict healthcare data governance protocols.",
  },
  {
    q: "What ongoing support do employees receive?",
    a: "Employees get 24/7 clinical support, weekly check-in prompts, medication reminders, clinician-guided titration management, side-effect support, and personalized health insights — all through the JoeyMed mobile app.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-light text-blue rounded-full text-[13px] font-bold uppercase tracking-wide mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight mb-4">
            Common questions about{" "}
            <span className="gradient-text">our business programs</span>
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-5 text-left text-[17px] font-semibold text-text-primary hover:text-blue transition-colors"
              >
                {faq.q}
                <span
                  className={`faq-icon text-2xl font-light text-text-muted ml-4 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[500px] pb-5" : "max-h-0"
                }`}
              >
                <p className="text-[15px] text-text-secondary leading-relaxed">
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
