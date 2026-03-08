export function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dots-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue/8 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px]" />

      <div className="relative max-w-[1200px] mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.06] border border-white/10 rounded-full text-[12px] font-medium text-white/60 uppercase tracking-wider mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-glow" />
            Employer-Sponsored Health Programs
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.08] tracking-tight text-white mb-6">
            The next generation of{" "}
            <span className="gradient-text-light">employee health</span> starts here
          </h1>
          <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-[520px]">
            Weight loss, hormone therapy, sexual health, and longevity programs —
            clinically supervised and delivered to your workforce. At-home testing,
            telehealth support, and measurable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-[15px]"
            >
              Request a Demo
              <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="btn-outline-light inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-[15px]"
            >
              See How It Works
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center gap-6 text-[13px] text-white/35">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4l2-4z" fill="currentColor" opacity="0.5"/>
              </svg>
              <span>200+ employers</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
                <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
              </svg>
              <span>HIPAA compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
                <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
              </svg>
              <span>All 50 states</span>
            </div>
          </div>
        </div>

        {/* Visual — metric cards */}
        <div className="relative min-h-[440px] hidden lg:block">
          {/* Main glass card */}
          <div className="card-glass p-8 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 17V7M8 17V3M13 17v-6M18 17V9" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Population Health Dashboard</h3>
                <p className="text-xs text-white/40">Real-time workforce insights</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Enrolled", value: "1,247" },
                { label: "Active", value: "98.2%" },
                { label: "Avg Loss", value: "22.4 lbs" },
              ].map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                  <span className="text-[11px] text-white/30 uppercase tracking-wider block mb-1">{m.label}</span>
                  <strong className="text-lg text-white font-bold">{m.value}</strong>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-1.5 h-[80px]">
              {[35, 42, 38, 52, 48, 58, 62, 55, 68, 72, 65, 78].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-blue/40 to-blue/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Floating card — retention */}
          <div className="absolute -top-3 -right-3 z-20 card-glass py-4 px-5 flex items-center gap-3 animate-float">
            <div className="w-9 h-9 rounded-lg bg-teal/15 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 9l4 4 6-7" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="text-[11px] text-white/35 block">Retention</span>
              <strong className="text-lg text-white font-bold">95%</strong>
            </div>
          </div>

          {/* Floating card — clinical */}
          <div className="absolute bottom-5 -left-5 z-20 card-glass py-4 px-5 flex items-center gap-3 animate-float-delayed">
            <div className="w-9 h-9 rounded-lg bg-blue/15 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="6" stroke="#60A5FA" strokeWidth="1.5"/>
                <path d="M9 6v6M6 9h6" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <span className="text-[11px] text-white/35 block">Clinical Support</span>
              <strong className="text-lg text-white font-bold">24/7</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
