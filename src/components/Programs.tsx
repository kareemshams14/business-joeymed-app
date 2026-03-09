import { Scale, Brain, Activity, Sparkles, ArrowRight, Check, ChevronDown, TrendingDown } from "lucide-react";
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
      { stat: "~15% average body weight loss with semaglutide 2.4mg over 68 weeks", source: "STEP 1 Trial — NEJM, 2021" },
      { stat: "Up to 22.5% body weight reduction with tirzepatide (15mg) over 72 weeks", source: "SURMOUNT-1 Trial — NEJM, 2022" },
      { stat: "Obese employees cost employers $1,861 more per year in medical claims vs. healthy-weight peers", source: "Journal of Occupational & Environmental Medicine" },
      { stat: "36% fewer sick days reported among employees who achieved clinically meaningful weight loss", source: "CDC Workplace Health Promotion" },
    ],
    features: [
      "Brand-name (Wegovy, Zepbound) and compounded options",
      "Multiple titration tracks matched to patient tolerance",
      "Supportive supplements for side-effect management",
      "Structured follow-ups with dose optimization",
      "No insurance pre-authorization needed",
    ],
    bottomStat: { value: "~20%", label: "average body weight loss with tirzepatide" },
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
      { stat: "Depression and anxiety cost the global economy $1 trillion per year in lost productivity", source: "World Health Organization, 2022" },
      { stat: "Employees with untreated depression are 35% less productive and miss 4x more workdays", source: "American Psychiatric Association" },
      { stat: "Every $1 invested in mental health treatment returns $4 in improved health and productivity", source: "WHO — Mental Health in the Workplace" },
      { stat: "76% of employees report at least one symptom of a mental health condition", source: "Mind Share Partners — 2024 Workplace Report" },
    ],
    features: [
      "Same-week virtual therapy and psychiatric consultations",
      "Anxiety, depression, stress, and burnout programs",
      "Medication management when clinically appropriate",
      "Progress tracking and structured follow-ups",
      "No 3–6 month waitlists like traditional insurance",
    ],
    bottomStat: { value: "4x", label: "return on every $1 invested in mental health" },
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
      { stat: "Low testosterone affects an estimated 1 in 4 men over 30 and is linked to fatigue, low mood, and reduced cognitive function", source: "AUA Clinical Guidelines, 2018" },
      { stat: "1 in 10 women leave the workforce due to menopause symptoms; 25% consider leaving", source: "Mayo Clinic Proceedings, 2023" },
      { stat: "Menopause-related productivity loss costs U.S. employers an estimated $1.8 billion annually", source: "Mayo Clinic — Menopause & Workplace Study, 2023" },
      { stat: "TRT patients report 33% improvement in energy, mood, and overall quality of life within 3–6 months", source: "The Journal of Clinical Endocrinology & Metabolism" },
    ],
    features: [
      "Testosterone therapy (topical and injectable options)",
      "Estrogen, progesterone, and vaginal therapy for menopause",
      "At-home lab panels with initial and quarterly monitoring",
      "Structured follow-ups every 1–3 months",
      "Symptom tracking and dose optimization",
    ],
    bottomStat: { value: "$1.8B", label: "annual employer cost from menopause symptoms" },
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
      { stat: "The global longevity and anti-aging market is projected to exceed $120 billion by 2030", source: "Grand View Research, 2023" },
      { stat: "Companies with comprehensive wellness programs see 25% lower absenteeism and 32% lower turnover", source: "Harvard Business Review — Wellness Programs Meta-Analysis" },
      { stat: "NAD+ supplementation improved physical performance and reduced biological age markers in clinical trials", source: "Nature Aging — NAD+ Clinical Review, 2022" },
      { stat: "Employer wellness programs return $1.50–$3.00 for every $1 spent through reduced healthcare costs", source: "RAND Corporation — Workplace Wellness Study" },
    ],
    features: [
      "NAD+ and glutathione therapy",
      "Metformin for metabolic longevity",
      "Vitamin B12 injections and supplement protocols",
      "Medical-grade skincare (retinoids, hyaluronic acid)",
      "Add-ons: red light therapy, collagen, cold therapy",
    ],
    bottomStat: { value: "$120B+", label: "projected market size by 2030" },
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
              <div className="mb-5 space-y-2.5">
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
                <TrendingDown size={16} className={cat.accentColor} strokeWidth={1.5} />
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
