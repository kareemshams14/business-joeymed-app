import { Scale, Syringe, Heart, Sparkles, ArrowRight, Check, ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const categories: {
  id: string;
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
  programs: string[];
  features: string[];
  stat: { value: string; label: string };
  accentColor: string;
  Icon: LucideIcon;
}[] = [
  {
    id: "weight-loss",
    badge: "Weight Loss",
    badgeClass: "bg-blue/8 text-blue",
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
    accentColor: "text-blue",
    Icon: Scale,
  },
  {
    id: "hormones",
    badge: "Hormone Therapy",
    badgeClass: "bg-orange/8 text-orange",
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
    accentColor: "text-orange",
    Icon: Syringe,
  },
  {
    id: "sexual-health",
    badge: "Sexual Health",
    badgeClass: "bg-rose/8 text-rose",
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
    accentColor: "text-rose",
    Icon: Heart,
  },
  {
    id: "longevity",
    badge: "Longevity",
    badgeClass: "bg-amber/8 text-amber",
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
    accentColor: "text-amber",
    Icon: Sparkles,
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-bg relative">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-blue/6 text-blue rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight mb-4">
            Comprehensive care across{" "}
            <span className="gradient-text">four categories</span>
          </h2>
          <p className="text-[17px] text-text-secondary leading-relaxed">
            Weight loss, hormone optimization, sexual health, and longevity —
            each delivered via telemedicine with clinical protocols and ongoing support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {categories.map((cat) => (
            <div key={cat.id} className="card-premium p-8 sm:p-9">
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-11 h-11 rounded-xl ${cat.badgeClass.split(" ")[0]} flex items-center justify-center shrink-0`}>
                  <cat.Icon size={22} className={cat.accentColor} strokeWidth={1.5} />
                </div>
                <div>
                  <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-1.5 ${cat.badgeClass}`}>
                    {cat.badge}
                  </span>
                  <h3 className="text-lg font-bold leading-snug">{cat.title}</h3>
                </div>
              </div>

              <p className="text-[14px] text-text-secondary leading-relaxed mb-5">
                {cat.description}
              </p>

              <div className="mb-5 space-y-2">
                {cat.programs.map((p) => (
                  <div key={p} className="flex gap-2.5 text-[13px]">
                    <ArrowRight size={14} className={`${cat.accentColor} shrink-0 mt-0.5`} strokeWidth={1.5} />
                    <span className="text-text-secondary">{p}</span>
                  </div>
                ))}
              </div>

              <ul className="mb-5">
                {cat.features.map((f) => (
                  <li key={f} className="py-1.5 pl-6 relative text-[13px] text-text-secondary border-b border-border/50 last:border-0">
                    <Check size={14} className={`absolute left-0 top-2 ${cat.accentColor}`} strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="bg-bg-alt rounded-xl px-4 py-3 text-[13px] text-text-secondary">
                <strong className={`${cat.accentColor} text-base font-bold`}>{cat.stat.value}</strong>{" "}
                {cat.stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#clinical" className="btn-primary inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-[15px]">
            Explore Clinical Protocols
            <ChevronDown size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
