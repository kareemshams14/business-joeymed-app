const categories = [
  {
    id: "weight-loss",
    badge: "Weight Loss",
    badgeClass: "bg-blue-light text-blue",
    accentClass: "from-blue to-cyan",
    title: "Weight Loss Programs",
    description:
      "Two pathways — individualized compounded GLP-1/GIP with adaptive titration tracks, or brand-name only (Wegovy, Ozempic, Zepbound, Mounjaro) with strict eligibility and payer-friendly protocols.",
    programs: [
      "Individualized WL — compounded semaglutide/tirzepatide, 3 titration tracks, symptom-targeted additives",
      "Brand-Name WL — FDA-approved brands only, BMI thresholds, standardized dose steps",
    ],
    features: [
      "Dynamic dose advancement or de-escalation",
      "Built-in disqualifiers & pregnancy safeguards",
      "Digital follow-ups & selfie verification",
      "Cross-sell: metabolic, sleep, fitness coaching",
    ],
    stat: { value: "2", label: "distinct program tracks" },
    statBg: "bg-blue-light",
    statColor: "text-blue",
    checkColor: "text-blue",
    iconBg: "#EBF2FF",
    iconStroke: "#155EEF",
  },
  {
    id: "hormones",
    badge: "Hormone Therapy",
    badgeClass: "bg-orange-light text-orange",
    accentClass: "from-orange to-purple",
    title: "TRT & Female HRT",
    description:
      "Testosterone replacement for men (lotions, cypionate injections) and comprehensive female HRT (estrogen, progesterone, vaginal therapy) — both with at-home labs and ongoing clinical monitoring.",
    programs: [
      "TRT — mandatory low-T lab, topical & injectable options, quarterly monitoring",
      "Female HRT — estrogen (6 forms), progesterone, vaginal estrogen, menopause care",
    ],
    features: [
      "At-home hormone panels with live proctoring",
      "Structured red-flag screening at intake",
      "1–3 month follow-ups & dose optimization",
      "Does not include controlled substances in Female HRT",
    ],
    stat: { value: "87%", label: "report improved energy (TRT)" },
    statBg: "bg-orange-light",
    statColor: "text-orange",
    checkColor: "text-orange",
    iconBg: "#FFF3EB",
    iconStroke: "#F97316",
  },
  {
    id: "sexual-health",
    badge: "Sexual Health",
    badgeClass: "bg-[#FCE7F3] text-[#BE185D]",
    accentClass: "from-[#BE185D] to-[#F472B6]",
    title: "Sexual Health Programs",
    description:
      "ED, premature ejaculation, and women's sexual health — discreet telemedicine consultations with brand and compounded medications, subscription-based follow-ups, and add-on devices.",
    programs: [
      "Men's ED — Sildenafil, Tadalafil, Vardenafil, Avanafil + compounded combos",
      "Premature Ejaculation — SSRI & PDE5i classes + desensitizing products",
      "Women's Sexual Health — PT-141 (Bremelanotide) & Oxytocin therapy",
    ],
    features: [
      "No labs required — streamlined intake",
      "3–6 month follow-up cadence",
      "Discreet delivery & subscription models",
      "Hardware integrations (monitoring devices, add-ons)",
    ],
    stat: { value: "$40B+", label: "global market by 2027" },
    statBg: "bg-[#FCE7F3]",
    statColor: "text-[#BE185D]",
    checkColor: "text-[#BE185D]",
    iconBg: "#FCE7F3",
    iconStroke: "#BE185D",
  },
  {
    id: "longevity",
    badge: "Longevity",
    badgeClass: "bg-[#FEF3C7] text-[#92400E]",
    accentClass: "from-[#92400E] to-[#F59E0B]",
    title: "Anti-Aging & Longevity",
    description:
      "Proactive wellness via telemedicine — NAD, glutathione, metformin, topical anti-aging, plus hardware add-ons like red light therapy and cold plunges. Subscription model with 6-month follow-ups, no labs required.",
    programs: [
      "Core protocols — NAD, Glutathione, Metformin, Vitamin B12",
      "Topicals — Retinoids, Hyaluronic Acid, custom vitamin formulations",
    ],
    features: [
      "No labs required — low overhead",
      "Red light masks, microneedling, cold therapy",
      "Collagen supplements & diet/exercise programs",
      "6-month subscription cadence",
    ],
    stat: { value: "$120B+", label: "global market by 2030" },
    statBg: "bg-[#FEF3C7]",
    statColor: "text-[#92400E]",
    checkColor: "text-[#92400E]",
    iconBg: "#FEF3C7",
    iconStroke: "#92400E",
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-light text-blue rounded-full text-[13px] font-bold uppercase tracking-wide mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight mb-4">
            Comprehensive care across{" "}
            <span className="gradient-text">four categories</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Weight loss, hormone optimization, sexual health, and longevity —
            each delivered via telemedicine with clinical protocols and ongoing support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-[32px] p-8 sm:p-10 border border-border relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.accentClass}`}
              />

              <div className="flex items-start gap-4 mb-5">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="shrink-0">
                  <rect width="48" height="48" rx="14" fill={cat.iconBg} />
                  <circle cx="24" cy="24" r="10" stroke={cat.iconStroke} strokeWidth="1.5" opacity="0.3" />
                  <path d="M24 17v14M17 24h14" stroke={cat.iconStroke} strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${cat.badgeClass}`}>
                    {cat.badge}
                  </span>
                  <h3 className="text-xl font-bold leading-snug">{cat.title}</h3>
                </div>
              </div>

              <p className="text-[14px] text-text-secondary leading-relaxed mb-5">
                {cat.description}
              </p>

              {/* Sub-programs */}
              <div className="mb-5 space-y-2">
                {cat.programs.map((p) => (
                  <div key={p} className="flex gap-2 text-[13px]">
                    <span className={`${cat.checkColor} font-bold shrink-0`}>→</span>
                    <span className="text-text-secondary">{p}</span>
                  </div>
                ))}
              </div>

              {/* Key features */}
              <ul className="mb-5">
                {cat.features.map((f) => (
                  <li key={f} className="py-1.5 pl-6 relative text-[13px] text-text-secondary border-b border-border last:border-0">
                    <span className={`absolute left-0 font-bold text-xs ${cat.checkColor}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className={`${cat.statBg} rounded-xl px-4 py-3 text-[13px] text-text-secondary`}>
                <strong className={`${cat.statColor} text-base`}>{cat.stat.value}</strong>{" "}
                {cat.stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#clinical" className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all">
            Explore Clinical Protocols
          </a>
        </div>
      </div>
    </section>
  );
}
