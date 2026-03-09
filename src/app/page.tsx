import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyInvest } from "@/components/WhyInvest";
import { Programs } from "@/components/Programs";
import { ClinicalDetails } from "@/components/ClinicalDetails";
import { Infographics } from "@/components/Infographics";
import { SocialProof } from "@/components/SocialProof";
import { HowItWorks } from "@/components/HowItWorks";
import { ForEmployers } from "@/components/ForEmployers";
import { TheApp } from "@/components/TheApp";
import { Results } from "@/components/Results";
import { Plans } from "@/components/Plans";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-navy text-white/80 text-center py-2.5 px-4 text-[13px] font-medium tracking-wide">
        <p>
          Now offering employer-sponsored weight loss, hormone, sexual health & longevity programs —{" "}
          <a href="#contact" className="text-blue-glow underline underline-offset-2 font-semibold hover:text-white transition-colors">
            Talk to our team &rarr;
          </a>
        </p>
      </div>
      <Navbar />
      <Hero />
      <SocialProof />
      <WhyInvest />
      <Programs />
      <ClinicalDetails />
      <Infographics />
      <HowItWorks />
      <Results />
      <ForEmployers />
      <TheApp />
      <Plans />
      <FAQ />
      <ContactCTA />
      <Footer />
    </>
  );
}
