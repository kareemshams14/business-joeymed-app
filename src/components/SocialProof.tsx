const partners = ["CVS Caremark", "Quest Diagnostics", "Aon", "Thrive Global", "Abbott"];

export function SocialProof() {
  return (
    <section className="py-12 border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[13px] font-semibold text-text-muted uppercase tracking-[1.5px] mb-6">
          Partnering with industry leaders in healthcare and insurance
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {partners.map((p) => (
            <span
              key={p}
              className="text-lg font-bold text-text-muted opacity-50 hover:opacity-80 transition-opacity"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
