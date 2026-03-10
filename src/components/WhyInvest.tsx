import {
  TrendingDown, Zap, Heart, Users, Shield, Smile,
} from "lucide-react";

const impacts = [
  {
    icon: TrendingDown,
    stat: "Up to 30%",
    title: "Lower Health Insurance Premiums",
    desc: "A healthier workforce means fewer chronic disease claims. Employers who invest in preventive health programs see measurable reductions in group insurance premiums and out-of-pocket costs.",
    color: "text-teal",
    bgColor: "bg-teal/10",
  },
  {
    icon: Zap,
    stat: "2–3x",
    title: "More Productive Employees",
    desc: "Employees managing weight, hormones, and wellness perform at a higher level. Reduced brain fog, improved energy, and better sleep translate directly into stronger output and engagement.",
    color: "text-blue-glow",
    bgColor: "bg-blue/10",
  },
  {
    icon: Heart,
    stat: "47%",
    title: "Fewer Sick Days & Absenteeism",
    desc: "Chronic conditions like obesity and hormonal imbalances drive absenteeism. Clinically supervised programs reduce sick days and presenteeism significantly.",
    color: "text-rose",
    bgColor: "bg-rose/10",
  },
  {
    icon: Users,
    stat: "68%",
    title: "Stronger Talent Retention",
    desc: "Health benefits are a top factor in employee retention. Offering GLP-1, HRT, and wellness programs signals genuine investment in your people — making them less likely to leave.",
    color: "text-purple",
    bgColor: "bg-purple/10",
  },
  {
    icon: Smile,
    stat: "5x",
    title: "Positive Workplace Culture",
    desc: "Energetic, healthy employees create a ripple effect. Improved mood, confidence, and physical well-being foster collaboration, creativity, and a more positive daily work environment.",
    color: "text-amber",
    bgColor: "bg-amber/10",
  },
  {
    icon: Shield,
    stat: "$150B+",
    title: "Obesity-Related Costs Avoided",
    desc: "U.S. employers spend over $150B annually on obesity-related healthcare. Proactive intervention through structured programs turns a cost center into a competitive advantage.",
    color: "text-cyan",
    bgColor: "bg-cyan/10",
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
              href="#contact"
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
