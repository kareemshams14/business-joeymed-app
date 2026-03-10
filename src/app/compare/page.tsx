import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Check,
  X,
  ArrowRight,
  Clock,
  Building2,
  Stethoscope,
  BarChart3,
  Truck,
  HeartPulse,
  Smartphone,
  ShieldCheck,
  DollarSign,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "JoeyMed vs. Traditional Health Plans — Comparison",
  description:
    "See how JoeyMed's employer-sponsored clinical programs compare to traditional group health plans. Side-by-side comparison of cost, speed, outcomes, and employee experience.",
  openGraph: {
    title: "JoeyMed vs. Traditional Health Plans",
    description:
      "Side-by-side comparison of JoeyMed vs. traditional employer health benefits.",
    url: "https://business.joeymed.com/compare",
    siteName: "JoeyMed for Business",
    type: "website",
  },
};

const categories = [
  {
    category: "Access & Speed",
    icon: Clock,
    iconColor: "text-blue-glow",
    iconBg: "bg-blue/10",
    rows: [
      {
        feature: "Time to first appointment",
        joeymed: "24–48 hours",
        traditional: "2–6 weeks",
      },
      {
        feature: "At-home lab testing",
        joeymed: true,
        traditional: false,
      },
      {
        feature: "Prescription delivery to door",
        joeymed: true,
        traditional: false,
      },
      {
        feature: "Available in all 50 states",
        joeymed: true,
        traditional: "Network-dependent",
      },
    ],
  },
  {
    category: "Clinical Programs",
    icon: Stethoscope,
    iconColor: "text-teal",
    iconBg: "bg-teal/10",
    rows: [
      {
        feature: "GLP-1 weight management",
        joeymed: true,
        traditional: "Rarely covered",
      },
      {
        feature: "TRT / Male hormone therapy",
        joeymed: true,
        traditional: "Specialist referral required",
      },
      {
        feature: "Female HRT (menopause)",
        joeymed: true,
        traditional: "Limited coverage",
      },
      {
        feature: "Anti-aging & longevity protocols",
        joeymed: true,
        traditional: false,
      },
      {
        feature: "Clinician-supervised care plans",
        joeymed: true,
        traditional: "Varies by provider",
      },
    ],
  },
  {
    category: "Employee Experience",
    icon: Smartphone,
    iconColor: "text-purple",
    iconBg: "bg-purple/10",
    rows: [
      {
        feature: "Dedicated mobile app",
        joeymed: true,
        traditional: false,
      },
      {
        feature: "24/7 clinical support",
        joeymed: true,
        traditional: "Business hours only",
      },
      {
        feature: "Weekly check-ins & coaching",
        joeymed: true,
        traditional: false,
      },
      {
        feature: "No PCP referral needed",
        joeymed: true,
        traditional: false,
      },
      {
        feature: "Discreet, stigma-free enrollment",
        joeymed: true,
        traditional: false,
      },
    ],
  },
  {
    category: "Employer Tools",
    icon: BarChart3,
    iconColor: "text-amber",
    iconBg: "bg-amber/10",
    rows: [
      {
        feature: "Population health dashboard",
        joeymed: true,
        traditional: "Basic claims data",
      },
      {
        feature: "Real-time engagement metrics",
        joeymed: true,
        traditional: false,
      },
      {
        feature: "ROI & savings reporting",
        joeymed: true,
        traditional: false,
      },
      {
        feature: "HRIS / benefits integration",
        joeymed: true,
        traditional: "Manual process",
      },
      {
        feature: "Dedicated account manager",
        joeymed: true,
        traditional: "Broker-dependent",
      },
    ],
  },
  {
    category: "Cost & Implementation",
    icon: DollarSign,
    iconColor: "text-teal",
    iconBg: "bg-teal/10",
    rows: [
      {
        feature: "Setup fees",
        joeymed: "None",
        traditional: "Varies ($5K–$50K+)",
      },
      {
        feature: "Launch timeline",
        joeymed: "Under 2 weeks",
        traditional: "3–6 months",
      },
      {
        feature: "Per-employee pricing",
        joeymed: "Transparent, flat rate",
        traditional: "Complex, variable",
      },
      {
        feature: "Minimum company size",
        joeymed: "50 employees",
        traditional: "Often 100+",
      },
    ],
  },
  {
    category: "Compliance & Security",
    icon: ShieldCheck,
    iconColor: "text-rose",
    iconBg: "bg-rose/10",
    rows: [
      {
        feature: "HIPAA compliant",
        joeymed: true,
        traditional: true,
      },
      {
        feature: "LegitScript verified",
        joeymed: true,
        traditional: "Not applicable",
      },
      {
        feature: "SOC 2 compliant",
        joeymed: true,
        traditional: "Varies",
      },
      {
        feature: "Licensed providers in all states",
        joeymed: true,
        traditional: "Network-dependent",
      },
    ],
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center">
        <Check size={14} className="text-teal" strokeWidth={2.5} />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="w-6 h-6 rounded-full bg-rose/10 flex items-center justify-center">
        <X size={14} className="text-rose" strokeWidth={2.5} />
      </div>
    );
  }
  return <span className="text-[13px]">{value}</span>;
}

export default function ComparePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[100px]" />

        <div className="relative max-w-[780px] mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 bg-white/[0.06] text-white/50 rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 border border-white/[0.06]">
            Comparison
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight tracking-tight text-white mb-4">
            JoeyMed vs.{" "}
            <span className="gradient-text-light">Traditional Health Plans</span>
          </h1>
          <p className="text-[17px] text-white/40 leading-relaxed max-w-[600px] mx-auto">
            Traditional group health plans weren&apos;t designed for modern
            clinical programs like GLP-1, HRT, and longevity medicine. See how
            JoeyMed stacks up.
          </p>
        </div>
      </section>

      {/* Cost Crisis Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-border">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-rose/6 text-rose rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
              The Cost Crisis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight mb-3">
              What happens <span className="gradient-text">without</span> a managed program
            </h2>
            <p className="text-[15px] text-text-secondary leading-relaxed">
              Employers adding GLP-1 coverage without a clinical management
              strategy are seeing costs spiral out of control.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {[
              {
                org: "Blue Cross Blue Shield MA",
                stat: "$400M operating loss",
                detail:
                  "Worst financial year on record. GLP-1 drugs drove $300M in costs — 20% of total pharmacy spend, double the prior year.",
                color: "text-rose",
                bgColor: "bg-rose/10",
              },
              {
                org: "Colorado State Workers",
                stat: "Costs quadrupled",
                detail:
                  "GLP-1 spending quadrupled from 2023 to 2024, with costs doubling every 6 months. Budget projections became impossible.",
                color: "text-amber",
                bgColor: "bg-amber/10",
              },
              {
                org: "North Carolina State Plan",
                stat: "2x premium increase needed",
                detail:
                  "Would require doubling insurance premiums to sustain GLP-1 coverage. Plan is now reconsidering its coverage policy.",
                color: "text-purple",
                bgColor: "bg-purple/10",
              },
              {
                org: "Prime Therapeutics (PBM)",
                stat: "+$7,000 per member",
                detail:
                  "Average healthcare costs rose $7,000 in the first year after GLP-1 initiation. No medical cost offsets were observed.",
                color: "text-blue",
                bgColor: "bg-blue/10",
              },
            ].map((item) => (
              <div
                key={item.org}
                className="bg-bg rounded-2xl p-6 border border-border"
              >
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={14} className={item.color} />
                  <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                    {item.org}
                  </span>
                </div>
                <div className={`text-xl font-bold ${item.color} mb-2`}>
                  {item.stat}
                </div>
                <p className="text-[13px] text-text-secondary leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-teal/4 border border-teal/10 rounded-2xl p-6 text-center">
            <p className="text-[14px] text-text-secondary leading-relaxed mb-1">
              <strong className="text-text-primary">
                The alternative: managed carve-out programs
              </strong>{" "}
              like JoeyMed deliver 10–12% weight loss, manage 50% of patients
              without GLP-1s, and report 3:1 ROI.
            </p>
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12403326/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-teal mt-2 hover:underline"
            >
              Read the full research (PMC / NIH)
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </section>

      {/* Comparison tables */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-[900px] mx-auto px-6 space-y-10">
          {categories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white rounded-3xl border border-border overflow-hidden"
            >
              {/* Category header */}
              <div className="px-7 py-5 border-b border-border/60 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl ${cat.iconBg} flex items-center justify-center`}
                >
                  <cat.icon size={20} className={cat.iconColor} strokeWidth={1.5} />
                </div>
                <h2 className="text-[16px] font-bold">{cat.category}</h2>
              </div>

              {/* Column headers */}
              <div className="grid grid-cols-[1fr_130px_130px] sm:grid-cols-[1fr_160px_160px] px-7 py-3 border-b border-border/40 bg-bg-alt/50">
                <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Feature
                </span>
                <span className="text-[11px] font-bold text-blue uppercase tracking-wider text-center">
                  JoeyMed
                </span>
                <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider text-center">
                  Traditional
                </span>
              </div>

              {/* Rows */}
              {cat.rows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[1fr_130px_130px] sm:grid-cols-[1fr_160px_160px] px-7 py-4 items-center ${
                    i < cat.rows.length - 1 ? "border-b border-border/30" : ""
                  }`}
                >
                  <span className="text-[13px] font-medium text-text-primary">
                    {row.feature}
                  </span>
                  <div className="flex justify-center">
                    <CellValue value={row.joeymed} />
                  </div>
                  <div className="flex justify-center text-text-secondary">
                    <CellValue value={row.traditional} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <div className="flex justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue/8 flex items-center justify-center">
              <Building2 size={24} className="text-blue" strokeWidth={1.5} />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center">
              <HeartPulse size={24} className="text-teal" strokeWidth={1.5} />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-purple/10 flex items-center justify-center">
              <Truck size={24} className="text-purple" strokeWidth={1.5} />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Ready to <span className="gradient-text">make the switch?</span>
          </h2>
          <p className="text-[15px] text-text-secondary leading-relaxed mb-8">
            Join the growing number of employers upgrading to clinically
            supervised health programs. No setup fees, launch in under 2 weeks.
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
