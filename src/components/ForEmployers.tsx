const benefits = [
  {
    title: "Zero Admin Overhead",
    desc: "We handle enrollment, eligibility, screening kit logistics, clinical review, prescriptions, and ongoing support. Your HR team stays focused on what matters.",
  },
  {
    title: "Flexible Cost Models",
    desc: "Choose fully subsidized, partially subsidized, or employee-paid models. Partner with your PBM or use our direct-to-employee purchasing — like the CVS Caremark model.",
  },
  {
    title: "Population Health Dashboard",
    desc: "Aggregated, de-identified insights into participation rates, engagement metrics, weight outcomes, and retention — all in real-time through your employer portal.",
  },
  {
    title: "Clinical Excellence",
    desc: "Board-certified providers manage the full care journey — screening, prescription, titration, side-effect management, and long-term adherence protocols.",
  },
  {
    title: "White-Label App Experience",
    desc: "Offer a branded employee experience through our mobile app — customizable with your company colors, messaging, and wellness initiatives.",
  },
  {
    title: "Nationwide Coverage",
    desc: "Licensed providers in all 50 states. At-home kits shipped anywhere in the US. No geographic limitations for your distributed workforce.",
  },
];

export function ForEmployers() {
  return (
    <section id="employers" className="py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-blue-light text-blue rounded-full text-[13px] font-bold uppercase tracking-wide mb-4">
            For Employers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight mb-4">
            Reduce healthcare costs.{" "}
            <span className="gradient-text">Improve workforce health.</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Obesity-related conditions cost employers over $150B annually.
            JoeyMed for Business provides a structured, clinically supported
            program that delivers measurable ROI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-3xl p-8 border border-border transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-5">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#155EEF" strokeWidth="2" />
                  <path
                    d="M14 20l4 4 8-8"
                    stroke="#155EEF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
