"use client";

import { FormEvent, useState } from "react";
import { Check } from "lucide-react";

const highlights = [
  "No setup fees",
  "Launch in under 2 weeks",
  "Dedicated account team",
];

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
            Ready to transform your{" "}
            <span className="gradient-text">workforce health?</span>
          </h2>
          <p className="text-[16px] text-text-secondary leading-relaxed mb-8">
            Join the growing number of employers who are investing in clinically
            supervised health programs. Let&apos;s build a healthier, more
            productive workforce together.
          </p>
          <div className="flex flex-col gap-4">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-blue/8 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-blue" strokeWidth={2} />
                </div>
                <span className="text-[15px] font-medium">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-9 shadow-sm border border-border">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <Check size={28} className="text-teal" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-2">Thank you!</h3>
              <p className="text-text-secondary text-[15px]">
                Our team will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="text-lg font-bold mb-6">Get in touch</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5">
                    First name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[14px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[14px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[13px] font-semibold mb-1.5">
                  Work email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[14px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[13px] font-semibold mb-1.5">
                  Company name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[14px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[13px] font-semibold mb-1.5">
                  Number of employees
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[14px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition"
                >
                  <option value="">Select range</option>
                  <option value="50-200">50 – 200</option>
                  <option value="200-500">200 – 500</option>
                  <option value="500-1000">500 – 1,000</option>
                  <option value="1000-5000">1,000 – 5,000</option>
                  <option value="5000+">5,000+</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-[13px] font-semibold mb-1.5">
                  Which programs are you interested in?
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Weight Loss", "TRT / Female HRT", "Anti-Aging & Longevity", "All Programs"].map(
                    (prog) => (
                      <label
                        key={prog}
                        className="inline-flex items-center gap-2 px-3.5 py-2 border border-border rounded-lg text-[13px] cursor-pointer hover:border-blue/40 hover:bg-blue/4 transition has-[:checked]:border-blue/40 has-[:checked]:bg-blue/6"
                      >
                        <input type="checkbox" value={prog} className="sr-only" />
                        {prog}
                      </label>
                    )
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[13px] font-semibold mb-1.5">
                  How can we help?
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[14px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition resize-y min-h-[80px]"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full block text-center px-7 py-3.5 rounded-xl font-semibold text-[14px]"
              >
                Request a Demo
              </button>

              <p className="mt-3 text-[11px] text-text-muted text-center">
                By submitting, you agree to our{" "}
                <a href="https://joeymed.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue underline underline-offset-2">
                  Privacy Policy
                </a>
                . We&apos;ll never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
