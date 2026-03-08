const footerCols = [
  {
    title: "Platform",
    links: [
      { label: "Programs", href: "#programs" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "The App", href: "#app" },
      { label: "Results", href: "#results" },
      { label: "Plans", href: "#plans" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Weight Loss Programs", href: "#programs" },
      { label: "TRT & Female HRT", href: "#programs" },
      { label: "Sexual Health", href: "#programs" },
      { label: "Anti-Aging & Longevity", href: "#programs" },
      { label: "Clinical Protocols", href: "#clinical" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About JoeyMed", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "HIPAA Compliance", href: "#" },
      { label: "BAA", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/50 pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue to-blue-dark flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Joey<span className="text-blue-glow">Med</span>
              </span>
              <span className="text-[9px] font-semibold text-white/25 uppercase tracking-[0.15em] ml-1 border-l border-white/10 pl-2">
                for Business
              </span>
            </a>
            <p className="text-[13px] leading-relaxed max-w-[260px] mb-5">
              Employer-sponsored health management, powered by clinically
              supervised telehealth and at-home testing.
            </p>
            <div className="flex gap-2">
              {["In", "Li", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white/70 transition-all text-[12px] font-semibold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-bold text-white/70 uppercase tracking-[0.15em] mb-4">
                {col.title}
              </h4>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-[13px] py-1.5 hover:text-white/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/[0.06] gap-4">
          <p className="text-[12px] text-white/30">
            &copy; 2026 JoeyMed, Inc. All rights reserved. Licensed U.S.
            providers. HIPAA-compliant.
          </p>
          <div className="flex gap-2">
            {["HIPAA", "SOC 2", "50 States"].map((b) => (
              <span
                key={b}
                className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/[0.04] text-white/25 uppercase tracking-wide border border-white/[0.04]"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
