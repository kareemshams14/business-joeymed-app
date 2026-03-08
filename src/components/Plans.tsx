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
    <section id="plans" className="py-24 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-blue-light text-blue rounded-full text-[13px] font-bold uppercase tracking-wide mb-4">
            Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight mb-4">
            Flexible programs for{" "}
            <span className="gradient-text">every organization</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Whether you&apos;re a startup or a Fortune 500, we have a plan that
            fits your workforce needs and budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start max-w-[1000px] mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-[32px] p-8 sm:p-10 border transition-all hover:-translate-y-1 hover:shadow-lg relative ${
                plan.featured
                  ? "border-blue shadow-lg ring-1 ring-blue"
                  : "border-border"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-blue to-blue-glow text-white text-[13px] font-bold rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-extrabold mb-1">{plan.name}</h3>
                <p className="text-sm text-text-secondary">{plan.desc}</p>
              </div>

              <div className="py-5 border-y border-border mb-6">
                <span className="block text-[13px] text-text-muted mb-1">
                  Starting at
                </span>
                <span className="text-4xl font-extrabold">Custom</span>
                <span className="block text-[13px] text-text-muted mt-0.5">
                  per employee / month
                </span>
              </div>

              <ul className="mb-7">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="py-2.5 pl-7 relative text-sm text-text-secondary"
                  >
                    <span className="absolute left-0 text-blue font-bold">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`${plan.ctaClass} block text-center w-full px-7 py-4 rounded-xl font-semibold text-base transition-all`}
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
