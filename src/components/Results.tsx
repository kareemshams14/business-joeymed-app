const stats = [
  { value: "22.4", unit: "lbs", desc: "Average weight loss in the first 6 months of the program" },
  { value: "95", unit: "%", desc: "Program retention rate — employees stay and see results" },
  { value: "1,200", unit: "+", desc: "Employees enrolled in our pilot employer programs" },
  { value: "24/7", unit: "", desc: "Clinical support for side-effect management and care" },
];

export function Results() {
  return (
    <section id="results" className="py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-blue-light text-blue rounded-full text-[13px] font-bold uppercase tracking-wide mb-4">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight mb-4">
            Real outcomes from{" "}
            <span className="gradient-text">real programs</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Our employer programs deliver clinically meaningful results with
            industry-leading retention.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.value}
              className="text-center p-8 sm:p-10 bg-white rounded-3xl border border-border transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl sm:text-[56px] font-extrabold text-blue leading-none mb-3">
                {s.value}
                {s.unit && <span className="text-2xl sm:text-3xl">{s.unit}</span>}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-14 text-center max-w-[700px] mx-auto">
          <blockquote className="text-xl font-medium leading-relaxed italic mb-6">
            &ldquo;Implementing JoeyMed&apos;s GLP-1 program for our workforce has
            been transformative. The retention rate speaks for itself —
            employees are engaged, supported, and seeing real results.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-light to-blue" />
            <div className="text-left">
              <strong className="text-[15px] block">VP of Benefits</strong>
              <span className="text-[13px] text-text-muted">
                Fortune 500 Employer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
