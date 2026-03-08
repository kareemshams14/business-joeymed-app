const steps = [
  {
    num: "01",
    title: "Employee Enrollment",
    desc: "Employees enroll through a streamlined intake portal. We handle eligibility verification, consent, and onboarding — zero admin burden for your HR team.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#3B82F6" strokeWidth="1.5"/>
        <path d="M5 20c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "At-Home Screening Kit",
    desc: "For programs requiring labs, screening kits ship directly to employees. Weight loss and sexual health programs use streamlined digital intake.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="#3B82F6" strokeWidth="1.5"/>
        <path d="M9 12h6M12 9v6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Clinical Review & Rx",
    desc: "Specialist clinicians review results and determine eligibility. Prescriptions are tailored to each program and delivered to the employee's door.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 7V5a2 2 0 012-2h2M18 3h2a2 2 0 012 2v2M4 17v2a2 2 0 002 2h2M18 21h2a2 2 0 002-2v-2" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Ongoing Monitoring",
    desc: "Monthly prescriptions, regular lab monitoring, weekly check-ins, 24/7 support, and clinician-guided dosage optimization — all through the JoeyMed app.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h4l3-6 4 12 3-6h4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-blue/6 text-blue rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight mb-4">
            From enrollment to outcomes —{" "}
            <span className="gradient-text">four simple steps</span>
          </h2>
          <p className="text-[17px] text-text-secondary leading-relaxed">
            Whether it&apos;s weight loss, hormone therapy, sexual health, or
            longevity — our platform guides employees from intake through
            ongoing care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {i < 3 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+2px)] w-[calc(100%-40px)] border-t border-dashed border-border z-0" />
              )}
              <div className="card-premium p-7 relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue/6 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="text-3xl font-bold text-border leading-none">
                    {s.num}
                  </span>
                </div>
                <h3 className="text-base font-bold mb-2">{s.title}</h3>
                <p className="text-[13px] text-text-secondary leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
