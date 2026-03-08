const benefits = [
  {
    title: "Zero Admin Overhead",
    desc: "We handle enrollment, eligibility, screening kit logistics, clinical review, prescriptions, and ongoing support. Your HR team stays focused.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 11l6 6L19 5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Flexible Cost Models",
    desc: "Choose fully subsidized, partially subsidized, or employee-paid. Partner with your PBM or use our direct-to-employee purchasing.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#3B82F6" strokeWidth="1.5"/>
        <path d="M11 7v8M8 11h6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Population Health Dashboard",
    desc: "Aggregated, de-identified insights into participation, engagement metrics, outcomes, and retention — all real-time.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 19V11M8 19V7M13 19v-6M18 19V9" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Clinical Excellence",
    desc: "Board-certified providers manage screening, prescription, titration, side-effect management, and long-term adherence.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.5 5h5l-4 3.5 1.5 5L11 13l-5 2.5 1.5-5-4-3.5h5L11 2z" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "White-Label Experience",
    desc: "Offer a branded employee experience through our mobile app — customizable with your company colors and messaging.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="5" y="2" width="12" height="18" rx="3" stroke="#3B82F6" strokeWidth="1.5"/>
        <circle cx="11" cy="16" r="1" fill="#3B82F6"/>
      </svg>
    ),
  },
  {
    title: "Nationwide Coverage",
    desc: "Licensed providers in all 50 states. At-home kits shipped anywhere in the US. No geographic limitations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#3B82F6" strokeWidth="1.5"/>
        <path d="M3 11h16M11 3c2.5 2.5 4 5 4 8s-1.5 5.5-4 8c-2.5-2.5-4-5-4-8s1.5-5.5 4-8z" stroke="#3B82F6" strokeWidth="1.5"/>
      </svg>
    ),
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
                {b.icon}
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
