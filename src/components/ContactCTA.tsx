"use client";

import { FormEvent, useState } from "react";

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
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-bg-alt to-blue-light"
    >
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
        {/* Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-4">
            Ready to transform your{" "}
            <span className="gradient-text">workforce health?</span>
          </h2>
          <p className="text-[17px] text-text-secondary leading-relaxed mb-8">
            Join the growing number of employers who are investing in clinically
            supervised health programs. Let&apos;s build a healthier, more
            productive workforce together.
          </p>
          <div className="flex flex-col gap-4">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#155EEF" strokeWidth="2" />
                  <path
                    d="M8 12l3 3 5-5"
                    stroke="#155EEF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-medium">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-lg border border-border">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
              <p className="text-text-secondary">
                Our team will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold mb-6">Get in touch</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    First name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[15px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[15px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1.5">
                  Work email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[15px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1.5">
                  Company name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[15px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1.5">
                  Number of employees
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[15px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition"
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
                <label className="block text-sm font-semibold mb-1.5">
                  Which programs are you interested in?
                </label>
                <div className="flex flex-wrap gap-2">
                  {["GLP-1 Weight Management", "TRT", "HRT", "All Programs"].map(
                    (prog) => (
                      <label
                        key={prog}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm cursor-pointer hover:border-blue hover:bg-blue-light/50 transition has-[:checked]:border-blue has-[:checked]:bg-blue-light"
                      >
                        <input type="checkbox" value={prog} className="sr-only" />
                        {prog}
                      </label>
                    )
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-1.5">
                  How can we help?
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-bg text-[15px] outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition resize-y min-h-[80px]"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full block text-center px-7 py-4 rounded-xl font-semibold text-base transition-all"
              >
                Request a Demo
              </button>

              <p className="mt-3 text-xs text-text-muted text-center">
                By submitting, you agree to our{" "}
                <a href="#" className="text-blue underline">
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
