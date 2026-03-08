const features = [
  {
    title: "Guided At-Home Testing",
    desc: "Live proctored screening with step-by-step instructions. Complete the test kit from home with real-time clinical guidance.",
  },
  {
    title: "Progress Tracking",
    desc: "Visual dashboards showing weight trends, medication adherence, and health milestones — keeping employees motivated.",
  },
  {
    title: "Clinician Messaging & Reminders",
    desc: "Direct messaging with care teams, automated medication reminders, and scheduled check-in prompts.",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock access to clinical support for side-effect management, dosing questions, and care guidance.",
  },
  {
    title: "Personalized Health Insights",
    desc: "AI-driven recommendations tailored to each employee's health data, lab results, and treatment progress.",
  },
];

export function TheApp() {
  return (
    <section id="app" className="py-24 bg-gradient-to-b from-bg-alt to-bg">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Content */}
        <div>
          <span className="inline-block px-4 py-1.5 bg-blue-light text-blue rounded-full text-[13px] font-bold uppercase tracking-wide mb-4">
            The JoeyMed App
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-4">
            Your employees&apos; entire care journey —{" "}
            <span className="gradient-text">in their pocket</span>
          </h2>
          <p className="text-[17px] text-text-secondary leading-relaxed mb-9">
            The JoeyMed app powers every step from screening to sustained health
            management. Clinically guided. Always accessible.
          </p>

          <div className="flex flex-col gap-6 mb-9">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue to-cyan mt-1.5 shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">{f.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 bg-text-primary text-white rounded-xl text-sm font-semibold hover:bg-blue-dark transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.05 12.57L4.82 19.5a1 1 0 01-1.5-.87V1.37a1 1 0 011.5-.87l12.23 6.93a1 1 0 010 1.74z" />
              </svg>
              Google Play
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 bg-text-primary text-white rounded-xl text-sm font-semibold hover:bg-blue-dark transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15.98 10.06c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.62-1.7-3.19-1.73-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.63 1.11 8.8.73 1.06 1.61 2.25 2.76 2.21 1.11-.04 1.52-.72 2.86-.72 1.34 0 1.72.72 2.88.7 1.19-.02 1.95-1.08 2.67-2.15.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.32-.89-2.35-3.55z" />
              </svg>
              App Store
            </a>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="flex justify-center">
          <div className="w-[300px] bg-text-primary rounded-[40px] p-3 shadow-2xl">
            <div className="bg-bg rounded-[30px] p-5 min-h-[500px] flex flex-col gap-4">
              {/* Screen Header */}
              <div className="flex justify-between items-center pb-3">
                <span className="text-lg font-bold text-text-primary">
                  Good morning, Sarah
                </span>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue to-cyan" />
              </div>

              {/* Weight Progress Card */}
              <div className="bg-white rounded-2xl p-5 border border-border">
                <div className="text-[13px] font-semibold text-text-muted uppercase tracking-wide mb-4">
                  Weight Progress
                </div>
                <div className="flex items-end gap-3 h-[100px] mb-3">
                  {[60, 55, 50, 45, 38].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-md ${
                        i === 4
                          ? "bg-gradient-to-t from-cyan to-blue"
                          : "bg-blue-light"
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="text-3xl font-extrabold text-blue">-22.4 lbs</div>
              </div>

              {/* Mini Cards */}
              <div className="bg-white rounded-2xl px-5 py-4 border border-border flex justify-between items-center">
                <span className="text-[13px] text-text-muted">Next Check-in</span>
                <strong className="text-sm">Tomorrow, 10:00 AM</strong>
              </div>
              <div className="bg-white rounded-2xl px-5 py-4 border border-border flex justify-between items-center">
                <span className="text-[13px] text-text-muted">Medication</span>
                <strong className="text-sm">Semaglutide 0.5mg</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
