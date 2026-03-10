import Image from "next/image";

const footerCols = [
  {
    title: "Platform",
    links: [
      { label: "Programs", href: "#programs" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Results", href: "#results" },
      { label: "Plans", href: "#plans" },
      { label: "Savings Calculator", href: "/savings-calculator" },
      { label: "Compare", href: "/compare" },
      { label: "Research Report", href: "/research-report" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Weight Loss", href: "#clinical" },
      { label: "Behavioral Health", href: "#clinical" },
      { label: "Hormone Therapy", href: "#clinical" },
      { label: "Longevity & Wellness", href: "#clinical" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About JoeyMed", href: "https://joeymed.com/about-us", external: true },
      { label: "Contact", href: "#contact" },
      { label: "Compliance & Security", href: "/compliance" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "https://joeymed.com/privacy-policy", external: true },
      { label: "Terms & Conditions", href: "https://joeymed.com/terms-conditions", external: true },
      { label: "Telehealth Consent", href: "https://joeymed.com/telehealth-consent", external: true },
      { label: "Refund Policy", href: "https://joeymed.com/refund-cancellation", external: true },
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
            <a href="#top" className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="JoeyMed" width={150} height={75} className="h-8 w-auto brightness-0 invert opacity-80" />
              <span className="text-[9px] font-semibold text-white/25 uppercase tracking-[0.15em] border-l border-white/10 pl-3">
                for Business
              </span>
            </a>
            <p className="text-[13px] leading-relaxed max-w-[260px] mb-5">
              Employer-sponsored health management, powered by clinically
              supervised telehealth and at-home testing.
            </p>
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
                  {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
