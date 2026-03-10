import {
  TrendingDown, Zap, Heart, Users, Shield, Smile,
} from "lucide-react";

const impacts = [
  {
    icon: TrendingDown,
    stat: "$400M",
    title: "BCBS MA Lost to GLP-1 Costs",
    desc: "Blue Cross Blue Shield Massachusetts posted a $400M operating loss in 2024 — GLP-1 drugs alone drove $300M of that, representing 20% of total pharmacy costs. Managed programs like ours prevent this.",
    color: "text-teal",
    bgColor: "bg-teal/10",
    source: "Pearson et al., J Comp Eff Res, 2025",
  },
  {
    icon: Zap,
    stat: "67%",
    title: "Of Large Employers Cover GLP-1s",
    desc: "Two-thirds of large employers (17.1M employees) now cover GLP-1 medications, with another 19% considering it. If you don\u2019t offer it, your competitors do.",
    color: "text-blue-glow",
    bgColor: "bg-blue/10",
    source: "Pearson et al., J Comp Eff Res, 2025",
  },
  {
    icon: Heart,
    stat: "10–12%",
    title: "Average Weight Loss Achieved",
    desc: "Connecticut\u2019s state employee carve-out program achieved 10% average weight loss — 12% for GLP-1 users — with 50% of patients managed on lower-cost alternatives.",
    color: "text-rose",
    bgColor: "bg-rose/10",
    source: "Flyte Health / CT State, 2025",
  },
  {
    icon: Users,
    stat: "3:1",
    title: "Return on Investment",
    desc: "Employer carve-out programs report a 3-to-1 ROI on clinical health investments. Managed programs reduce claims, absenteeism, and presenteeism simultaneously.",
    color: "text-purple",
    bgColor: "bg-purple/10",
    source: "Pearson et al., J Comp Eff Res, 2025",
  },
  {
    icon: Smile,
    stat: "50%",
    title: "Managed Without GLP-1s",
    desc: "Clinical programs with step therapy manage half of patients on lower-cost medications — phentermine/topiramate at $1,465/yr vs. $9,000+ for GLP-1s — delivering results at a fraction of the cost.",
    color: "text-amber",
    bgColor: "bg-amber/10",
    source: "Pearson et al., J Comp Eff Res, 2025",
  },
  {
    icon: Shield,
    stat: "$100B+",
    title: "Projected Annual GLP-1 Spend",
    desc: "U.S. GLP-1 spending could exceed $100 billion annually within 5 years. Without managed programs, employer costs quadruple — Colorado\u2019s state plan saw exactly that from 2023 to 2024.",
    color: "text-cyan",
    bgColor: "bg-cyan/10",
    source: "Pearson et al., J Comp Eff Res, 2025",
  },
];

export function WhyInvest() {
  return (
    <section className="relative py-28 bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-dots-dark" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal/4 rounded-full blur-[100px]" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-white/[0.06] text-white/50 rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 border border-white/[0.06]">
            The Business Case
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight text-white mb-4">
            Healthy employees are your{" "}
            <span className="gradient-text-light">greatest ROI</span>
          </h2>
          <p className="text-[17px] text-white/40 leading-relaxed">
            Investing in workforce health isn&apos;t just the right thing to do — it&apos;s
            the smartest business decision you can make. Here&apos;s why leading
            employers are prioritizing clinical health programs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {impacts.map((item) => (
            <div key={item.title} className="card-glass p-7 group">
              <div className={`w-11 h-11 rounded-xl ${item.bgColor} flex items-center justify-center mb-5`}>
                <item.icon size={22} className={item.color} strokeWidth={1.5} />
              </div>
              <div className={`text-2xl font-bold ${item.color} mb-1`}>
                {item.stat}
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-[13px] text-white/40 leading-relaxed">
                {item.desc}
              </p>
              {"source" in item && (
                <p className="text-[10px] text-white/20 mt-3 italic">
                  Source: {item.source}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 card-glass px-8 py-6">
            <p className="text-[15px] text-white/60 leading-relaxed">
              The average employer sees <strong className="text-white">3–6x return</strong> on every dollar
              invested in clinical health programs.
            </p>
            <a
              href="/savings-calculator"
              className="btn-primary shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-[13px]"
            >
              Calculate Your ROI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
