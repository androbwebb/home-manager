import { Capabilities } from "@/components/Capabilities";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Personas } from "@/components/Personas";
import { Pricing } from "@/components/Pricing";

export default function HomePage() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <HowItWorks />
      <Capabilities />
      <Personas />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
