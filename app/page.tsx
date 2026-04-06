import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Diaspora from "@/components/diaspora";
import Agents from "@/components/agents";
import Pricing from "@/components/pricing";
import Compliance from "@/components/compliance";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Diaspora />
      <Agents />
      <Pricing />
      <Compliance />
      <CTA />
      <Footer />
    </>
  );
}
