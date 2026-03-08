const partners = ["CVS Caremark", "Quest Diagnostics", "Aon", "Thrive Global", "Abbott"];

export function SocialProof() {
  return (
    <section className="py-10 bg-bg border-b border-border/60">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[11px] font-semibold text-text-muted uppercase tracking-[0.2em] mb-8">
          Trusted by leading organizations in healthcare and insurance
        </p>
        <div className="flex items-center justify-center gap-10 sm:gap-16 flex-wrap">
          {partners.map((p) => (
            <span
              key={p}
              className="text-[15px] font-semibold text-text-muted/40 hover:text-text-muted/70 transition-all tracking-wide"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
