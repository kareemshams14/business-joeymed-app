const stats = [
  { value: "22.4", unit: "lbs", desc: "Average weight loss in the first 6 months of the program" },
  { value: "95", unit: "%", desc: "Program retention rate — employees stay and see results" },
  { value: "24/7", unit: "", desc: "Clinical support for side-effect management and care" },
];

export function Results() {
  return (
    <section id="results" className="relative py-28 bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-dots-dark" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue/6 rounded-full blur-[120px]" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-white/[0.06] text-white/50 rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 border border-white/[0.06]">
            Expected Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight text-white mb-4">
            Clinically meaningful{" "}
            <span className="gradient-text-light">results</span>
          </h2>
          <p className="text-[17px] text-white/40 leading-relaxed">
            Our programs are designed to deliver measurable outcomes with
            industry-leading engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[800px] mx-auto">
          {stats.map((s) => (
            <div key={s.value} className="card-glass text-center p-8 sm:p-10">
              <div className="text-4xl sm:text-[52px] font-bold text-white leading-none mb-3">
                {s.value}
                {s.unit && <span className="text-2xl sm:text-3xl text-blue-glow">{s.unit}</span>}
              </div>
              <p className="text-sm text-white/35 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
