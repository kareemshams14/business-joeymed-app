import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ShieldCheck,
  Lock,
  FileCheck,
  Globe,
  Server,
  UserCheck,
  Building2,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance & Security — JoeyMed for Business",
  description:
    "JoeyMed is HIPAA-compliant, SOC 2 certified, and LegitScript verified. Learn about our commitment to data security, patient privacy, and regulatory compliance.",
  openGraph: {
    title: "Compliance & Security — JoeyMed for Business",
    description:
      "HIPAA-compliant, SOC 2 certified, LegitScript verified. Enterprise-grade security for employer health programs.",
    url: "https://business.joeymed.com/compliance",
    siteName: "JoeyMed for Business",
    type: "website",
  },
};

const certifications = [
  {
    title: "HIPAA Compliant",
    desc: "All patient data is handled in full compliance with the Health Insurance Portability and Accountability Act. We maintain administrative, physical, and technical safeguards to protect PHI at every level.",
    icon: ShieldCheck,
    color: "text-teal",
    bgColor: "bg-teal/10",
  },
  {
    title: "SOC 2 Type II",
    desc: "Our infrastructure and processes meet SOC 2 standards for security, availability, processing integrity, confidentiality, and privacy — verified through independent third-party audits.",
    icon: Server,
    color: "text-blue-glow",
    bgColor: "bg-blue/10",
  },
  {
    title: "LegitScript Verified",
    desc: "JoeyMed is certified by LegitScript as a legitimate healthcare provider. This independent verification confirms we meet the highest standards for legality, safety, and transparency.",
    icon: FileCheck,
    color: "text-purple",
    bgColor: "bg-purple/10",
    badge: true,
  },
  {
    title: "Licensed in All 50 States",
    desc: "Our clinicians are licensed in every U.S. state and territory. Patients receive care from providers who are authorized to practice in their specific jurisdiction.",
    icon: Globe,
    color: "text-amber",
    bgColor: "bg-amber/10",
  },
  {
    title: "Encrypted End-to-End",
    desc: "All data in transit and at rest is encrypted using AES-256 and TLS 1.3. We use secure cloud infrastructure with automated backups and disaster recovery protocols.",
    icon: Lock,
    color: "text-rose",
    bgColor: "bg-rose/10",
  },
  {
    title: "Credentialed Providers",
    desc: "Every JoeyMed clinician goes through rigorous credentialing, including DEA verification, board certification checks, malpractice history review, and ongoing monitoring.",
    icon: UserCheck,
    color: "text-cyan",
    bgColor: "bg-cyan/10",
  },
];

const practices = [
  {
    title: "Access Controls",
    items: [
      "Role-based access with least-privilege principle",
      "Multi-factor authentication for all staff",
      "Automated session timeouts and audit trails",
    ],
  },
  {
    title: "Data Handling",
    items: [
      "PHI is never stored on local devices",
      "Automated data retention and deletion policies",
      "De-identified analytics for employer dashboards",
    ],
  },
  {
    title: "Vendor Management",
    items: [
      "All vendors sign Business Associate Agreements",
      "Regular third-party security assessments",
      "PBM and pharmacy partners are NABP-accredited",
    ],
  },
  {
    title: "Incident Response",
    items: [
      "24/7 security monitoring and alerting",
      "Documented breach notification procedures",
      "Annual penetration testing and vulnerability scans",
    ],
  },
];

export default function CompliancePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark" />
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px]" />

        <div className="relative max-w-[720px] mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 bg-white/[0.06] text-white/50 rounded-md text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 border border-white/[0.06]">
            Trust & Security
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight tracking-tight text-white mb-4">
            Enterprise-grade{" "}
            <span className="gradient-text-light">compliance & security</span>
          </h1>
          <p className="text-[17px] text-white/40 leading-relaxed max-w-[560px] mx-auto">
            Your employees&apos; health data deserves the highest level of
            protection. Here&apos;s how we safeguard it.
          </p>
        </div>
      </section>

      {/* Certifications grid */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
              Certifications &{" "}
              <span className="gradient-text">verifications</span>
            </h2>
            <p className="text-[17px] text-text-secondary leading-relaxed">
              Independent audits and certifications that validate our commitment
              to security, privacy, and clinical legitimacy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-white rounded-3xl p-7 border border-border hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${cert.bgColor} flex items-center justify-center mb-5`}
                >
                  <cert.icon size={22} className={cert.color} strokeWidth={1.5} />
                </div>
                <h3 className="text-[16px] font-bold mb-2">{cert.title}</h3>
                <p className="text-[13px] text-text-secondary leading-relaxed mb-4">
                  {cert.desc}
                </p>
                {cert.badge && (
                  <a
                    href="https://www.legitscript.com/websites/joeymed.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple/6 border border-purple/15 rounded-xl text-[12px] font-semibold text-purple hover:bg-purple/10 transition-colors"
                  >
                    <FileCheck size={14} />
                    Verify on LegitScript
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LegitScript featured banner */}
      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="bg-gradient-to-br from-purple/4 to-blue/4 rounded-3xl p-8 sm:p-10 border border-purple/10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-purple/10 flex items-center justify-center mx-auto mb-5">
              <FileCheck size={32} className="text-purple" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              LegitScript Certified Healthcare Provider
            </h3>
            <p className="text-[15px] text-text-secondary leading-relaxed max-w-[520px] mx-auto mb-6">
              LegitScript is the gold standard for verifying the legitimacy of
              healthcare websites and telemedicine providers. Our certification
              means JoeyMed has been independently reviewed for safety,
              legality, and adherence to best practices.
            </p>
            <a
              href="https://www.legitscript.com/websites/joeymed.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[14px]"
            >
              View Our LegitScript Certification
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Security practices */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
              Security <span className="gradient-text">practices</span>
            </h2>
            <p className="text-[17px] text-text-secondary leading-relaxed">
              A detailed look at the policies and procedures that keep your
              data safe.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-[900px] mx-auto">
            {practices.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-3xl p-7 border border-border"
              >
                <h3 className="text-[15px] font-bold mb-4">{p.title}</h3>
                <ul className="space-y-3">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[13px] text-text-secondary"
                    >
                      <div className="w-5 h-5 rounded-md bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck size={12} className="text-teal" strokeWidth={2} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-blue/8 flex items-center justify-center mx-auto mb-5">
            <Building2 size={24} className="text-blue" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Questions about{" "}
            <span className="gradient-text">security or compliance?</span>
          </h2>
          <p className="text-[15px] text-text-secondary leading-relaxed mb-8">
            Our compliance team is happy to walk you through our security
            posture, provide documentation, or complete your vendor security
            questionnaire.
          </p>
          <a
            href="/#contact"
            className="btn-primary inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-[14px]"
          >
            Contact Our Compliance Team
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
