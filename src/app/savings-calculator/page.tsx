import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SavingsCalculator } from "@/components/SavingsCalculator";

export const metadata: Metadata = {
  title: "Savings Calculator — JoeyMed for Business",
  description:
    "Estimate how much your organization can save with JoeyMed's clinically supervised GLP-1, TRT, HRT, and longevity programs. Interactive ROI calculator for employers.",
  openGraph: {
    title: "Savings Calculator — JoeyMed for Business",
    description:
      "Estimate how much your organization can save with employer-sponsored clinical health programs.",
    url: "https://business.joeymed.com/savings-calculator",
    siteName: "JoeyMed for Business",
    type: "website",
  },
};

export default function SavingsCalculatorPage() {
  return (
    <>
      <Navbar />

      {/* Hero header */}
      <section className="relative py-20 sm:py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal/4 rounded-full blur-[100px]" />

        <div className="relative max-w-[720px] mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 bg-white/[0.06] text-white/50 rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 border border-white/[0.06]">
            ROI Calculator
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight tracking-tight text-white mb-4">
            Calculate your{" "}
            <span className="gradient-text-light">potential savings</span>
          </h1>
          <p className="text-[17px] text-white/40 leading-relaxed max-w-[560px] mx-auto">
            See how much your organization could save by investing in clinically
            supervised health programs for your workforce.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 sm:py-20 bg-bg">
        <SavingsCalculator />
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Want a <span className="gradient-text">custom analysis?</span>
          </h2>
          <p className="text-[15px] text-text-secondary leading-relaxed mb-8">
            Our team will build a detailed savings report tailored to your
            workforce demographics, current health plan, and benefits strategy.
          </p>
          <a
            href="/#contact"
            className="btn-primary inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-[14px]"
          >
            Request Your Custom Report
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
