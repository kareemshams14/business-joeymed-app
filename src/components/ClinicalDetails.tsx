"use client";

import { useState } from "react";
import {
  Scale, Heart, Sparkles, ShieldCheck,
  Check, Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Tab = "weight-loss" | "hormone-therapy" | "sexual-health" | "longevity";

/* ───── Color styles (explicit for Tailwind) ───── */

const colorStyles = {
  blue: {
    cardBg: "bg-blue/4",
    cardBorder: "border-blue/8",
    text: "text-blue",
    safetyBg: "bg-gradient-to-br from-blue/4 to-white",
    safetyBorder: "border-blue/10",
  },
  orange: {
    cardBg: "bg-orange/4",
    cardBorder: "border-orange/8",
    text: "text-orange",
    safetyBg: "bg-gradient-to-br from-orange/4 to-white",
    safetyBorder: "border-orange/10",
  },
  rose: {
    cardBg: "bg-rose/4",
    cardBorder: "border-rose/8",
    text: "text-rose",
    safetyBg: "bg-gradient-to-br from-rose/4 to-white",
    safetyBorder: "border-rose/10",
  },
  amber: {
    cardBg: "bg-amber/4",
    cardBorder: "border-amber/8",
    text: "text-amber",
    safetyBg: "bg-gradient-to-br from-amber/4 to-white",
    safetyBorder: "border-amber/10",
  },
} as const;

type ColorKey = keyof typeof colorStyles;

/* ───── Data ───── */

const tabs: { id: Tab; label: string; icon: LucideIcon; gradient: string; color: ColorKey }[] = [
  { id: "weight-loss", label: "Weight Loss", icon: Scale, gradient: "from-blue to-cyan", color: "blue" },
  { id: "hormone-therapy", label: "Hormone Therapy", icon: Stethoscope, gradient: "from-orange to-amber", color: "orange" },
  { id: "sexual-health", label: "Sexual Health", icon: Heart, gradient: "from-rose to-rose/60", color: "rose" },
  { id: "longevity", label: "Anti-Aging & Longevity", icon: Sparkles, gradient: "from-amber to-amber/60", color: "amber" },
];

const programs: Record<Tab, {
  title: string;
  subtitle: string;
  highlights: { title: string; desc: string }[];
  includes: string[];
  safety: string[];
}> = {
  "weight-loss": {
    title: "Medically Supervised Weight Loss",
    subtitle: "Clinician-guided GLP-1 programs with personalized dosing, ongoing monitoring, and built-in safety checks.",
    highlights: [
      { title: "Personalized Plans", desc: "Multiple dosing tracks tailored to each patient's history, tolerance, and goals — not one-size-fits-all." },
      { title: "Brand-Name & Compounded Options", desc: "Access to FDA-approved medications (Wegovy, Zepbound) as well as compounded alternatives for flexibility." },
      { title: "Ongoing Support", desc: "Regular check-ins, side-effect management, and dose adjustments to keep patients on track long-term." },
    ],
    includes: [
      "Semaglutide & tirzepatide prescribing",
      "Multiple titration schedules based on patient needs",
      "Supportive supplements (B-complex, NAD, L-carnitine)",
      "Structured follow-up and dose optimization",
      "At-home lab testing available",
    ],
    safety: [
      "Medical screening to ensure eligibility before starting",
      "Built-in pregnancy safeguards and contraindication checks",
      "Clear consent process covering risks and expectations",
      "Ongoing monitoring with defined escalation criteria",
    ],
  },
  "hormone-therapy": {
    title: "Hormone Replacement Therapy",
    subtitle: "Structured testosterone therapy for men and menopause care for women — lab-verified, physician-monitored, and fully compliant.",
    highlights: [
      { title: "Men's Testosterone Therapy", desc: "Topical and injectable options with mandatory lab verification before starting and quarterly monitoring throughout." },
      { title: "Women's Menopause Care", desc: "Individualized estrogen, progesterone, and vaginal therapies to manage hot flashes, mood changes, and other symptoms." },
      { title: "Lab-Driven Decisions", desc: "Every treatment plan is backed by bloodwork — initial labs to qualify and follow-up labs to optimize." },
    ],
    includes: [
      "Testosterone (topical lotions and injectables)",
      "Estrogen therapy (gel, patch, oral, spray)",
      "Progesterone and vaginal estrogen options",
      "Initial and quarterly lab panels",
      "Structured follow-up every 1–3 months",
    ],
    safety: [
      "Lab-confirmed hormone levels required before initiation",
      "Comprehensive screening questionnaires for red flags",
      "Clear referral criteria for adverse effects or abnormal results",
      "Continuous monitoring with timely dose adjustments",
    ],
  },
  "sexual-health": {
    title: "Sexual Health Programs",
    subtitle: "Discreet, evidence-based treatment for men and women — covering common conditions that affect millions but are rarely addressed.",
    highlights: [
      { title: "Men's Programs", desc: "Erectile dysfunction and premature ejaculation treatments using proven PDE5 inhibitors, SSRIs, and combination therapies." },
      { title: "Women's Programs", desc: "Desire and arousal support through innovative therapies like PT-141 and oxytocin — filling a major gap in the market." },
      { title: "Discreet & Convenient", desc: "Direct-to-door delivery, virtual consultations, and subscription-based refills remove stigma and friction." },
    ],
    includes: [
      "FDA-approved ED medications (sildenafil, tadalafil, and more)",
      "SSRI-based premature ejaculation treatment",
      "Women's desire therapy (PT-141, oxytocin)",
      "Add-on products (desensitizing wipes, creams)",
      "6-month follow-up consultations",
    ],
    safety: [
      "Medical history review to rule out contraindications",
      "Drug interaction screening at intake",
      "Structured follow-ups to assess efficacy and side effects",
      "Clear protocols for dose adjustments or discontinuation",
    ],
  },
  longevity: {
    title: "Anti-Aging & Longevity",
    subtitle: "Proactive wellness programs focused on cellular health, energy, and long-term vitality — the fastest-growing segment in telehealth.",
    highlights: [
      { title: "Cellular Health", desc: "NAD+, glutathione, and metabolic therapies to support energy production, detoxification, and cellular repair." },
      { title: "Skin & Appearance", desc: "Medical-grade retinoids, hyaluronic acid, and complementary add-ons like red light therapy and microneedling." },
      { title: "Metabolic Optimization", desc: "Metformin, B12, and personalized supplement stacks to support healthy aging from the inside out." },
    ],
    includes: [
      "NAD+ and glutathione therapy",
      "Metformin for metabolic longevity",
      "Vitamin B12 injections",
      "Medical-grade skincare (retinoids, HA)",
      "Add-ons: red light therapy, collagen, cold therapy",
    ],
    safety: [
      "Physician review of health history before enrollment",
      "Personalized protocols based on individual health goals",
      "Regular 6-month follow-up consultations",
      "Clear guidelines for supplement and therapy interactions",
    ],
  },
};

/* ───── Main Component ───── */

export function ClinicalDetails() {
  const [activeTab, setActiveTab] = useState<Tab>("weight-loss");
  const data = programs[activeTab];
  const currentTab = tabs.find((t) => t.id === activeTab)!;
  const styles = colorStyles[currentTab.color];

  return (
    <section id="clinical" className="py-24 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-blue/6 text-blue rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            Clinical Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight mb-4">
            What we treat &{" "}
            <span className="gradient-text">how we do it</span>
          </h2>
          <p className="text-[17px] text-text-secondary leading-relaxed">
            Every program is physician-supervised with built-in safety checks,
            structured follow-ups, and evidence-based protocols.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center bg-white rounded-2xl p-1.5 border border-border shadow-sm gap-1">
            {tabs.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${
                    activeTab === t.id
                      ? `bg-gradient-to-r ${t.gradient} text-white shadow-sm`
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <Icon size={16} strokeWidth={1.5} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Header Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
            <h3 className="text-2xl font-bold mb-2">{data.title}</h3>
            <p className="text-[15px] text-text-secondary leading-relaxed mb-8 max-w-[700px]">
              {data.subtitle}
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4">
              {data.highlights.map((h) => (
                <div key={h.title} className={`${styles.cardBg} rounded-2xl p-5 border ${styles.cardBorder}`}>
                  <h4 className={`text-[13px] font-bold ${styles.text} mb-2`}>{h.title}</h4>
                  <p className="text-[13px] text-text-secondary leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included + Safety */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
              <h4 className="text-lg font-bold mb-5">What&apos;s Included</h4>
              <ul className="space-y-3">
                {data.includes.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-text-secondary leading-relaxed">
                    <Check size={14} className={`${styles.text} shrink-0 mt-0.5`} strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${styles.safetyBg} rounded-3xl p-8 sm:p-10 border ${styles.safetyBorder}`}>
              <div className="flex items-center gap-3 mb-5">
                <ShieldCheck size={20} className={styles.text} strokeWidth={1.5} />
                <h4 className="text-lg font-bold">Safety & Compliance</h4>
              </div>
              <ul className="space-y-3">
                {data.safety.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-text-secondary leading-relaxed">
                    <Check size={14} className={`${styles.text} shrink-0 mt-0.5`} strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
