export function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-b from-blue-light to-bg">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div>
          <div className="inline-flex items-center px-4 py-2 bg-white border border-border rounded-full text-[13px] font-semibold text-blue uppercase tracking-wide mb-6">
            Employer-Sponsored Health Programs
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-5">
            The next generation of{" "}
            <span className="gradient-text">employee health</span> starts here
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-[540px]">
            GLP-1 weight management, TRT, and HRT programs — clinically
            supervised and delivered to your workforce. At-home testing,
            telehealth support, and measurable outcomes through one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center px-9 py-[18px] rounded-[14px] font-semibold text-lg transition-all"
            >
              Request a Demo
            </a>
            <a
              href="#how-it-works"
              className="btn-secondary inline-flex items-center justify-center px-9 py-[18px] rounded-[14px] font-semibold text-lg transition-all"
            >
              See How It Works
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {["#4A90D9", "#7B68EE", "#03D7FD", "#155EEF"].map((c, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-[3px] border-white -ml-2 first:ml-0"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="text-sm text-text-secondary">
              Trusted by <strong className="text-text-primary">200+ employers</strong>{" "}
              nationwide
            </p>
          </div>
        </div>

        {/* Visual */}
        <div className="relative min-h-[420px] hidden lg:block">
          {/* Main Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-border relative z-10">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">Population Health Dashboard</h3>
            <p className="text-sm text-text-secondary mb-5">
              Real-time insights into program participation, engagement, and
              outcomes across your workforce.
            </p>
            <div className="flex items-baseline gap-2 pt-4 border-t border-border">
              <span className="text-4xl font-extrabold text-blue">95%</span>
              <span className="text-sm text-text-secondary font-medium">
                Retention Rate
              </span>
            </div>
          </div>

          {/* Floating Card 1 */}
          <div className="absolute -top-2 -right-2 z-20 bg-white rounded-3xl py-4 px-6 shadow-lg border border-border flex items-center gap-3 animate-float">
            <div className="text-2xl">💊</div>
            <div>
              <span className="text-xs text-text-muted block">Avg. Weight Loss</span>
              <strong className="text-xl font-extrabold">22.4 lbs</strong>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-5 -left-5 z-20 bg-white rounded-3xl py-4 px-6 shadow-lg border border-border flex items-center gap-3 animate-float-delayed">
            <div className="text-2xl">🩺</div>
            <div>
              <span className="text-xs text-text-muted block">Clinical Support</span>
              <strong className="text-xl font-extrabold">24/7</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
