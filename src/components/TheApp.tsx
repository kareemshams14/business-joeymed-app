import { Bell } from "lucide-react";

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
    title: "Clinician Messaging",
    desc: "Direct messaging with care teams, automated medication reminders, and scheduled check-in prompts.",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock access to clinical support for side-effect management, dosing questions, and care guidance.",
  },
  {
    title: "AI Health Insights",
    desc: "Recommendations tailored to each employee's health data, lab results, and treatment progress.",
  },
];

export function TheApp() {
  return (
    <section id="app" className="py-24 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Content */}
        <div>
          <span className="inline-block px-3 py-1 bg-blue/6 text-blue rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            The JoeyMed App
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
            Your employees&apos; entire care journey —{" "}
            <span className="gradient-text">in their pocket</span>
          </h2>
          <p className="text-[17px] text-text-secondary leading-relaxed mb-9">
            The JoeyMed app powers every step from screening to sustained health
            management. Clinically guided. Always accessible.
          </p>

          <div className="flex flex-col gap-5 mb-9">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue to-cyan mt-2 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold mb-0.5">{f.title}</h4>
                  <p className="text-[13px] text-text-secondary leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-3 bg-amber/8 text-amber border border-amber/15 rounded-xl text-[13px] font-semibold">
            <Bell size={16} />
            App coming soon — join the waitlist
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="flex justify-center">
          <div className="w-[300px] bg-navy rounded-[44px] p-3 shadow-2xl border border-white/[0.06]">
            <div className="bg-bg rounded-[34px] p-5 min-h-[520px] flex flex-col gap-3.5">
              {/* Screen Header */}
              <div className="flex justify-between items-center pb-3">
                <span className="text-[15px] font-bold text-text-primary">
                  Good morning, Sarah
                </span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue to-cyan" />
              </div>

              {/* Weight Progress Card */}
              <div className="bg-white rounded-2xl p-5 border border-border">
                <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-4">
                  Weight Progress
                </div>
                <div className="flex items-end gap-1.5 h-[80px] mb-3">
                  {[55, 50, 48, 42, 35].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm ${
                        i === 4
                          ? "bg-gradient-to-t from-blue to-cyan"
                          : "bg-bg-alt"
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-blue">-22.4 lbs</div>
              </div>

              {/* Mini Cards */}
              <div className="bg-white rounded-2xl px-4 py-3.5 border border-border flex justify-between items-center">
                <span className="text-[11px] text-text-muted">Next Check-in</span>
                <strong className="text-[12px]">Tomorrow, 10 AM</strong>
              </div>
              <div className="bg-white rounded-2xl px-4 py-3.5 border border-border flex justify-between items-center">
                <span className="text-[11px] text-text-muted">Medication</span>
                <strong className="text-[12px]">Semaglutide 0.5mg</strong>
              </div>
              <div className="bg-white rounded-2xl px-4 py-3.5 border border-border flex justify-between items-center">
                <span className="text-[11px] text-text-muted">Adherence</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-16 h-1.5 bg-bg-alt rounded-full overflow-hidden">
                    <div className="w-[92%] h-full bg-gradient-to-r from-blue to-teal rounded-full" />
                  </div>
                  <strong className="text-[12px] text-teal">92%</strong>
                </div>
              </div>

              {/* Coming Soon Overlay */}
              <div className="mt-auto bg-blue/6 rounded-xl px-4 py-3 text-center">
                <span className="text-[11px] font-semibold text-blue uppercase tracking-wider">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
