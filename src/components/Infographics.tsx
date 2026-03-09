"use client";

import { TrendingUp, DollarSign, BarChart3, PieChart } from "lucide-react";

/* ── Weight Loss Efficacy ── */
const weightLossBars = [
  { label: "Placebo", value: 2.4, max: 25, color: "bg-text-muted/30", note: "STEP 1 control" },
  { label: "Semaglutide 2.4mg", value: 14.9, max: 25, color: "bg-blue", note: "STEP 1 — NEJM, 2021" },
  { label: "Tirzepatide 10mg", value: 21.4, max: 25, color: "bg-cyan", note: "SURMOUNT-1 — NEJM, 2022" },
  { label: "Tirzepatide 15mg", value: 22.5, max: 25, color: "bg-teal", note: "SURMOUNT-1 — NEJM, 2022" },
];

/* ── ROI Per $1 Invested ── */
const roiBars = [
  { label: "Weight Loss (GLP-1)", value: 3, max: 6, color: "bg-blue", source: "Calibrate / Aon" },
  { label: "Mental Health", value: 5.39, max: 6, color: "bg-purple", source: "CuraLinc (peer-reviewed)" },
  { label: "General Wellness", value: 6, max: 6, color: "bg-amber", source: "Harvard Business Review" },
];

/* ── Employer Cost of Inaction ── */
const costCards = [
  { condition: "Obesity", cost: "$1,861", unit: "/employee/yr", detail: "extra medical claims vs. healthy-weight peers", color: "text-blue", bg: "bg-blue/8" },
  { condition: "Depression", cost: "$31.4", unit: " days missed/yr", detail: "per depressed employee — 35% less productive", color: "text-purple", bg: "bg-purple/8" },
  { condition: "Menopause", cost: "$150B", unit: " globally", detail: "in productivity losses; $600B+ in healthcare", color: "text-orange", bg: "bg-orange/8" },
  { condition: "Poor Mental Health", cost: "$47.6B", unit: "/year", detail: "lost to unplanned absences in the U.S. alone", color: "text-rose", bg: "bg-rose/8" },
];

/* ── Milestone Ring ── */
function Ring({ pct, size = 100, stroke = 8, color, children }: { pct: number; size?: number; stroke?: number; color: string; children: React.ReactNode }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-border/60" />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={stroke}
          strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
          className={color}
          style={{ transition: "stroke-dashoffset 1.2s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

/* ── Patient Milestone Rings ── */
const milestones = [
  { pct: 86, label: "lost 5%+ weight", trial: "Semaglutide (STEP 1)", color: "text-blue" },
  { pct: 69, label: "lost 10%+ weight", trial: "Semaglutide (STEP 1)", color: "text-cyan" },
  { pct: 63, label: "lost 20%+ weight", trial: "Tirzepatide 15mg", color: "text-teal" },
  { pct: 80, label: "virtual = in-person", trial: "Telehealth outcomes", color: "text-purple" },
];

export function Infographics() {
  return (
    <section className="py-24 bg-bg relative">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-blue/6 text-blue rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            By the Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight mb-4">
            The data behind{" "}
            <span className="gradient-text">every program</span>
          </h2>
          <p className="text-[17px] text-text-secondary leading-relaxed">
            Real clinical trial results and employer ROI data — sourced from peer-reviewed studies and Fortune 500 case studies.
          </p>
        </div>

        {/* Row 1 — Weight Loss Chart + Patient Milestones */}
        <div className="grid lg:grid-cols-5 gap-5 mb-5">
          {/* Weight loss bar chart */}
          <div className="lg:col-span-3 card-premium p-7 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-lg bg-blue/8 flex items-center justify-center">
                <BarChart3 size={18} className="text-blue" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold">Weight Loss Efficacy</h3>
                <p className="text-[11px] text-text-muted">% body weight lost — clinical trial results</p>
              </div>
            </div>

            <div className="space-y-4">
              {weightLossBars.map((bar) => (
                <div key={bar.label}>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-[13px] font-semibold text-text-primary">{bar.label}</span>
                    <span className="text-[13px] font-bold text-text-primary">{bar.value}%</span>
                  </div>
                  <div className="h-7 bg-bg-alt rounded-lg overflow-hidden relative">
                    <div
                      className={`h-full ${bar.color} rounded-lg flex items-center justify-end pr-2.5`}
                      style={{ width: `${(bar.value / bar.max) * 100}%` }}
                    >
                      {bar.value > 5 && (
                        <span className="text-[10px] text-white font-medium">{bar.value}%</span>
                      )}
                    </div>
                  </div>
                  <p className="text-[10px] text-text-muted mt-0.5">{bar.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Patient milestone rings */}
          <div className="lg:col-span-2 card-premium p-7 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-lg bg-teal/8 flex items-center justify-center">
                <PieChart size={18} className="text-teal" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold">Patient Milestones</h3>
                <p className="text-[11px] text-text-muted">% of patients achieving key outcomes</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {milestones.map((m) => (
                <div key={m.label} className="flex flex-col items-center text-center">
                  <Ring pct={m.pct} color={m.color}>
                    <span className="text-lg font-bold">{m.pct}%</span>
                  </Ring>
                  <p className="text-[12px] font-semibold text-text-primary mt-2 leading-tight">{m.label}</p>
                  <p className="text-[10px] text-text-muted mt-0.5">{m.trial}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 — ROI Chart + Cost of Inaction */}
        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {/* ROI per $1 */}
          <div className="card-premium p-7 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-lg bg-amber/8 flex items-center justify-center">
                <TrendingUp size={18} className="text-amber" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold">Employer ROI Per $1 Invested</h3>
                <p className="text-[11px] text-text-muted">Based on peer-reviewed studies and employer case data</p>
              </div>
            </div>

            <div className="space-y-5">
              {roiBars.map((bar) => (
                <div key={bar.label}>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-[13px] font-semibold text-text-primary">{bar.label}</span>
                    <span className="text-[15px] font-bold text-text-primary">${bar.value.toFixed(2)}</span>
                  </div>
                  <div className="h-8 bg-bg-alt rounded-lg overflow-hidden relative">
                    <div
                      className={`h-full ${bar.color} rounded-lg flex items-center`}
                      style={{ width: `${(bar.value / bar.max) * 100}%` }}
                    >
                      <span className="text-[11px] text-white font-semibold ml-3">${bar.value.toFixed(2)} return</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-text-muted mt-0.5">Source: {bar.source}</p>
                </div>
              ))}

              <div className="bg-bg-alt rounded-xl px-4 py-3 flex items-start gap-2 mt-2">
                <DollarSign size={16} className="text-teal shrink-0 mt-0.5" strokeWidth={2} />
                <p className="text-[12px] text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">95% of companies</strong> tracking wellness ROI report positive returns — nearly two-thirds see at least $2 back per $1 spent.
                  <span className="text-text-muted"> — Wellhub, 2024</span>
                </p>
              </div>
            </div>
          </div>

          {/* Cost of inaction */}
          <div className="card-premium p-7 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-lg bg-rose/8 flex items-center justify-center">
                <DollarSign size={18} className="text-rose" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold">Cost of Inaction</h3>
                <p className="text-[11px] text-text-muted">What untreated conditions cost employers</p>
              </div>
            </div>

            <div className="space-y-3">
              {costCards.map((c) => (
                <div key={c.condition} className={`rounded-xl px-4 py-3.5 border border-border/50 ${c.bg}`}>
                  <div className="flex items-baseline justify-between mb-0.5">
                    <span className="text-[13px] font-bold text-text-primary">{c.condition}</span>
                    <span className={`text-lg font-bold ${c.color}`}>{c.cost}<span className="text-[11px] font-medium text-text-muted">{c.unit}</span></span>
                  </div>
                  <p className="text-[11px] text-text-muted">{c.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-bg-alt rounded-xl px-4 py-3 mt-4">
              <p className="text-[12px] text-text-secondary leading-relaxed">
                <strong className="text-text-primary">$1 trillion per year</strong> lost globally to depression and anxiety alone.
                <span className="text-text-muted"> — World Health Organization</span>
              </p>
            </div>
          </div>
        </div>

        {/* Row 3 — Coverage gap visual */}
        <div className="card-premium p-7 sm:p-8">
          <h3 className="text-center text-[15px] font-bold mb-6">Insurance Coverage Gap — What Traditional Benefits Miss</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { program: "GLP-1 Weight Loss", covered: 43, label: "43% of large employers cover", trend: "up from 28% in 2024", color: "text-blue", trackColor: "bg-blue" },
              { program: "Mental Health (fast access)", covered: 5, label: "~5% EAP utilization", trend: "vs. 80%+ with telehealth-first", color: "text-purple", trackColor: "bg-purple" },
              { program: "Hormone Therapy", covered: 12, label: "~12% get adequate coverage", trend: "39% of men wait until severe", color: "text-orange", trackColor: "bg-orange" },
              { program: "Longevity / NAD+", covered: 0, label: "0% insurance coverage", trend: "$120B+ market by 2030", color: "text-amber", trackColor: "bg-amber" },
            ].map((g) => (
              <div key={g.program} className="text-center">
                <Ring pct={g.covered} size={88} stroke={7} color={g.color}>
                  <span className={`text-base font-bold ${g.color}`}>{g.covered}%</span>
                </Ring>
                <p className="text-[12px] font-bold text-text-primary mt-3 leading-tight">{g.program}</p>
                <p className="text-[10px] text-text-muted mt-1 leading-snug">{g.label}</p>
                <p className="text-[10px] text-text-muted leading-snug">{g.trend}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[13px] text-text-secondary mt-6">
            JoeyMed fills the gaps that traditional insurance leaves wide open — giving your employees access to the care that actually moves the needle.
          </p>
        </div>
      </div>
    </section>
  );
}
