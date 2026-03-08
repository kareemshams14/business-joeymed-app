const programs = [
  {
    id: "glp1",
    badge: "GLP-1",
    badgeClass: "bg-blue-light text-blue",
    accentClass: "from-blue to-cyan",
    title: "Weight Management Program",
    description:
      "FDA-approved GLP-1/GIP medications (Semaglutide, Tirzepatide) with clinician-guided titration, at-home screening, and ongoing adherence support.",
    features: [
      "At-home blood screening kit",
      "Live proctored testing",
      "Licensed clinician review",
      "Monthly prescription delivery",
      "Weekly check-ins & 24/7 support",
      "Weight & metabolic tracking",
    ],
    stat: { value: "22.4 lbs", label: "avg loss in 6 months" },
    statBg: "bg-blue-light",
    statColor: "text-blue",
    checkColor: "text-blue",
    iconBg: "#EBF2FF",
    iconStroke: "#155EEF",
  },
  {
    id: "trt",
    badge: "TRT",
    badgeClass: "bg-orange-light text-orange",
    accentClass: "from-orange to-yellow-400",
    title: "Testosterone Replacement Therapy",
    description:
      "Comprehensive testosterone optimization for male employees. At-home hormone panels, clinical evaluation, and ongoing TRT management with regular lab monitoring.",
    features: [
      "At-home testosterone & hormone panel",
      "Telehealth clinical evaluation",
      "Personalized TRT protocol",
      "Prescription delivery (injections, topicals)",
      "Quarterly lab monitoring",
      "Energy, mood & vitality tracking",
    ],
    stat: { value: "87%", label: "report improved energy & focus" },
    statBg: "bg-orange-light",
    statColor: "text-orange",
    checkColor: "text-orange",
    iconBg: "#FFF3EB",
    iconStroke: "#F97316",
  },
  {
    id: "hrt",
    badge: "HRT",
    badgeClass: "bg-purple-light text-purple",
    accentClass: "from-purple to-purple-300",
    title: "Hormone Replacement Therapy",
    description:
      "Personalized hormone optimization for women — addressing perimenopause, menopause, and hormonal imbalances. At-home testing with expert clinical management.",
    features: [
      "At-home comprehensive hormone panel",
      "Estrogen, progesterone & thyroid testing",
      "Board-certified HRT specialist review",
      "Bioidentical hormone prescriptions",
      "Symptom tracking & dosage optimization",
      "Menopause & perimenopause support",
    ],
    stat: { value: "91%", label: "report symptom improvement" },
    statBg: "bg-purple-light",
    statColor: "text-purple",
    checkColor: "text-purple",
    iconBg: "#F3EBFF",
    iconStroke: "#8B5CF6",
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-light text-blue rounded-full text-[13px] font-bold uppercase tracking-wide mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight mb-4">
            Comprehensive employer health —{" "}
            <span className="gradient-text">beyond weight loss</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Three clinically supervised programs, each powered by at-home
            testing, telehealth, and ongoing care. One platform for your entire
            workforce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-[32px] p-8 sm:p-10 border border-border relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg group"
            >
              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${prog.accentClass}`}
              />

              {/* Icon */}
              <div className="mb-5">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <rect width="56" height="56" rx="16" fill={prog.iconBg} />
                  <circle
                    cx="28"
                    cy="28"
                    r="12"
                    stroke={prog.iconStroke}
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  <path
                    d="M28 20v16M20 28h16"
                    stroke={prog.iconStroke}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${prog.badgeClass}`}
              >
                {prog.badge}
              </span>
              <h3 className="text-xl font-bold mb-3 leading-snug">{prog.title}</h3>
              <p className="text-[15px] text-text-secondary leading-relaxed mb-6">
                {prog.description}
              </p>

              <ul className="mb-6">
                {prog.features.map((f) => (
                  <li
                    key={f}
                    className="py-2 pl-7 relative text-sm text-text-secondary border-b border-border last:border-0"
                  >
                    <span
                      className={`absolute left-0 font-bold text-sm ${prog.checkColor}`}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className={`${prog.statBg} rounded-xl px-5 py-4 text-sm text-text-secondary`}>
                <strong className={`${prog.statColor} text-lg`}>
                  {prog.stat.value}
                </strong>{" "}
                {prog.stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
