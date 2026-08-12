import {
  FeatureBentoGrid,
  HeroBenefitStrip,
  HeroSection,
  Navbar,
  ProblemSolutionSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm text-charcoal">
      <Navbar />
      <HeroSection />
      <HeroBenefitStrip />
      <FeatureBentoGrid />
      <ProblemSolutionSection />
      <div id="for-cafes" />
      <div id="demo" />
    </main>
  );
}
