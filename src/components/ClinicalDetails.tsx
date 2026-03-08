"use client";

import { useState } from "react";

type Tab = "iwl" | "bwl" | "trt" | "fhrt" | "ed" | "wsh" | "pe" | "longevity";

/* ───────────────── SVG Icon Components ───────────────── */

function ScaleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 15l4-8 3 4 3-6 4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PillIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="7" width="14" height="6" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 7v6" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2l6 3v5c0 4-2.5 6-6 8-3.5-2-6-4-6-8V5l6-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LabIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M8 3v5l-4 7a1 1 0 001 2h10a1 1 0 001-2l-4-7V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 3h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 10a7 7 0 0112.9-3.7M17 10a7 7 0 01-12.9 3.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 3v4h-4M4 17v-4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 17s-6-4.35-6-8.5A3.5 3.5 0 0110 6a3.5 3.5 0 016 2.5C16 12.65 10 17 10 17z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2l1.5 5.5L17 9l-5.5 1.5L10 16l-1.5-5.5L3 9l5.5-1.5L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M14.7 6.3a5 5 0 01-6.7 6.7L5 16l-1-1 3-3A5 5 0 0114.7 6.3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 17V9M7 17V5M11 17v-6M15 17V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function MedicalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 7v6M7 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

/* ───────────────── Individualized Weight Loss Data ───────────────── */

const iwlHighlights = [
  { title: "3 Titration Tracks", desc: "Alternative, Rapid, and Twice-Weekly regimens for semaglutide and tirzepatide — matched to patient history and tolerance." },
  { title: "Additive Modules", desc: "B-complex, NAD, glycine, and L-carnitine mapped to patient-reported side effects to support adherence and outcomes." },
  { title: "Adaptive Dosing", desc: "Dynamic dose advancement or de-escalation, protocol switching, and selfie-based verification for continuous engagement." },
];

const iwlSafety = [
  "Built-in disqualifiers (e.g., low BMI thresholds) prevent inappropriate initiation",
  "Pregnancy safeguards with explicit contraception guidance and consent",
  "Gallbladder counseling and drug-interaction screening at intake",
  "Clear escalation to Alternative vs Rapid vs Twice-Weekly based on tolerance and efficacy",
  "Dual pathway consent: compounded options with detailed testing, consistency, and risk disclosures",
  "GLP-1/GIP consent: transparent risks (pancreatitis, gallbladder disease, gastroparesis)",
];

/* ───────────────── Brand-Name Weight Loss Data ───────────────── */

const bwlMedications = [
  { name: "Wegovy (semaglutide)", dosage: "Per FDA titration schedule", form: "Injection", note: "FDA-approved for weight management" },
  { name: "Ozempic (semaglutide)", dosage: "Per FDA titration schedule", form: "Injection", note: "FDA-approved for T2D, used for weight" },
  { name: "Zepbound (tirzepatide)", dosage: "Per FDA titration schedule", form: "Injection", note: "FDA-approved for weight management" },
  { name: "Mounjaro (tirzepatide)", dosage: "Per FDA titration schedule", form: "Injection", note: "FDA-approved for T2D, used for weight" },
];

const bwlExclusions = [
  "Personal/family history of medullary thyroid carcinoma or MEN-2 syndrome",
  "History of pancreatitis or active pancreatic disease",
  "Symptomatic gallstones or gallbladder disease",
  "Severe GI motility disorder (e.g., gastroparesis)",
  "Recent bariatric surgery",
  "Concurrent insulin or sulfonylurea use (tirzepatide-specific)",
  "Pregnancy or breastfeeding — contraindicated with explicit consent routing",
];

/* ───────────────── TRT Data ───────────────── */

const trtMedications = [
  {
    category: "Topical Testosterone Lotions",
    meds: [
      { name: "Testosterone Lotion Low Dose", dosage: "2–10 mg/ml", form: "30ml Lotion", note: "Starter dose" },
      { name: "Testosterone Lotion Low Dose", dosage: "11–20 mg/ml", form: "30ml Lotion", note: "Titrated dose" },
      { name: "Testosterone Lotion 5%", dosage: "5%", form: "60 gm Lotion", note: "Standard topical" },
      { name: "Testosterone Lotion 10%", dosage: "10%", form: "60 gm Lotion", note: "High-concentration topical" },
    ],
  },
  {
    category: "Injectable Testosterone",
    meds: [
      { name: "Testosterone Cypionate", dosage: "Per protocol", form: "Injection", note: "Gold standard injectable" },
    ],
  },
];

const trtInitialLabs = [
  "Total Testosterone", "Free Testosterone", "Estradiol", "SHBG",
  "FSH", "LH", "Prolactin", "H/H (Hemoglobin/Hematocrit)", "AST/ALT", "PSA",
];

const trtFollowUpLabs = ["Total Testosterone", "AST/ALT", "H/H (Hemoglobin/Hematocrit)"];

const trtSafety = [
  "Mandatory low testosterone value (per lab reference range) required before initiation",
  "Structured digital questionnaires capture red-flags: sleep apnea, prostate/breast history, erythrocytosis, thrombotic risk, hepatic/renal disease",
  "Clear escalation/referral criteria for uncontrolled adverse effects, abnormal PSA, or elevated hematocrit",
  "1–3 month follow-ups sustain engagement, enable timely dose adjustments, and improve satisfaction",
  "Quarterly lab monitoring (Total T, AST/ALT, H/H) ensures ongoing safety",
];

/* ───────────────── Female HRT Data ───────────────── */

const fhrtEstrogen = [
  { name: "Estrogel", dosage: "1 pump twice daily", form: "Gel", note: "Preferred for reduced thrombotic risk" },
  { name: "Divigel", dosage: "0.25g daily, titrate up to 1.25g", form: "Gel", note: "Adjustable dosing" },
  { name: "Topical Cream (Compounded)", dosage: "1mg/gm once daily, may increase", form: "Cream", note: "Customized compounding" },
  { name: "Evamist", dosage: "1 spray (1.53mg) daily, up to 3 sprays", form: "Spray", note: "Dose adjustable" },
  { name: "Vivelle-Dot", dosage: "0.025–0.10 mg/24 hours", form: "Patch", note: "Preferred for safety" },
  { name: "Oral Estradiol (Estrace)", dosage: "0.5 mg, 1 mg, or 2 mg daily", form: "Oral", note: "Contraindicated in smokers" },
];

const fhrtProgesterone = [
  { name: "Micronized Progesterone (Prometrium)", dosage: "100 mg at bedtime, up to 200 mg", form: "Oral", note: "May aid in sleep" },
  { name: "Medroxyprogesterone Acetate (Provera)", dosage: "10 mg for 10–14 days cyclically", form: "Oral", note: "Used cyclically" },
  { name: "Norethindrone", dosage: "0.35–1 mg daily", form: "Oral", note: "Alternative option" },
];

const fhrtVaginal = [
  { name: "Vaginal Estradiol Suppository", dosage: "4 mcg twice weekly", form: "Suppository", note: "For genitourinary symptoms" },
  { name: "Estradiol Vaginal Cream (0.01%)", dosage: "1 applicatorful twice weekly or 1/8 gm daily", form: "Cream", note: "Provides local relief" },
];

const fhrtSideEffects = [
  { category: "Estrogen Therapy", effects: "Mild skin irritation (transdermal), breast tenderness, mood fluctuations, spotting" },
  { category: "Progesterone Therapy", effects: "Sleepiness, breast tenderness, spotting (adjust dosage if needed)" },
  { category: "General", effects: "Continuous monitoring essential for abnormal vaginal bleeding, cardiovascular symptoms, or hormonal side effects" },
];

/* ───────────────── Longevity Data ───────────────── */

const longevityMeds = [
  { name: "NAD+", dosage: "Per protocol", form: "Injection / Oral", note: "Cellular energy & repair" },
  { name: "Glutathione", dosage: "Per protocol", form: "Injection / Oral", note: "Master antioxidant" },
  { name: "Metformin", dosage: "Per protocol", form: "Oral", note: "Metabolic longevity" },
  { name: "Vitamin B12", dosage: "Per protocol", form: "Injection / Oral", note: "Energy metabolism" },
  { name: "Retinoids (Topical)", dosage: "Per formulation", form: "Cream / Gel", note: "Skin renewal" },
  { name: "Hyaluronic Acid (Topical)", dosage: "Per formulation", form: "Cream / Serum", note: "Skin hydration" },
];

const longevityAddons = [
  "Red light therapy masks",
  "Collagen supplements",
  "Microneedling devices",
  "Cold therapy / plunges",
  "Diet and exercise programs",
  "Personalized supplement stacks",
];

/* ───────────────── Sexual Health Data ───────────────── */

const edMeds = [
  { name: "Sildenafil (Viagra)", dosage: "25–100 mg as needed", form: "Oral", note: "Most widely prescribed" },
  { name: "Tadalafil (Cialis)", dosage: "5–20 mg as needed or 2.5–5 mg daily", form: "Oral", note: "Long-acting (36 hrs)" },
  { name: "Vardenafil (Levitra)", dosage: "5–20 mg as needed", form: "Oral", note: "Rapid onset" },
  { name: "Avanafil (Stendra)", dosage: "50–200 mg as needed", form: "Oral", note: "Fastest onset PDE5i" },
  { name: "Compounded Combinations", dosage: "Per pharmacy formulation", form: "Various", note: "Custom combos available" },
];

const peMeds = [
  { name: "Paroxetine", dosage: "Per protocol", form: "Oral (SSRI)", note: "Most effective SSRI for PE" },
  { name: "Sertraline", dosage: "Per protocol", form: "Oral (SSRI)", note: "Well-studied for PE" },
  { name: "Fluoxetine", dosage: "Per protocol", form: "Oral (SSRI)", note: "Alternative SSRI" },
  { name: "Citalopram", dosage: "Per protocol", form: "Oral (SSRI)", note: "Alternative SSRI" },
  { name: "Tadalafil", dosage: "Per protocol", form: "Oral (PDE5i)", note: "Combined approach" },
  { name: "Sildenafil", dosage: "Per protocol", form: "Oral (PDE5i)", note: "Combined approach" },
];

const wshMeds = [
  { name: "PT-141 (Bremelanotide)", dosage: "Per protocol", form: "Injection", note: "Melanocortin receptor agonist — boosts desire" },
  { name: "Oxytocin", dosage: "Per protocol", form: "Nasal / Injection", note: "Bonding hormone — supports intimacy" },
];

/* ───────────────── Shared Components ───────────────── */

function MedTable({ meds }: { meds: { name: string; dosage: string; form: string; note: string }[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 pr-4 font-semibold text-text-primary">Medication</th>
            <th className="text-left py-3 pr-4 font-semibold text-text-primary">Dosage</th>
            <th className="text-left py-3 pr-4 font-semibold text-text-primary hidden sm:table-cell">Form</th>
            <th className="text-left py-3 font-semibold text-text-primary hidden md:table-cell">Considerations</th>
          </tr>
        </thead>
        <tbody>
          {meds.map((m, i) => (
            <tr key={i} className="border-b border-border/40 hover:bg-bg-alt/50 transition-colors">
              <td className="py-3 pr-4 font-medium text-text-primary">{m.name}</td>
              <td className="py-3 pr-4 text-text-secondary">{m.dosage}</td>
              <td className="py-3 pr-4 text-text-secondary hidden sm:table-cell">
                <span className="inline-block px-2 py-0.5 bg-bg-alt rounded text-[11px] font-medium">{m.form}</span>
              </td>
              <td className="py-3 text-text-muted text-[12px] hidden md:table-cell">{m.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LabChip({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1.5 bg-bg-alt border border-border/60 rounded-lg text-[12px] font-medium text-text-secondary">
      {label}
    </span>
  );
}

function SafetyList({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[13px] text-text-secondary leading-relaxed">
          <svg className={`${color} shrink-0 mt-0.5`} width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

function IconBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

/* ───────────────── Tab Config ───────────────── */

const tabs: { id: Tab; label: string; gradient: string }[] = [
  { id: "iwl", label: "Individualized WL", gradient: "from-blue to-cyan" },
  { id: "bwl", label: "Brand-Name WL", gradient: "from-blue-dark to-blue" },
  { id: "trt", label: "TRT", gradient: "from-orange to-amber" },
  { id: "fhrt", label: "Female HRT", gradient: "from-purple to-purple/60" },
  { id: "ed", label: "Men's ED", gradient: "from-rose to-rose/60" },
  { id: "pe", label: "Premature Ejaculation", gradient: "from-rose to-rose/60" },
  { id: "wsh", label: "Women's Sexual Health", gradient: "from-rose to-rose/60" },
  { id: "longevity", label: "Longevity", gradient: "from-amber to-amber/60" },
];

/* ───────────────── Main Component ───────────────── */

export function ClinicalDetails() {
  const [tab, setTab] = useState<Tab>("iwl");

  return (
    <section id="clinical" className="py-24 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-blue/6 text-blue rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            Clinical Protocols
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight mb-4">
            Evidence-based formulary &{" "}
            <span className="gradient-text">safety protocols</span>
          </h2>
          <p className="text-[17px] text-text-secondary leading-relaxed">
            Every program is backed by structured clinical protocols, mandatory
            safety screening, and ongoing monitoring. Explore each program&apos;s
            clinical details below.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center bg-white rounded-2xl p-1.5 border border-border shadow-sm gap-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${
                  tab === t.id
                    ? `bg-gradient-to-r ${t.gradient} text-white shadow-sm`
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Individualized Weight Loss Tab ─── */}
        {tab === "iwl" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <IconBox className="bg-blue/8 text-blue"><ScaleIcon /></IconBox>
                <h3 className="text-xl font-bold">Individualized Weight Loss — Compounded GLP-1/GIP</h3>
              </div>
              <p className="text-[13px] text-text-muted mb-6">
                Visit Type: Individualized Weight Loss Program (GLP-1 / GIP-GLP-1) &bull; Labs: Not required but can be implemented &bull; Therapies: Compounded semaglutide / tirzepatide
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {iwlHighlights.map((h) => (
                  <div key={h.title} className="bg-blue/4 rounded-2xl p-5 border border-blue/8">
                    <h4 className="text-[13px] font-bold text-blue mb-2">{h.title}</h4>
                    <p className="text-[13px] text-text-secondary leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-bg-alt rounded-2xl p-5">
                  <h4 className="text-[13px] font-bold mb-2">Compliance & Consent</h4>
                  <ul className="text-[13px] text-text-secondary space-y-1.5">
                    <li className="flex gap-2"><span className="text-text-muted">&#8226;</span>Compounding consent (testing, consistency, risk disclosures)</li>
                    <li className="flex gap-2"><span className="text-text-muted">&#8226;</span>GLP-1/GIP consent (pancreatitis, gallbladder, gastroparesis)</li>
                    <li className="flex gap-2"><span className="text-text-muted">&#8226;</span>Pregnancy/BMI consents for off-label ranges</li>
                    <li className="flex gap-2"><span className="text-text-muted">&#8226;</span>Selfie verification policy disclosure</li>
                  </ul>
                </div>
                <div className="bg-bg-alt rounded-2xl p-5">
                  <h4 className="text-[13px] font-bold mb-2">Business Advantages</h4>
                  <ul className="text-[13px] text-text-secondary space-y-1.5">
                    <li className="flex gap-2"><span className="text-text-muted">&#8226;</span>Personalization = differentiation & reduced discontinuation</li>
                    <li className="flex gap-2"><span className="text-text-muted">&#8226;</span>Embedded disqualifiers standardize risk at high volume</li>
                    <li className="flex gap-2"><span className="text-text-muted">&#8226;</span>Iterative optimization creates sticky, long-term retention</li>
                    <li className="flex gap-2"><span className="text-text-muted">&#8226;</span>Cross-sell: metabolic support, sleep, mental health, fitness</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue/4 to-white rounded-3xl p-8 sm:p-10 border border-blue/10">
              <div className="flex items-center gap-3 mb-6">
                <IconBox className="bg-blue/8 text-blue"><ShieldIcon /></IconBox>
                <h3 className="text-xl font-bold">Safety by Design</h3>
              </div>
              <SafetyList items={iwlSafety} color="text-blue" />
            </div>
          </div>
        )}

        {/* ─── Brand-Name Weight Loss Tab ─── */}
        {tab === "bwl" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <IconBox className="bg-blue-dark/8 text-blue-dark"><PillIcon /></IconBox>
                <h3 className="text-xl font-bold">Brand-Name Only Formulary</h3>
              </div>
              <p className="text-[13px] text-text-muted mb-6">
                Visit Type: Brand-Name Weight Loss (GLP-1 / GIP-GLP-1) &bull; No compounded products &bull; FDA-approved medications only
              </p>
              <MedTable meds={bwlMedications} />
            </div>

            <div className="bg-gradient-to-br from-blue-light to-white rounded-3xl p-8 sm:p-10 border border-blue-dark/10">
              <div className="flex items-center gap-3 mb-6">
                <IconBox className="bg-blue-dark/8 text-blue-dark"><ShieldIcon /></IconBox>
                <h3 className="text-xl font-bold">Eligibility & Exclusion Criteria</h3>
              </div>
              <p className="text-[13px] text-text-secondary mb-4">
                Strict medical history screening with clear disqualifiers to protect patients and clinicians:
              </p>
              <SafetyList items={bwlExclusions} color="text-blue-dark" />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Trust & Differentiation", desc: "Brand-only positioning builds credibility with patients and payers." },
                { title: "Operational Clarity", desc: "Standardized route-to-dose rules, clear disqualifiers, and strong consent language." },
                { title: "Retention Engine", desc: "Predictable titration, proactive side-effect checks, and dose validations." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-5 border border-border">
                  <h4 className="text-[13px] font-bold text-blue-dark mb-2">{item.title}</h4>
                  <p className="text-[13px] text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── TRT Tab ─── */}
        {tab === "trt" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <IconBox className="bg-orange/8 text-orange"><PillIcon /></IconBox>
                <h3 className="text-xl font-bold">TRT Medication Formulary</h3>
              </div>
              {trtMedications.map((cat) => (
                <div key={cat.category} className="mb-8 last:mb-0">
                  <h4 className="text-[12px] font-bold text-orange uppercase tracking-wider mb-3">
                    {cat.category}
                  </h4>
                  <MedTable meds={cat.meds} />
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <IconBox className="bg-orange/8 text-orange"><LabIcon /></IconBox>
                  <h3 className="text-base font-bold">Initial Labs Required</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trtInitialLabs.map((lab) => <LabChip key={lab} label={lab} />)}
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <IconBox className="bg-orange/8 text-orange"><RefreshIcon /></IconBox>
                  <h3 className="text-base font-bold">Follow-Up Labs (Q3 Months)</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trtFollowUpLabs.map((lab) => <LabChip key={lab} label={lab} />)}
                </div>
                <p className="text-[12px] text-text-muted mt-4">
                  Quarterly monitoring ensures ongoing safety and enables timely dose adjustments.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange/4 to-white rounded-3xl p-8 sm:p-10 border border-orange/10">
              <div className="flex items-center gap-3 mb-6">
                <IconBox className="bg-orange/8 text-orange"><ShieldIcon /></IconBox>
                <h3 className="text-xl font-bold">Safety First</h3>
              </div>
              <SafetyList items={trtSafety} color="text-orange" />
            </div>
          </div>
        )}

        {/* ─── Female HRT Tab ─── */}
        {tab === "fhrt" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <IconBox className="bg-purple/8 text-purple"><PillIcon /></IconBox>
                <div>
                  <h3 className="text-xl font-bold">Estrogen Therapy</h3>
                  <p className="text-[12px] text-text-muted">First-line treatment options</p>
                </div>
              </div>
              <MedTable meds={fhrtEstrogen} />
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <IconBox className="bg-purple/8 text-purple"><HeartIcon /></IconBox>
                <div>
                  <h3 className="text-xl font-bold">Progesterone Therapy</h3>
                  <p className="text-[12px] text-text-muted">For patients with an intact uterus</p>
                </div>
              </div>
              <MedTable meds={fhrtProgesterone} />
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <IconBox className="bg-purple/8 text-purple"><MedicalIcon /></IconBox>
                <div>
                  <h3 className="text-xl font-bold">Vaginal Estrogen</h3>
                  <p className="text-[12px] text-text-muted">For genitourinary symptoms of menopause</p>
                </div>
              </div>
              <MedTable meds={fhrtVaginal} />
            </div>

            <div className="bg-gradient-to-br from-purple/4 to-white rounded-3xl p-8 sm:p-10 border border-purple/10">
              <div className="flex items-center gap-3 mb-6">
                <IconBox className="bg-purple/8 text-purple"><ShieldIcon /></IconBox>
                <h3 className="text-xl font-bold">Side Effects & Monitoring</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {fhrtSideEffects.map((se) => (
                  <div key={se.category} className="bg-white/60 rounded-2xl p-5 border border-border/50">
                    <h4 className="text-[13px] font-bold text-purple mb-2">{se.category}</h4>
                    <p className="text-[13px] text-text-secondary leading-relaxed">{se.effects}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white/60 rounded-2xl p-5 border border-border/50">
                <p className="text-[13px] text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">Important:</strong> This encounter type provides structured,
                  patient-centered menopause care through individualized hormone therapy and monitoring. It does not
                  provide controlled substances such as testosterone therapy. Continuous monitoring is essential.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ─── Men's ED Tab ─── */}
        {tab === "ed" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <IconBox className="bg-rose/8 text-rose"><PillIcon /></IconBox>
                <h3 className="text-xl font-bold">Erectile Dysfunction Formulary</h3>
              </div>
              <p className="text-[13px] text-text-muted mb-6">
                Labs: Not required &bull; Follow-up: Every 6 months &bull; 30M+ men affected in the US alone
              </p>
              <MedTable meds={edMeds} />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Recurring Revenue", desc: "Subscription-based refills and follow-up consultations ensure predictable income." },
                { title: "Discreet Delivery", desc: "Direct-to-doorstep delivery increases adherence and reduces stigma barriers." },
                { title: "Hardware Integration", desc: "Can integrate monitoring rings and devices for blood flow and erection quality tracking." },
              ].map((item) => (
                <div key={item.title} className="bg-gradient-to-br from-rose/4 to-white rounded-2xl p-5 border border-rose/8">
                  <h4 className="text-[13px] font-bold text-rose mb-2">{item.title}</h4>
                  <p className="text-[13px] text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── Premature Ejaculation Tab ─── */}
        {tab === "pe" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <IconBox className="bg-rose/8 text-rose"><PillIcon /></IconBox>
                <h3 className="text-xl font-bold">Premature Ejaculation Formulary</h3>
              </div>
              <p className="text-[13px] text-text-muted mb-6">
                Labs: Not required &bull; Follow-up: 3–6 months &bull; Affects 1 in 3 men
              </p>
              <h4 className="text-[12px] font-bold text-rose uppercase tracking-wider mb-3">SSRI & PDE5i Classes</h4>
              <MedTable meds={peMeds} />
            </div>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <IconBox className="bg-rose/8 text-rose"><WrenchIcon /></IconBox>
                <h3 className="text-xl font-bold">Add-Ons</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {["Desensitizing wipes", "Desensitizing creams", "Desensitizing gels"].map((addon) => (
                  <div key={addon} className="flex items-center gap-2 bg-bg-alt rounded-xl px-4 py-3 border border-border text-[13px] text-text-secondary">
                    <span className="text-rose font-bold">+</span>
                    {addon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── Women's Sexual Health Tab ─── */}
        {tab === "wsh" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <IconBox className="bg-rose/8 text-rose"><HeartIcon /></IconBox>
                <h3 className="text-xl font-bold">Women&apos;s Sexual Health Formulary</h3>
              </div>
              <p className="text-[13px] text-text-muted mb-6">
                Labs: Not required &bull; Follow-up: Every 6 months &bull; Up to 40% of women report sexual desire concerns
              </p>
              <MedTable meds={wshMeds} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "PT-141 (Bremelanotide)", desc: "Acts on melanocortin receptors in the brain to boost sexual desire and arousal. Novel mechanism beyond conventional therapies." },
                { title: "Oxytocin", desc: "Known as the \"bonding hormone\" — supports emotional closeness, intimacy, and trust. Prescribed individually or with PT-141." },
              ].map((item) => (
                <div key={item.title} className="bg-gradient-to-br from-rose/4 to-white rounded-2xl p-5 border border-rose/8">
                  <h4 className="text-[13px] font-bold text-rose mb-2">{item.title}</h4>
                  <p className="text-[13px] text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-rose/4 to-white rounded-3xl p-8 sm:p-10 border border-rose/10">
              <div className="flex items-center gap-3 mb-4">
                <IconBox className="bg-rose/8 text-rose"><ChartIcon /></IconBox>
                <h3 className="text-xl font-bold">Market Opportunity</h3>
              </div>
              <p className="text-[13px] text-text-secondary leading-relaxed">
                The global women&apos;s sexual health and wellness market is projected to exceed <strong className="text-text-primary">$50 billion by 2030</strong>.
                Few platforms currently offer women&apos;s libido therapies — this fills a major gap. Women&apos;s sexual health naturally
                extends into hormone therapy, menopause care, and mental health for strong cross-selling potential.
              </p>
            </div>
          </div>
        )}

        {/* ─── Longevity Tab ─── */}
        {tab === "longevity" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <IconBox className="bg-amber/8 text-amber"><SparkleIcon /></IconBox>
                <h3 className="text-xl font-bold">Anti-Aging & Longevity Formulary</h3>
              </div>
              <p className="text-[13px] text-text-muted mb-6">
                Labs: Not required &bull; Follow-up: Every 6 months &bull; Subscription-based model
              </p>
              <MedTable meds={longevityMeds} />
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <IconBox className="bg-amber/8 text-amber"><WrenchIcon /></IconBox>
                <h3 className="text-xl font-bold">Add-Ons & Hardware</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {longevityAddons.map((addon) => (
                  <div key={addon} className="flex items-center gap-2 bg-bg-alt rounded-xl px-4 py-3 border border-border text-[13px] text-text-secondary">
                    <span className="text-amber font-bold">+</span>
                    {addon}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Recurring Revenue", desc: "Subscription-based 6-month follow-up model creates predictable, long-term retention." },
                { title: "High Lifetime Value", desc: "Ongoing monitoring, optimization, and compounded medications provide high-margin opportunities." },
                { title: "Cross-Selling", desc: "Natural adjacency to hormonal health, metabolic wellness, and preventive medicine programs." },
              ].map((item) => (
                <div key={item.title} className="bg-gradient-to-br from-amber/4 to-white rounded-2xl p-5 border border-amber/8">
                  <h4 className="text-[13px] font-bold text-amber mb-2">{item.title}</h4>
                  <p className="text-[13px] text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-amber/4 to-white rounded-3xl p-8 sm:p-10 border border-amber/10">
              <div className="flex items-center gap-3 mb-4">
                <IconBox className="bg-amber/8 text-amber"><ChartIcon /></IconBox>
                <h3 className="text-xl font-bold">Market Opportunity</h3>
              </div>
              <p className="text-[13px] text-text-secondary leading-relaxed">
                The global anti-aging market is projected to exceed <strong className="text-text-primary">$120 billion by 2030</strong>.
                Aging populations and health-conscious consumers drive demand for therapies supporting cellular health,
                energy metabolism, and longevity. Telemedicine is the ideal delivery system — patients prefer online
                health optimization programs with personalized regimens including NAD, glutathione, and metabolic
                therapies gaining mainstream adoption.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
