import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
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
      <div className="bg-gradient-to-r from-blue-dark to-blue text-white text-center py-2.5 px-4 text-sm font-medium">
        <p>
          Now offering employer-sponsored GLP-1, TRT & HRT programs —{" "}
          <a href="#contact" className="text-cyan underline font-semibold">
            Talk to our team
          </a>
        </p>
      </div>
      <Navbar />
      <Hero />
      <Programs />
      <SocialProof />
      <HowItWorks />
      <ForEmployers />
      <TheApp />
      <Results />
      <Plans />
      <FAQ />
      <ContactCTA />
      <Footer />
    </>
  );
}
