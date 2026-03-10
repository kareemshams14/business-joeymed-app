"use client";

import { useState, useMemo } from "react";
import {
  Calculator,
  DollarSign,
  TrendingDown,
  Users,
  ArrowRight,
  Check,
  Info,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Industry benchmark data (per-employee, per-year)                  */
/* ------------------------------------------------------------------ */
const PROGRAMS = [
  {
    id: "weight_loss",
    label: "GLP-1 Weight Loss",
    savingsPerEmployee: 2_340,
    description: "Avg. reduction in obesity-related claims",
    source: "Milliman, 2024",
  },
  {
    id: "trt",
    label: "TRT / Male Hormone",
    savingsPerEmployee: 1_120,
    description: "Reduced fatigue, presenteeism & sick days",
    source: "J Clin Endocrinol, 2023",
  },
  {
    id: "hrt",
    label: "Female HRT",
    savingsPerEmployee: 1_450,
    description: "Menopause-related productivity & retention",
    source: "Mayo Clinic, 2023",
  },
  {
    id: "longevity",
    label: "Anti-Aging & Longevity",
    savingsPerEmployee: 980,
    description: "Preventive health reduces downstream costs",
    source: "RAND Corp, 2023",
  },
];

const EMPLOYEE_RANGES = [
  { label: "100", value: 100 },
  { label: "250", value: 250 },
  { label: "500", value: 500 },
  { label: "1,000", value: 1_000 },
  { label: "2,500", value: 2_500 },
  { label: "5,000", value: 5_000 },
];

const PARTICIPATION_RATE = 0.18; // conservative 18% enrollment
const AVG_HEALTHCARE_COST = 15_799; // KFF 2024 employer avg

function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);
}

export function SavingsCalculator() {
  const [employees, setEmployees] = useState(500);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>(["weight_loss"]);
  const [participation, setParticipation] = useState(PARTICIPATION_RATE);

  function toggleProgram(id: string) {
    setSelectedPrograms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  }

  const results = useMemo(() => {
    const enrolledEmployees = Math.round(employees * participation);

    const savingsPerEnrolled = PROGRAMS.filter((p) =>
      selectedPrograms.includes(p.id)
    ).reduce((sum, p) => sum + p.savingsPerEmployee, 0);

    const totalAnnualSavings = enrolledEmployees * savingsPerEnrolled;
    const currentSpend = employees * AVG_HEALTHCARE_COST;
    const savingsPercent = currentSpend > 0 ? (totalAnnualSavings / currentSpend) * 100 : 0;

    // Conservative ROI: assume program cost is ~40% of savings
    const programCost = totalAnnualSavings * 0.4;
    const netSavings = totalAnnualSavings - programCost;
    const roi = programCost > 0 ? (netSavings / programCost) * 100 : 0;

    // Absenteeism: avg 5 days/yr lost to health issues, reduce by 40% for enrolled
    const sickDaysAvoided = Math.round(enrolledEmployees * 5 * 0.4);

    return {
      enrolledEmployees,
      totalAnnualSavings,
      netSavings,
      savingsPercent,
      roi,
      sickDaysAvoided,
      currentSpend,
      savingsPerEnrolled,
    };
  }, [employees, selectedPrograms, participation]);

  const hasPrograms = selectedPrograms.length > 0;

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
        {/* ---- LEFT: Inputs ---- */}
        <div className="space-y-8">
          {/* Employee count */}
          <div className="bg-white rounded-3xl p-8 sm:p-9 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue/8 flex items-center justify-center">
                <Users size={20} className="text-blue" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold">Total Employees</h3>
                <p className="text-[12px] text-text-muted">Full-time headcount</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {EMPLOYEE_RANGES.map((r) => (
                <button
                  key={r.value}
                  onClick={() => setEmployees(r.value)}
                  className={`px-4 py-2.5 rounded-xl text-[13px] font-semibold border transition-all ${
                    employees === r.value
                      ? "border-blue/40 bg-blue/6 text-blue"
                      : "border-border hover:border-blue/30 hover:bg-blue/4 text-text-secondary"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-[12px] text-text-muted mb-2">
                Or enter a custom number
              </label>
              <input
                type="number"
                min={10}
                max={100000}
                value={employees}
                onChange={(e) => setEmployees(Math.max(10, Number(e.target.value)))}
                className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[14px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition"
              />
            </div>
          </div>

          {/* Program selection */}
          <div className="bg-white rounded-3xl p-8 sm:p-9 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                <Calculator size={20} className="text-teal" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold">Select Programs</h3>
                <p className="text-[12px] text-text-muted">Choose which programs to model</p>
              </div>
            </div>

            <div className="space-y-3">
              {PROGRAMS.map((prog) => {
                const active = selectedPrograms.includes(prog.id);
                return (
                  <button
                    key={prog.id}
                    onClick={() => toggleProgram(prog.id)}
                    className={`w-full text-left px-5 py-4 rounded-2xl border transition-all flex items-center gap-4 ${
                      active
                        ? "border-blue/30 bg-blue/4"
                        : "border-border hover:border-blue/20 hover:bg-blue/2"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                        active ? "border-blue bg-blue" : "border-border"
                      }`}
                    >
                      {active && <Check size={12} className="text-white" strokeWidth={3} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] font-semibold">{prog.label}</div>
                      <div className="text-[12px] text-text-muted">{prog.description}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[14px] font-bold text-teal">
                        {formatCurrency(prog.savingsPerEmployee)}
                      </div>
                      <div className="text-[10px] text-text-muted">per enrolled / yr</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Participation rate */}
          <div className="bg-white rounded-3xl p-8 sm:p-9 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center">
                <TrendingDown size={20} className="text-purple" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold">Expected Participation</h3>
                <p className="text-[12px] text-text-muted">
                  Typical enrollment is 15–25% of eligible employees
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="range"
                min={5}
                max={50}
                step={1}
                value={Math.round(participation * 100)}
                onChange={(e) => setParticipation(Number(e.target.value) / 100)}
                className="flex-1 h-2 bg-bg-alt rounded-full appearance-none cursor-pointer accent-blue"
              />
              <span className="text-2xl font-bold text-blue w-16 text-right">
                {Math.round(participation * 100)}%
              </span>
            </div>
            <div className="flex justify-between text-[11px] text-text-muted mt-2 px-0.5">
              <span>5%</span>
              <span>50%</span>
            </div>
          </div>
        </div>

        {/* ---- RIGHT: Results panel ---- */}
        <div className="lg:sticky lg:top-[88px] space-y-5">
          {/* Main savings card */}
          <div className="relative bg-navy rounded-3xl p-8 sm:p-9 overflow-hidden">
            <div className="absolute inset-0 bg-dots-dark" />
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-teal/8 rounded-full blur-[60px]" />

            <div className="relative">
              <span className="inline-block px-3 py-1 bg-white/[0.06] text-white/50 rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-5 border border-white/[0.06]">
                Estimated Annual Savings
              </span>

              <div className="mb-6">
                <div className="text-[48px] sm:text-[56px] font-bold text-white leading-none tracking-tight">
                  {hasPrograms ? formatCurrency(results.totalAnnualSavings) : "$0"}
                </div>
                <p className="text-[13px] text-white/40 mt-2">
                  gross savings per year
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="card-glass p-4">
                  <div className="text-[20px] font-bold text-teal">
                    {hasPrograms ? formatCurrency(results.netSavings) : "$0"}
                  </div>
                  <div className="text-[11px] text-white/40 mt-0.5">Net savings</div>
                </div>
                <div className="card-glass p-4">
                  <div className="text-[20px] font-bold text-blue-glow">
                    {hasPrograms ? `${results.roi.toFixed(0)}%` : "0%"}
                  </div>
                  <div className="text-[11px] text-white/40 mt-0.5">Return on investment</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="card-glass p-4">
                  <div className="text-[20px] font-bold text-amber">
                    {hasPrograms ? formatNumber(results.enrolledEmployees) : "0"}
                  </div>
                  <div className="text-[11px] text-white/40 mt-0.5">Enrolled employees</div>
                </div>
                <div className="card-glass p-4">
                  <div className="text-[20px] font-bold text-rose">
                    {hasPrograms ? formatNumber(results.sickDaysAvoided) : "0"}
                  </div>
                  <div className="text-[11px] text-white/40 mt-0.5">Sick days avoided</div>
                </div>
              </div>

              <a
                href="/#contact"
                className="btn-primary w-full flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[14px]"
              >
                Get Your Custom Report
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Breakdown card */}
          <div className="bg-white rounded-3xl p-7 border border-border">
            <h4 className="text-[13px] font-bold mb-4 flex items-center gap-2">
              <DollarSign size={14} className="text-blue" />
              Savings Breakdown
            </h4>

            {hasPrograms ? (
              <div className="space-y-3">
                {PROGRAMS.filter((p) => selectedPrograms.includes(p.id)).map(
                  (prog) => {
                    const progSavings =
                      results.enrolledEmployees * prog.savingsPerEmployee;
                    const pctOfTotal =
                      results.totalAnnualSavings > 0
                        ? (progSavings / results.totalAnnualSavings) * 100
                        : 0;
                    return (
                      <div key={prog.id}>
                        <div className="flex items-center justify-between text-[13px] mb-1.5">
                          <span className="font-medium">{prog.label}</span>
                          <span className="font-bold">{formatCurrency(progSavings)}</span>
                        </div>
                        <div className="h-2 bg-bg-alt rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue to-cyan rounded-full transition-all duration-500"
                            style={{ width: `${pctOfTotal}%` }}
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            ) : (
              <p className="text-[13px] text-text-muted">
                Select at least one program to see your breakdown.
              </p>
            )}
          </div>

          {/* Methodology note */}
          <div className="flex items-start gap-3 px-5 py-4 bg-blue/4 rounded-2xl border border-blue/10">
            <Info size={16} className="text-blue mt-0.5 shrink-0" />
            <p className="text-[11px] text-text-secondary leading-relaxed">
              Estimates based on published research from KFF, Milliman, Mayo Clinic &
              RAND Corp. Actual savings depend on population health profile, plan
              design, and program utilization. We&apos;ll provide a custom analysis
              during your consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
