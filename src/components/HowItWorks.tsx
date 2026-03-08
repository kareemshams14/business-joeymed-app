const steps = [
  {
    num: "01",
    title: "Employee Enrollment",
    desc: "Employees enroll through a streamlined intake portal. We handle eligibility verification, consent, and onboarding — zero admin burden for your HR team.",
  },
  {
    num: "02",
    title: "At-Home Screening Kit",
    desc: "For programs requiring labs, screening kits ship directly to employees. Weight loss and sexual health programs use streamlined digital intake. All guided by clinical protocols.",
  },
  {
    num: "03",
    title: "Clinical Review & Prescription",
    desc: "Specialist clinicians review results and determine eligibility. Prescriptions are tailored to each program and delivered to the employee's door — no pharmacy visits needed.",
  },
  {
    num: "04",
    title: "Ongoing Care & Monitoring",
    desc: "Monthly prescriptions, regular lab monitoring, weekly check-ins, 24/7 support, and clinician-guided dosage optimization — all through the JoeyMed app.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-blue-light text-blue rounded-full text-[13px] font-bold uppercase tracking-wide mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight mb-4">
            From enrollment to outcomes —{" "}
            <span className="gradient-text">in four simple steps</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Whether it&apos;s weight loss, hormone therapy, sexual health, or
            longevity — our platform guides employees from intake through
            ongoing care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white rounded-3xl p-8 border border-border transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl font-extrabold text-blue-light leading-none mb-4">
                {s.num}
              </div>
              <div className="mb-5">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="12" fill="#EBF2FF" />
                  <path
                    d="M16 24l6 6 10-12"
                    stroke="#155EEF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
