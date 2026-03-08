const plans = [
  {
    name: "Starter",
    desc: "For companies exploring health benefits",
    featured: false,
    features: [
      "Employee self-enrollment portal",
      "At-home screening kits (GLP-1, TRT, or HRT)",
      "Licensed clinician review",
      "Prescription delivery",
      "Basic reporting dashboard",
      "Email support",
    ],
    cta: "Contact Sales",
    ctaClass: "btn-secondary",
  },
  {
    name: "Growth",
    desc: "For employers investing in workforce health",
    featured: true,
    features: [
      "Everything in Starter",
      "Live proctored at-home testing",
      "24/7 clinical support",
      "Weekly check-ins & adherence tracking",
      "Population health dashboard",
      "Dedicated account manager",
      "PBM integration support",
    ],
    cta: "Request a Demo",
    ctaClass: "btn-primary",
  },
  {
    name: "Enterprise",
    desc: "For large organizations & health plans",
    featured: false,
    features: [
      "Everything in Growth",
      "White-label app branding",
      "Custom clinical protocols",
      "API & HRIS integration",
      "Advanced analytics & ROI reporting",
      "Multi-site rollout support",
      "Executive health briefings",
      "Custom SLA & compliance",
    ],
    cta: "Contact Sales",
    ctaClass: "btn-secondary",
  },
];

export function Plans() {
  return (
    <section id="plans" className="py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-blue/6 text-blue rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight mb-4">
            Flexible programs for{" "}
            <span className="gradient-text">every organization</span>
          </h2>
          <p className="text-[17px] text-text-secondary leading-relaxed">
            Whether you&apos;re a startup or a Fortune 500, we have a plan that
            fits your workforce needs and budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 items-start max-w-[1000px] mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-3xl p-8 sm:p-9 border transition-all hover:-translate-y-1 relative ${
                plan.featured
                  ? "border-blue/30 shadow-lg shadow-blue/5 ring-1 ring-blue/10"
                  : "border-border hover:shadow-md"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue to-blue-dark text-white text-[11px] font-bold rounded-full tracking-wide uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-[13px] text-text-secondary">{plan.desc}</p>
              </div>

              <div className="py-5 border-y border-border/60 mb-6">
                <span className="block text-[11px] text-text-muted mb-1 uppercase tracking-wider">
                  Starting at
                </span>
                <span className="text-3xl font-bold">Custom</span>
                <span className="block text-[11px] text-text-muted mt-0.5">
                  per employee / month
                </span>
              </div>

              <ul className="mb-7">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="py-2 pl-6 relative text-[13px] text-text-secondary"
                  >
                    <svg className="absolute left-0 top-2.5 text-blue" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`${plan.ctaClass} block text-center w-full px-7 py-3.5 rounded-xl font-semibold text-[14px]`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
