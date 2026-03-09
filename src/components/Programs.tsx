import { Scale, Brain, Activity, Sparkles, Check, ChevronDown, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const categories: {
  id: string;
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
  studies: { stat: string; source: string }[];
  features: string[];
  bottomStat: { value: string; label: string };
  accentColor: string;
  Icon: LucideIcon;
}[] = [
  {
    id: "weight-loss",
    badge: "Weight Loss",
    badgeClass: "bg-blue/8 text-blue",
    title: "Weight Loss Programs",
    description:
      "FDA-backed GLP-1 programs with brand-name and compounded options. Semaglutide and tirzepatide with personalized dosing, ongoing monitoring, and clinical support — delivered in days, not months.",
    studies: [
      { stat: "14.9% average body weight loss with semaglutide 2.4mg — 86% of patients lost 5%+ body weight", source: "STEP 1 Trial — New England Journal of Medicine, 2021" },
      { stat: "Up to 22.5% body weight loss with tirzepatide 15mg — 63% of patients achieved 20%+ reduction", source: "SURMOUNT-1 Trial — New England Journal of Medicine, 2022" },
      { stat: "GLP-1 patients saw a 40%+ reduction in major cardiac events and 7% lower medical costs within 2 years", source: "Aon Employer Study, 2025" },
      { stat: "Losing 5% body weight saves ~$670/year per employee in healthcare costs; 25% loss saves $2,849/year", source: "JAMA — Cost Analysis" },
      { stat: "43% of large employers (5,000+ workers) now cover GLP-1s for weight loss, up from 28% in 2024", source: "KFF/Peterson Health System Tracker, 2025" },
    ],
    features: [
      "Brand-name (Wegovy, Zepbound) and compounded options",
      "Multiple titration tracks matched to patient tolerance",
      "Supportive supplements for side-effect management",
      "Structured follow-ups with dose optimization",
      "No insurance pre-authorization needed",
    ],
    bottomStat: { value: "22.5%", label: "max weight loss achieved in SURMOUNT-1" },
    accentColor: "text-blue",
    Icon: Scale,
  },
  {
    id: "behavioral-health",
    badge: "Behavioral Health",
    badgeClass: "bg-purple/8 text-purple",
    title: "Behavioral Health",
    description:
      "Virtual mental health care your employees can actually access — same-week appointments, no referral hoops, and structured programs for the conditions that impact work the most.",
    studies: [
      { stat: "12 billion working days lost annually to depression and anxiety, costing $1 trillion/year in lost productivity", source: "World Health Organization — Mental Health at Work, 2024" },
      { stat: "Workers with poor mental health miss ~12 days/year vs. 2.5 days for those with good mental health — costing $47.6B/year", source: "Gallup Workplace Study" },
      { stat: "Every $1 spent on mental health programs returns $5.39 in reduced absenteeism, presenteeism, and turnover", source: "CuraLinc Healthcare — Peer-Reviewed Study (166,000+ cases)" },
      { stat: "Depressed employees are 35% less productive and miss an average of 31.4 workdays per year", source: "American Psychiatric Association — Workplace Mental Health" },
      { stat: "80%+ of virtual therapy participants report outcomes comparable to or better than in-office sessions", source: "JMIR Mental Health, 2024" },
    ],
    features: [
      "Same-week virtual therapy and psychiatric consultations",
      "Anxiety, depression, stress, and burnout programs",
      "Medication management when clinically appropriate",
      "Progress tracking and structured follow-ups",
      "No 3–6 month waitlists like traditional insurance",
    ],
    bottomStat: { value: "$5.39", label: "returned for every $1 invested in mental health" },
    accentColor: "text-purple",
    Icon: Brain,
  },
  {
    id: "hormones",
    badge: "Hormone Therapy",
    badgeClass: "bg-orange/8 text-orange",
    title: "Hormone Therapy",
    description:
      "Lab-verified testosterone therapy for men and comprehensive menopause care for women — the high-impact programs that traditional insurance almost never covers well.",
    studies: [
      { stat: "10–40% of adult men have testosterone deficiency — projected 6.5 million U.S. men affected by 2025", source: "Journal of Clinical Endocrinology & Metabolism" },
      { stat: "13.4% of women report adverse work outcomes from menopause; those with untreated symptoms have 57% greater productivity loss", source: "Mayo Clinic Proceedings, 2023" },
      { stat: "Global productivity losses from menopausal symptoms estimated at $150 billion; healthcare costs exceed $600 billion", source: "AARP Research" },
      { stat: "1 in 10 women leave the workforce entirely due to menopause symptoms; 25% consider leaving", source: "Mayo Clinic — Menopause & Workplace Study, 2023" },
      { stat: "HRT is the most efficacious treatment for vasomotor and urogenital symptoms with additional bone density benefits", source: "2025 Meta-Analysis — PMC" },
    ],
    features: [
      "Testosterone therapy (topical and injectable options)",
      "Estrogen, progesterone, and vaginal therapy for menopause",
      "At-home lab panels with initial and quarterly monitoring",
      "Structured follow-ups every 1–3 months",
      "Symptom tracking and dose optimization",
    ],
    bottomStat: { value: "$150B", label: "global productivity loss from menopause" },
    accentColor: "text-orange",
    Icon: Activity,
  },
  {
    id: "longevity",
    badge: "Longevity & Wellness",
    badgeClass: "bg-amber/8 text-amber",
    title: "Longevity & Wellness",
    description:
      "Proactive wellness programs that go beyond sick care — NAD+, metabolic optimization, and anti-aging therapies that position your company as a forward-thinking employer.",
    studies: [
      { stat: "Global anti-aging market is ~$80B today, projected to exceed $120 billion by 2030 (7% CAGR)", source: "Precedence Research / Grand View Research, 2025" },
      { stat: "Companies with highly effective wellness programs are 40% more likely to report better financial performance", source: "Harvard Business Review — Wellness ROI" },
      { stat: "Oral NMN/NR supplementation consistently elevates circulating NAD+ by 130–150% in clinical trials", source: "2025 PRISMA Systematic Review — ScienceDirect (33 human studies)" },
      { stat: "Johnson & Johnson's 10+ year wellness program delivered $2.71 ROI per $1 spent; GE reported $4 per $1", source: "Harvard Business Review — Corporate Case Studies" },
      { stat: "95% of companies tracking wellness ROI report positive returns; two-thirds see at least $2 back per $1 spent", source: "Wellhub Global Survey — 2,000 HR Leaders, 2024" },
    ],
    features: [
      "NAD+ and glutathione therapy",
      "Metformin for metabolic longevity",
      "Vitamin B12 injections and supplement protocols",
      "Medical-grade skincare (retinoids, hyaluronic acid)",
      "Add-ons: red light therapy, collagen, cold therapy",
    ],
    bottomStat: { value: "$6", label: "returned per $1 in best-in-class wellness programs" },
    accentColor: "text-amber",
    Icon: Sparkles,
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-bg relative">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-blue/6 text-blue rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight mb-4">
            High-impact care your insurance{" "}
            <span className="gradient-text">doesn&apos;t cover</span>
          </h2>
          <p className="text-[17px] text-text-secondary leading-relaxed">
            Four categories backed by clinical evidence — each filling a gap that
            traditional benefits leave wide open.
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

              {/* Clinical Studies */}
              <div className="mb-5 space-y-2">
                <h4 className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Research & Evidence</h4>
                {cat.studies.map((s, i) => (
                  <div key={i} className="bg-bg-alt rounded-xl px-4 py-3 border border-border/50">
                    <p className="text-[13px] text-text-primary font-medium leading-snug mb-1">{s.stat}</p>
                    <p className="text-[11px] text-text-muted">{s.source}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="mb-5">
                {cat.features.map((f) => (
                  <li key={f} className="py-1.5 pl-6 relative text-[13px] text-text-secondary border-b border-border/50 last:border-0">
                    <Check size={14} className={`absolute left-0 top-2 ${cat.accentColor}`} strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="bg-bg-alt rounded-xl px-4 py-3 text-[13px] text-text-secondary flex items-center gap-2">
                <TrendingUp size={16} className={cat.accentColor} strokeWidth={1.5} />
                <span>
                  <strong className={`${cat.accentColor} text-base font-bold`}>{cat.bottomStat.value}</strong>{" "}
                  {cat.bottomStat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#clinical" className="btn-primary inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-[15px]">
            Explore What We Cover
            <ChevronDown size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
