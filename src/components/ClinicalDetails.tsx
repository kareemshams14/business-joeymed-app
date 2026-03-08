"use client";

import { useState } from "react";

type Tab = "iwl" | "bwl" | "trt" | "fhrt" | "ed" | "wsh" | "pe" | "longevity";

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
      <table className="w-full text-sm">
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
            <tr key={i} className="border-b border-border/50 hover:bg-bg-alt/50 transition-colors">
              <td className="py-3 pr-4 font-medium text-text-primary">{m.name}</td>
              <td className="py-3 pr-4 text-text-secondary">{m.dosage}</td>
              <td className="py-3 pr-4 text-text-secondary hidden sm:table-cell">
                <span className="inline-block px-2 py-0.5 bg-bg-alt rounded text-xs font-medium">{m.form}</span>
              </td>
              <td className="py-3 text-text-muted text-xs hidden md:table-cell">{m.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LabChip({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1.5 bg-bg-alt border border-border rounded-lg text-xs font-medium text-text-secondary">
      {label}
    </span>
  );
}

function SafetyList({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
          <span className={`${color} font-bold mt-0.5 shrink-0`}>✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ───────────────── Tab Config ───────────────── */

const tabs: { id: Tab; label: string; gradient: string }[] = [
  { id: "iwl", label: "Individualized WL", gradient: "from-blue to-cyan" },
  { id: "bwl", label: "Brand-Name WL", gradient: "from-[#00838F] to-cyan" },
  { id: "trt", label: "TRT", gradient: "from-orange to-yellow-400" },
  { id: "fhrt", label: "Female HRT", gradient: "from-purple to-purple-300" },
  { id: "ed", label: "Men's ED", gradient: "from-[#BE185D] to-[#F472B6]" },
  { id: "pe", label: "Premature Ejaculation", gradient: "from-[#BE185D] to-[#F472B6]" },
  { id: "wsh", label: "Women's Sexual Health", gradient: "from-[#BE185D] to-[#F472B6]" },
  { id: "longevity", label: "Longevity", gradient: "from-[#92400E] to-[#F59E0B]" },
];

/* ───────────────── Main Component ───────────────── */

export function ClinicalDetails() {
  const [tab, setTab] = useState<Tab>("iwl");

  return (
    <section id="clinical" className="py-24 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-light text-blue rounded-full text-[13px] font-bold uppercase tracking-wide mb-4">
            Clinical Protocols
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight mb-4">
            Evidence-based formulary &{" "}
            <span className="gradient-text">safety protocols</span>
          </h2>
          <p className="text-lg text-text-secondary">
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
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  tab === t.id
                    ? `bg-gradient-to-r ${t.gradient} text-white shadow-md`
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
          <div className="space-y-8">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-light flex items-center justify-center text-lg">⚖️</div>
                <h3 className="text-xl font-bold">Individualized Weight Loss — Compounded GLP-1/GIP</h3>
              </div>
              <p className="text-sm text-text-muted mb-6">
                Visit Type: Individualized Weight Loss Program (GLP-1 / GIP-GLP-1) &bull; Labs: Not required but can be implemented &bull; Therapies: Compounded semaglutide / tirzepatide
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {iwlHighlights.map((h) => (
                  <div key={h.title} className="bg-blue-light/50 rounded-2xl p-5 border border-blue/10">
                    <h4 className="text-sm font-bold text-blue mb-2">{h.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-bg-alt rounded-2xl p-5">
                  <h4 className="text-sm font-bold mb-2">Compliance & Consent</h4>
                  <ul className="text-sm text-text-secondary space-y-1.5">
                    <li>• Compounding consent (testing, consistency, risk disclosures)</li>
                    <li>• GLP-1/GIP consent (pancreatitis, gallbladder, gastroparesis)</li>
                    <li>• Pregnancy/BMI consents for off-label ranges</li>
                    <li>• Selfie verification policy disclosure</li>
                  </ul>
                </div>
                <div className="bg-bg-alt rounded-2xl p-5">
                  <h4 className="text-sm font-bold mb-2">Business Advantages</h4>
                  <ul className="text-sm text-text-secondary space-y-1.5">
                    <li>• Personalization = differentiation & reduced discontinuation</li>
                    <li>• Embedded disqualifiers standardize risk at high volume</li>
                    <li>• Iterative optimization creates sticky, long-term retention</li>
                    <li>• Cross-sell: metabolic support, sleep, mental health, fitness</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-gradient-to-br from-blue-light to-white rounded-[32px] p-8 sm:p-10 border border-blue/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center text-lg">🛡️</div>
                <h3 className="text-xl font-bold">Safety by Design</h3>
              </div>
              <SafetyList items={iwlSafety} color="text-blue" />
            </div>
          </div>
        )}

        {/* ─── Brand-Name Weight Loss Tab ─── */}
        {tab === "bwl" && (
          <div className="space-y-8">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#E0F7FA] flex items-center justify-center text-lg">💊</div>
                <h3 className="text-xl font-bold">Brand-Name Only Formulary</h3>
              </div>
              <p className="text-sm text-text-muted mb-6">
                Visit Type: Brand-Name Weight Loss (GLP-1 / GIP-GLP-1) &bull; No compounded products &bull; FDA-approved medications only
              </p>
              <MedTable meds={bwlMedications} />
            </div>

            <div className="bg-gradient-to-br from-[#E0F7FA] to-white rounded-[32px] p-8 sm:p-10 border border-[#00838F]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00838F]/10 flex items-center justify-center text-lg">🛡️</div>
                <h3 className="text-xl font-bold">Eligibility & Exclusion Criteria</h3>
              </div>
              <p className="text-sm text-text-secondary mb-4">
                Strict medical history screening with clear disqualifiers to protect patients and clinicians:
              </p>
              <SafetyList items={bwlExclusions} color="text-[#00838F]" />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-border">
                <h4 className="text-sm font-bold text-[#00838F] mb-2">Trust & Differentiation</h4>
                <p className="text-sm text-text-secondary">Brand-only positioning builds credibility with patients and payers.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-border">
                <h4 className="text-sm font-bold text-[#00838F] mb-2">Operational Clarity</h4>
                <p className="text-sm text-text-secondary">Standardized route-to-dose rules, clear disqualifiers, and strong consent language.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-border">
                <h4 className="text-sm font-bold text-[#00838F] mb-2">Retention Engine</h4>
                <p className="text-sm text-text-secondary">Predictable titration, proactive side-effect checks, and dose validations.</p>
              </div>
            </div>
          </div>
        )}

        {/* ─── TRT Tab ─── */}
        {tab === "trt" && (
          <div className="space-y-8">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-light flex items-center justify-center text-lg">💊</div>
                <h3 className="text-xl font-bold">TRT Medication Formulary</h3>
              </div>
              {trtMedications.map((cat) => (
                <div key={cat.category} className="mb-8 last:mb-0">
                  <h4 className="text-sm font-bold text-orange uppercase tracking-wide mb-3">
                    {cat.category}
                  </h4>
                  <MedTable meds={cat.meds} />
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-light flex items-center justify-center text-lg">🧪</div>
                  <h3 className="text-lg font-bold">Initial Labs Required</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trtInitialLabs.map((lab) => <LabChip key={lab} label={lab} />)}
                </div>
              </div>
              <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-light flex items-center justify-center text-lg">🔄</div>
                  <h3 className="text-lg font-bold">Follow-Up Labs (Q3 Months)</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trtFollowUpLabs.map((lab) => <LabChip key={lab} label={lab} />)}
                </div>
                <p className="text-xs text-text-muted mt-4">
                  Quarterly monitoring ensures ongoing safety and enables timely dose adjustments.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-light to-white rounded-[32px] p-8 sm:p-10 border border-orange/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-lg">🛡️</div>
                <h3 className="text-xl font-bold">Safety First</h3>
              </div>
              <SafetyList items={trtSafety} color="text-orange" />
            </div>
          </div>
        )}

        {/* ─── Female HRT Tab ─── */}
        {tab === "fhrt" && (
          <div className="space-y-8">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-light flex items-center justify-center text-lg">💊</div>
                <div>
                  <h3 className="text-xl font-bold">Estrogen Therapy</h3>
                  <p className="text-xs text-text-muted">First-line treatment options</p>
                </div>
              </div>
              <MedTable meds={fhrtEstrogen} />
            </div>

            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-light flex items-center justify-center text-lg">💜</div>
                <div>
                  <h3 className="text-xl font-bold">Progesterone Therapy</h3>
                  <p className="text-xs text-text-muted">For patients with an intact uterus</p>
                </div>
              </div>
              <MedTable meds={fhrtProgesterone} />
            </div>

            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-light flex items-center justify-center text-lg">🩺</div>
                <div>
                  <h3 className="text-xl font-bold">Vaginal Estrogen</h3>
                  <p className="text-xs text-text-muted">For genitourinary symptoms of menopause</p>
                </div>
              </div>
              <MedTable meds={fhrtVaginal} />
            </div>

            <div className="bg-gradient-to-br from-purple-light to-white rounded-[32px] p-8 sm:p-10 border border-purple/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center text-lg">⚕️</div>
                <h3 className="text-xl font-bold">Side Effects & Monitoring</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {fhrtSideEffects.map((se) => (
                  <div key={se.category} className="bg-white/60 rounded-2xl p-5 border border-border/50">
                    <h4 className="text-sm font-bold text-purple mb-2">{se.category}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{se.effects}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white/60 rounded-2xl p-5 border border-border/50">
                <p className="text-sm text-text-secondary leading-relaxed">
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
          <div className="space-y-8">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FCE7F3] flex items-center justify-center text-lg">💊</div>
                <h3 className="text-xl font-bold">Erectile Dysfunction Formulary</h3>
              </div>
              <p className="text-sm text-text-muted mb-6">
                Labs: Not required &bull; Follow-up: Every 6 months &bull; 30M+ men affected in the US alone
              </p>
              <MedTable meds={edMeds} />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-[#FCE7F3] to-white rounded-2xl p-5 border border-[#BE185D]/10">
                <h4 className="text-sm font-bold text-[#BE185D] mb-2">Recurring Revenue</h4>
                <p className="text-sm text-text-secondary">Subscription-based refills and follow-up consultations ensure predictable income.</p>
              </div>
              <div className="bg-gradient-to-br from-[#FCE7F3] to-white rounded-2xl p-5 border border-[#BE185D]/10">
                <h4 className="text-sm font-bold text-[#BE185D] mb-2">Discreet Delivery</h4>
                <p className="text-sm text-text-secondary">Direct-to-doorstep delivery increases adherence and reduces stigma barriers.</p>
              </div>
              <div className="bg-gradient-to-br from-[#FCE7F3] to-white rounded-2xl p-5 border border-[#BE185D]/10">
                <h4 className="text-sm font-bold text-[#BE185D] mb-2">Hardware Integration</h4>
                <p className="text-sm text-text-secondary">Can integrate monitoring rings and devices for blood flow and erection quality tracking.</p>
              </div>
            </div>
          </div>
        )}

        {/* ─── Premature Ejaculation Tab ─── */}
        {tab === "pe" && (
          <div className="space-y-8">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FCE7F3] flex items-center justify-center text-lg">💊</div>
                <h3 className="text-xl font-bold">Premature Ejaculation Formulary</h3>
              </div>
              <p className="text-sm text-text-muted mb-6">
                Labs: Not required &bull; Follow-up: 3–6 months &bull; Affects 1 in 3 men
              </p>
              <h4 className="text-sm font-bold text-[#BE185D] uppercase tracking-wide mb-3">SSRI & PDE5i Classes</h4>
              <MedTable meds={peMeds} />
            </div>
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FCE7F3] flex items-center justify-center text-lg">🔧</div>
                <h3 className="text-xl font-bold">Add-Ons</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {["Desensitizing wipes", "Desensitizing creams", "Desensitizing gels"].map((addon) => (
                  <div key={addon} className="flex items-center gap-2 bg-bg-alt rounded-xl px-4 py-3 border border-border text-sm text-text-secondary">
                    <span className="text-[#BE185D] font-bold">+</span>
                    {addon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── Women's Sexual Health Tab ─── */}
        {tab === "wsh" && (
          <div className="space-y-8">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FCE7F3] flex items-center justify-center text-lg">💜</div>
                <h3 className="text-xl font-bold">Women&apos;s Sexual Health Formulary</h3>
              </div>
              <p className="text-sm text-text-muted mb-6">
                Labs: Not required &bull; Follow-up: Every 6 months &bull; Up to 40% of women report sexual desire concerns
              </p>
              <MedTable meds={wshMeds} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#FCE7F3] to-white rounded-2xl p-5 border border-[#BE185D]/10">
                <h4 className="text-sm font-bold text-[#BE185D] mb-2">PT-141 (Bremelanotide)</h4>
                <p className="text-sm text-text-secondary">Acts on melanocortin receptors in the brain to boost sexual desire and arousal. Novel mechanism beyond conventional therapies.</p>
              </div>
              <div className="bg-gradient-to-br from-[#FCE7F3] to-white rounded-2xl p-5 border border-[#BE185D]/10">
                <h4 className="text-sm font-bold text-[#BE185D] mb-2">Oxytocin</h4>
                <p className="text-sm text-text-secondary">Known as the &quot;bonding hormone&quot; — supports emotional closeness, intimacy, and trust. Prescribed individually or with PT-141.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#FCE7F3] to-white rounded-[32px] p-8 sm:p-10 border border-[#BE185D]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#BE185D]/10 flex items-center justify-center text-lg">📈</div>
                <h3 className="text-xl font-bold">Market Opportunity</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                The global women&apos;s sexual health and wellness market is projected to exceed <strong className="text-text-primary">$50 billion by 2030</strong>.
                Few platforms currently offer women&apos;s libido therapies — this fills a major gap. Women&apos;s sexual health naturally
                extends into hormone therapy, menopause care, and mental health for strong cross-selling potential.
              </p>
            </div>
          </div>
        )}

        {/* ─── Longevity Tab ─── */}
        {tab === "longevity" && (
          <div className="space-y-8">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-lg">✨</div>
                <h3 className="text-xl font-bold">Anti-Aging & Longevity Formulary</h3>
              </div>
              <p className="text-sm text-text-muted mb-6">
                Labs: Not required &bull; Follow-up: Every 6 months &bull; Subscription-based model
              </p>
              <MedTable meds={longevityMeds} />
            </div>

            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-lg">🔧</div>
                <h3 className="text-xl font-bold">Add-Ons & Hardware</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {longevityAddons.map((addon) => (
                  <div key={addon} className="flex items-center gap-2 bg-bg-alt rounded-xl px-4 py-3 border border-border text-sm text-text-secondary">
                    <span className="text-[#92400E] font-bold">+</span>
                    {addon}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-[#FEF3C7] to-white rounded-2xl p-5 border border-[#92400E]/10">
                <h4 className="text-sm font-bold text-[#92400E] mb-2">Recurring Revenue</h4>
                <p className="text-sm text-text-secondary">Subscription-based 6-month follow-up model creates predictable, long-term retention.</p>
              </div>
              <div className="bg-gradient-to-br from-[#FEF3C7] to-white rounded-2xl p-5 border border-[#92400E]/10">
                <h4 className="text-sm font-bold text-[#92400E] mb-2">High Lifetime Value</h4>
                <p className="text-sm text-text-secondary">Ongoing monitoring, optimization, and compounded medications provide high-margin opportunities.</p>
              </div>
              <div className="bg-gradient-to-br from-[#FEF3C7] to-white rounded-2xl p-5 border border-[#92400E]/10">
                <h4 className="text-sm font-bold text-[#92400E] mb-2">Cross-Selling</h4>
                <p className="text-sm text-text-secondary">Natural adjacency to hormonal health, metabolic wellness, and preventive medicine programs.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FEF3C7] to-white rounded-[32px] p-8 sm:p-10 border border-[#92400E]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#92400E]/10 flex items-center justify-center text-lg">📈</div>
                <h3 className="text-xl font-bold">Market Opportunity</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
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
