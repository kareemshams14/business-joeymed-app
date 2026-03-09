import {
  CheckCircle2, DollarSign, BarChart3, Award, Smartphone, Globe,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    title: "Zero Admin Overhead",
    desc: "We handle enrollment, eligibility, screening kit logistics, clinical review, prescriptions, and ongoing support. Your HR team stays focused on what matters.",
    icon: CheckCircle2,
  },
  {
    title: "Lower Insurance Premiums",
    desc: "Healthier employees file fewer chronic disease claims. Our programs help reduce your group insurance costs by addressing obesity, hormonal imbalances, and metabolic risk factors.",
    icon: DollarSign,
  },
  {
    title: "Real-Time Population Insights",
    desc: "Aggregated, de-identified dashboards showing enrollment, engagement, outcomes, and retention — giving you clear visibility into program ROI.",
    icon: BarChart3,
  },
  {
    title: "Board-Certified Clinicians",
    desc: "Every prescription, titration, and follow-up is managed by licensed specialists. Clinical excellence means better outcomes and fewer liability concerns.",
    icon: Award,
  },
  {
    title: "White-Label Your Brand",
    desc: "Offer a branded employee experience through our mobile app — customizable with your company colors, messaging, and wellness goals.",
    icon: Smartphone,
  },
  {
    title: "All 50 States, One Platform",
    desc: "Licensed providers nationwide. At-home kits shipped anywhere in the US. Roll out to distributed teams without geographic limitations.",
    icon: Globe,
  },
];

const sellingPoints = [
  {
    metric: "Reduced absenteeism",
    detail: "Employees managing chronic conditions miss fewer days. Programs targeting weight, hormones, and energy directly reduce sick days and presenteeism.",
  },
  {
    metric: "Competitive recruiting edge",
    detail: "GLP-1, HRT, and wellness benefits are the most in-demand perks in 2026. Offering them positions you as a forward-thinking employer.",
  },
  {
    metric: "Measurable outcomes",
    detail: "Track weight loss trends, medication adherence, retention rates, and engagement scores — tied to real business metrics your C-suite cares about.",
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
            Turn employee health into{" "}
            <span className="gradient-text">a business advantage</span>
          </h2>
          <p className="text-[17px] text-text-secondary leading-relaxed">
            Obesity, hormonal imbalances, and untreated health conditions cost
            your organization in premiums, productivity, and turnover. JoeyMed
            gives you the infrastructure to change that.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
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

        {/* Bottom selling points */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border">
          <h3 className="text-lg font-bold mb-6">Why employers are making this investment now</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {sellingPoints.map((sp) => (
              <div key={sp.metric}>
                <div className="flex items-center gap-2 mb-2">
                  <ArrowRight size={14} className="text-blue" strokeWidth={2} />
                  <h4 className="text-[14px] font-bold">{sp.metric}</h4>
                </div>
                <p className="text-[13px] text-text-secondary leading-relaxed">
                  {sp.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
