"use client";

import { useState } from "react";
import {
  Scale, Brain, Sparkles, ShieldCheck,
  Check, Activity,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Tab = "weight-loss" | "behavioral-health" | "hormone-therapy" | "longevity";

/* ───── Color styles (explicit for Tailwind) ───── */

const colorStyles = {
  blue: {
    cardBg: "bg-blue/4",
    cardBorder: "border-blue/8",
    text: "text-blue",
    safetyBg: "bg-gradient-to-br from-blue/4 to-white",
    safetyBorder: "border-blue/10",
  },
  purple: {
    cardBg: "bg-purple/4",
    cardBorder: "border-purple/8",
    text: "text-purple",
    safetyBg: "bg-gradient-to-br from-purple/4 to-white",
    safetyBorder: "border-purple/10",
  },
  orange: {
    cardBg: "bg-orange/4",
    cardBorder: "border-orange/8",
    text: "text-orange",
    safetyBg: "bg-gradient-to-br from-orange/4 to-white",
    safetyBorder: "border-orange/10",
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
  { id: "behavioral-health", label: "Behavioral Health", icon: Brain, gradient: "from-purple to-purple/60", color: "purple" },
  { id: "hormone-therapy", label: "Hormone Therapy", icon: Activity, gradient: "from-orange to-amber", color: "orange" },
  { id: "longevity", label: "Longevity & Wellness", icon: Sparkles, gradient: "from-amber to-amber/60", color: "amber" },
];

const programs: Record<Tab, {
  title: string;
  insuranceGap: string;
  subtitle: string;
  highlights: { title: string; desc: string }[];
  includes: string[];
  employerValue: string[];
}> = {
  "weight-loss": {
    title: "Weight Loss Programs",
    insuranceGap: "Insurance rarely covers GLP-1 medications — or makes it a months-long prior authorization nightmare.",
    subtitle: "Personalized, physician-guided GLP-1 programs that employees can start in days, not months. Brand-name and compounded options with ongoing clinical support.",
    highlights: [
      { title: "No Insurance Barriers", desc: "Employees get access to semaglutide and tirzepatide without fighting their insurance company for months." },
      { title: "Personalized Dosing", desc: "Multiple titration tracks matched to each person's history and tolerance — not a one-size-fits-all approach." },
      { title: "Ongoing Clinical Support", desc: "Regular check-ins, side-effect management, and dose adjustments keep employees on track long-term." },
    ],
    includes: [
      "GLP-1 prescribing (semaglutide & tirzepatide)",
      "Brand-name and compounded medication options",
      "Personalized dosing and titration schedules",
      "Supportive supplements for adherence",
      "Structured follow-ups and dose optimization",
    ],
    employerValue: [
      "GLP-1 patients saw 40%+ fewer major cardiac events and 7% lower medical costs within 2 years (Aon, 2025)",
      "Losing just 5% body weight saves ~$670/year per employee; 25% loss saves $2,849/year (JAMA)",
      "43% of large employers now cover GLP-1s for weight loss — up from 28% in 2024 (KFF/Peterson)",
      "Validated ROI of up to 3:1 from medication optimization and sustained BMI reductions (Calibrate)",
    ],
  },
  "behavioral-health": {
    title: "Behavioral Health",
    insuranceGap: "Insurance covers therapy in theory — but waitlists are 3–6 months and most providers aren't accepting new patients.",
    subtitle: "Virtual mental health support your employees can actually access. No waitlists, no referral hoops — just fast, convenient care when they need it.",
    highlights: [
      { title: "Same-Week Access", desc: "Employees connect with licensed providers in days, not months. No more sitting on insurance waitlists." },
      { title: "Anxiety, Depression & More", desc: "Structured programs for the conditions that impact work the most — anxiety, depression, stress, and burnout." },
      { title: "Virtual & Stigma-Free", desc: "Private telehealth sessions employees can do from home. No awkward office visits or insurance paperwork." },
    ],
    includes: [
      "Virtual therapy and psychiatric consultations",
      "Anxiety and depression treatment programs",
      "Stress and burnout management",
      "Medication management when appropriate",
      "Structured follow-ups and progress tracking",
    ],
    employerValue: [
      "Workers with poor mental health miss ~12 days/year vs. 2.5 days — costing $47.6B/year (Gallup)",
      "Every $1 spent on mental health returns $5.39 in reduced absenteeism and turnover (CuraLinc, peer-reviewed)",
      "Depressed employees are 35% less productive and miss 31.4 workdays per year (APA)",
      "80%+ of virtual therapy patients report outcomes as good as or better than in-person (JMIR, 2024)",
    ],
  },
  "hormone-therapy": {
    title: "Hormone Therapy",
    insuranceGap: "Insurance almost never covers testosterone therapy or comprehensive menopause care — leaving millions underserved.",
    subtitle: "Lab-verified hormone therapy for men and women. Testosterone optimization, menopause management, and ongoing monitoring — all physician-supervised.",
    highlights: [
      { title: "Men's Health", desc: "Testosterone therapy with required lab verification, multiple delivery options, and quarterly monitoring to ensure safety and results." },
      { title: "Women's Menopause Care", desc: "Individualized estrogen and progesterone therapy for hot flashes, mood changes, sleep issues, and other menopause symptoms." },
      { title: "Lab-Driven & Monitored", desc: "Every treatment starts with bloodwork and includes regular follow-up labs — no guesswork." },
    ],
    includes: [
      "Testosterone therapy (topical and injectable)",
      "Estrogen and progesterone therapy",
      "Initial and quarterly lab panels",
      "Structured follow-ups every 1–3 months",
      "Symptom tracking and dose optimization",
    ],
    employerValue: [
      "Global menopause productivity losses estimated at $150B; healthcare costs exceed $600B (AARP)",
      "1 in 10 women leave the workforce due to menopause; 25% consider leaving (Mayo Clinic, 2023)",
      "6.5 million U.S. men projected to have symptomatic testosterone deficiency by 2025 (JCEM)",
      "HRT is the most effective treatment for menopause symptoms with bone density benefits (2025 Meta-Analysis)",
    ],
  },
  longevity: {
    title: "Longevity & Wellness",
    insuranceGap: "Insurance covers nothing in the proactive wellness space — no NAD, no metabolic optimization, no anti-aging therapies.",
    subtitle: "Forward-thinking wellness programs that go beyond sick care. Cellular health, metabolic optimization, and anti-aging therapies that keep employees performing at their best.",
    highlights: [
      { title: "Cellular Health", desc: "NAD+, glutathione, and metabolic therapies that support energy, recovery, and long-term vitality." },
      { title: "Metabolic Optimization", desc: "Metformin, B12, and personalized supplement protocols for healthy aging from the inside out." },
      { title: "Premium Wellness Perks", desc: "Red light therapy, medical-grade skincare, and recovery add-ons that employees genuinely value." },
    ],
    includes: [
      "NAD+ and glutathione therapy",
      "Metformin for metabolic health",
      "Vitamin B12 injections",
      "Medical-grade skincare protocols",
      "Wellness add-ons (red light, collagen, cold therapy)",
    ],
    employerValue: [
      "95% of companies tracking wellness ROI report positive returns (Wellhub, 2,000 HR leaders, 2024)",
      "J&J's wellness program delivered $2.71 per $1; GE reported $4 per $1 in healthcare savings (HBR)",
      "Companies with effective wellness programs are 40% more likely to report better financial performance (HBR)",
      "NAD+ supplementation elevates circulating NAD+ by 130–150% in clinical trials (2025 PRISMA Review)",
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
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-blue/6 text-blue rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            What We Cover
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight mb-4">
            Benefits your insurance{" "}
            <span className="gradient-text">doesn&apos;t cover</span>
          </h2>
          <p className="text-[17px] text-text-secondary leading-relaxed">
            We focus on the high-impact programs that traditional insurance
            either excludes, underfunds, or makes nearly impossible to access.
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
          {/* Insurance Gap Callout */}
          <div className={`${styles.safetyBg} rounded-2xl px-6 py-4 border ${styles.safetyBorder} flex items-start gap-3`}>
            <ShieldCheck size={18} className={`${styles.text} shrink-0 mt-0.5`} strokeWidth={1.5} />
            <p className="text-[14px] text-text-secondary leading-relaxed">
              <strong className="text-text-primary">The insurance gap:</strong>{" "}
              {data.insuranceGap}
            </p>
          </div>

          {/* Header Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
            <h3 className="text-2xl font-bold mb-2">{data.title}</h3>
            <p className="text-[15px] text-text-secondary leading-relaxed mb-8 max-w-[720px]">
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

          {/* What's Included + Employer Value */}
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
                <h4 className="text-lg font-bold">Why Employers Invest</h4>
              </div>
              <ul className="space-y-3">
                {data.employerValue.map((item, i) => (
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
