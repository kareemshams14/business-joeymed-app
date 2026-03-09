import { CheckCircle2, DollarSign, BarChart3, Award, Smartphone, Globe } from "lucide-react";

const benefits = [
  {
    title: "Zero Admin Overhead",
    desc: "We handle enrollment, eligibility, screening kit logistics, clinical review, prescriptions, and ongoing support. Your HR team stays focused.",
    icon: CheckCircle2,
  },
  {
    title: "Flexible Cost Models",
    desc: "Choose fully subsidized, partially subsidized, or employee-paid. Partner with your PBM or use our direct-to-employee purchasing.",
    icon: DollarSign,
  },
  {
    title: "Population Health Dashboard",
    desc: "Aggregated, de-identified insights into participation, engagement metrics, outcomes, and retention — all real-time.",
    icon: BarChart3,
  },
  {
    title: "Clinical Excellence",
    desc: "Board-certified providers manage screening, prescription, titration, side-effect management, and long-term adherence.",
    icon: Award,
  },
  {
    title: "White-Label Experience",
    desc: "Offer a branded employee experience through our mobile app — customizable with your company colors and messaging.",
    icon: Smartphone,
  },
  {
    title: "Nationwide Coverage",
    desc: "Licensed providers in all 50 states. At-home kits shipped anywhere in the US. No geographic limitations.",
    icon: Globe,
  },
];

export function ForEmployers() {
  return (
    <section id="employers" className="py-24 bg-bg relative">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-blue/6 text-blue rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            For Employers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight mb-4">
            Reduce healthcare costs.{" "}
            <span className="gradient-text">Improve workforce health.</span>
          </h2>
          <p className="text-[17px] text-text-secondary leading-relaxed">
            Obesity-related conditions cost employers over $150B annually.
            JoeyMed for Business provides a structured, clinically supported
            program that delivers measurable ROI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="card-premium p-7">
              <div className="w-11 h-11 rounded-xl bg-blue/6 flex items-center justify-center mb-5">
                <b.icon size={22} className="text-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold mb-2">{b.title}</h3>
              <p className="text-[13px] text-text-secondary leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
