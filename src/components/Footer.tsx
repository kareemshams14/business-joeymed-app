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
    <footer className="bg-text-primary text-white/70 pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-baseline gap-0.5 text-2xl font-extrabold mb-4">
              <span className="text-cyan">Joey</span>
              <span className="text-white">Med</span>
              <span className="text-[11px] font-semibold text-white/40 ml-2 uppercase tracking-widest">
                for Business
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-[280px]">
              Employer-sponsored health management, powered by clinically
              supervised telehealth and at-home testing.
            </p>
            <div className="flex gap-3 mt-5">
              {["Instagram", "LinkedIn", "Twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-10 h-10 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all text-sm font-semibold"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm py-1.5 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-[13px]">
            &copy; 2026 JoeyMed, Inc. All rights reserved. Licensed U.S.
            providers. HIPAA-compliant.
          </p>
          <div className="flex gap-2">
            {["HIPAA", "SOC 2", "50 States"].map((b) => (
              <span
                key={b}
                className="px-3 py-1 rounded-md text-[11px] font-bold bg-white/8 text-white/50 uppercase tracking-wide"
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
