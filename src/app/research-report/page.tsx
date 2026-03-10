import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  AlertTriangle,
  TrendingUp,
  Scale,
  DollarSign,
  Users,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "GLP-1 Employer Research Report 2025 — JoeyMed for Business",
  description:
    "Peer-reviewed data on the GLP-1 cost crisis for employers. BCBS $400M loss, Colorado 4x cost increase, and why managed carve-out programs deliver 3:1 ROI.",
  openGraph: {
    title: "GLP-1 Employer Research Report 2025",
    description:
      "Peer-reviewed data on the GLP-1 cost crisis and why managed programs deliver 3:1 ROI for employers.",
    url: "https://business.joeymed.com/research-report",
    siteName: "JoeyMed for Business",
    type: "website",
  },
};

export default function ResearchReportPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px]" />

        <div className="relative max-w-[720px] mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 bg-white/[0.06] text-white/50 rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 border border-white/[0.06]">
            Research Report
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight text-white mb-4">
            The GLP-1 Cost Crisis:{" "}
            <span className="gradient-text-light">
              What Employers Need to Know in 2025
            </span>
          </h1>
          <p className="text-[17px] text-white/40 leading-relaxed max-w-[560px] mx-auto mb-6">
            A summary of peer-reviewed findings from the Journal of Comparative
            Effectiveness Research on affordable access to GLP-1 obesity
            medications for U.S. employers.
          </p>
          <div className="inline-flex items-center gap-2 card-glass px-4 py-2.5">
            <FileText size={14} className="text-white/40" />
            <span className="text-[12px] text-white/50">
              Based on{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12403326/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-glow underline underline-offset-2"
              >
                Pearson, Whaley &amp; Emond (2025)
              </a>{" "}
              — PMC / NIH
            </span>
          </div>
        </div>
      </section>

      {/* Print-friendly report body */}
      <section className="py-16 sm:py-20 bg-bg print:py-8 print:bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          {/* Section 1: The Scale of the Problem */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose/10 flex items-center justify-center">
                <AlertTriangle
                  size={20}
                  className="text-rose"
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-xl font-bold">
                The Scale of the Problem
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-border p-7 mb-5">
              <p className="text-[15px] text-text-secondary leading-relaxed mb-5">
                Over 100 million U.S. adults qualify for GLP-1 medications
                based on BMI criteria. If coverage expands without cost
                controls, national spending on these drugs alone could exceed{" "}
                <strong className="text-text-primary">
                  $100 billion annually within 5 years
                </strong>
                .
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    stat: "$7,401–$9,191",
                    label: "Annual net price per patient for GLP-1s",
                  },
                  {
                    stat: "100M+",
                    label:
                      "U.S. adults eligible (40%+ have obesity)",
                  },
                  {
                    stat: "33%",
                    label: "Of health plans currently cover GLP-1s for obesity",
                  },
                  {
                    stat: "+19%",
                    label: "Additional employers considering coverage",
                  },
                ].map((item) => (
                  <div
                    key={item.stat}
                    className="bg-bg rounded-xl p-4 border border-border/60"
                  >
                    <div className="text-lg font-bold text-rose mb-0.5">
                      {item.stat}
                    </div>
                    <div className="text-[12px] text-text-muted">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Employer Horror Stories */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center">
                <DollarSign
                  size={20}
                  className="text-amber"
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-xl font-bold">
                Documented Employer Impacts
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  org: "Blue Cross Blue Shield Massachusetts",
                  impact: "$400M operating loss (2024)",
                  detail:
                    "Worst financial performance on record. GLP-1 drugs drove more than $300 million in costs, representing 20% of total pharmacy costs and double the prior year.",
                },
                {
                  org: "Colorado State Workers Program",
                  impact: "Spending quadrupled (2023–2024)",
                  detail:
                    "GLP-1 costs doubled every 6 months, making budget projections impossible. The state is now reconsidering its coverage approach.",
                },
                {
                  org: "North Carolina State Employee Health Plan",
                  impact: "Would require doubling premiums",
                  detail:
                    "To sustain GLP-1 coverage without a managed approach, the plan estimated insurance premiums would need to double — an untenable position.",
                },
                {
                  org: "Prime Therapeutics (Large PBM)",
                  impact: "+$7,000 per member in year one",
                  detail:
                    "Average healthcare costs rose approximately $7,000 in the first year after GLP-1 initiation, with no medical cost offsets observed. Per-member-per-month costs increased more than tenfold from January 2023 to December 2024.",
                },
                {
                  org: "CalPERS (California)",
                  impact: "Cost estimates fluctuated wildly",
                  detail:
                    "Per-member-per-month cost estimates swung from $3 to $20 to $16, making financial planning nearly impossible for administrators.",
                },
              ].map((item) => (
                <div
                  key={item.org}
                  className="bg-white rounded-2xl border border-border p-6"
                >
                  <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1">
                    {item.org}
                  </div>
                  <div className="text-[16px] font-bold text-rose mb-2">
                    {item.impact}
                  </div>
                  <p className="text-[13px] text-text-secondary leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: The Solution */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                <TrendingUp
                  size={20}
                  className="text-teal"
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-xl font-bold">
                The Solution: Managed Carve-Out Programs
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-border p-7 mb-5">
              <p className="text-[15px] text-text-secondary leading-relaxed mb-5">
                The research identifies managed carve-out programs — like
                JoeyMed — as the most effective approach for employers who want
                clinical results without uncontrolled costs.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Scale,
                    title: "10–12% Average Weight Loss",
                    desc: "Connecticut's state employee program (Flyte Health) achieved 10% average weight loss across all participants, with GLP-1 users achieving 12%. Non-GLP-1 patients still lost 4% on lower-cost alternatives.",
                    color: "text-teal",
                    bgColor: "bg-teal/10",
                  },
                  {
                    icon: DollarSign,
                    title: "50% Managed Without GLP-1s",
                    desc: "Half of participants were successfully managed on non-GLP-1 medications — phentermine/topiramate at ~$1,465/yr vs. $9,000+ for GLP-1s. Step therapy is \"clinically reasonable\" per expert consensus.",
                    color: "text-blue",
                    bgColor: "bg-blue/10",
                  },
                  {
                    icon: TrendingUp,
                    title: "3:1 Return on Investment",
                    desc: "Carve-out programs report a 3-to-1 return on every dollar invested. By managing the clinical pathway, employers get outcomes without the open-ended cost exposure.",
                    color: "text-purple",
                    bgColor: "bg-purple/10",
                  },
                  {
                    icon: Users,
                    title: "Higher Adherence & Engagement",
                    desc: "Unmanaged GLP-1 coverage sees only 14.3% of patients remaining on therapy at 2 years. Managed programs with weekly check-ins and clinical support dramatically improve adherence and outcomes.",
                    color: "text-amber",
                    bgColor: "bg-amber/10",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center shrink-0`}
                    >
                      <item.icon
                        size={18}
                        className={item.color}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[13px] text-text-secondary leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Coverage Landscape */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center">
                <Users
                  size={20}
                  className="text-blue"
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-xl font-bold">
                The Coverage Landscape (2025)
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-border p-7">
              <div className="space-y-3">
                {[
                  "67% of large employers (17.1M employees) cover GLP-1s — another 19% are considering it",
                  "At least 5 state plans (WV, NC, DE, CO, NM) have rescinded or are reconsidering coverage due to cost",
                  "Only 14.3% of commercially insured patients remain on GLP-1 therapy at 2 years without clinical support",
                  "Less than 1% of ACA marketplace plans include obesity-only approved GLP-1 drugs",
                  "13 state Medicaid programs now cover GLP-1s, adding further cost pressure to the system",
                  "2+ million Americans received compounded GLP-1 treatments — now under FDA enforcement transition",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-blue shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <p className="text-[13px] text-text-secondary leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Source citation */}
          <div className="bg-bg-alt rounded-2xl border border-border p-6 mb-14">
            <h3 className="text-[13px] font-bold mb-3 flex items-center gap-2">
              <FileText size={14} className="text-text-muted" />
              Source
            </h3>
            <p className="text-[13px] text-text-secondary leading-relaxed mb-3">
              Pearson SD, Whaley CM, Emond SK. &ldquo;Affordable access to
              GLP-1 obesity medications: strategies to guide market action and
              policy solutions in the US.&rdquo;{" "}
              <em>Journal of Comparative Effectiveness Research</em>, July
              2025. Published by Future Medicine.
            </p>
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12403326/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue hover:underline"
            >
              Read the full paper on PMC / NIH
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-border print:hidden">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Don&apos;t let GLP-1 costs{" "}
            <span className="gradient-text">spiral out of control</span>
          </h2>
          <p className="text-[15px] text-text-secondary leading-relaxed mb-8">
            JoeyMed delivers the clinical outcomes your employees need with the
            cost management your CFO demands. Let&apos;s build a program that
            works for your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/#contact"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[14px]"
            >
              Request a Demo
              <ArrowRight size={16} />
            </a>
            <a
              href="/savings-calculator"
              className="btn-secondary inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-[14px]"
            >
              Calculate Your Savings
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
