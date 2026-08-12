import type { ComponentType } from "react";
import {
  AudienceSection,
  DemoRequestForm,
  FeatureBentoGrid,
  FinalCTA,
  Footer,
  HeroBenefitStrip,
  HeroSection,
  Navbar,
  PilotOnboardingSection,
  ProblemSolutionSection,
} from "@/components/sections";
import type { SectionTone } from "@/components/ui/section";

type AlternatingSection = {
  Component: ComponentType<{ tone: SectionTone }>;
  key: string;
};

const toneCycle: SectionTone[] = ["warm", "white", "surface"];

const alternatingSections: AlternatingSection[] = [
  { Component: HeroSection, key: "hero" },
  { Component: HeroBenefitStrip, key: "how-it-works" },
  { Component: FeatureBentoGrid, key: "features" },
  { Component: ProblemSolutionSection, key: "problem-solution" },
  { Component: AudienceSection, key: "audience" },
  { Component: PilotOnboardingSection, key: "pilot-onboarding" },
  { Component: DemoRequestForm, key: "demo-request" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-warm text-charcoal">
      <Navbar />
      {alternatingSections.map(({ Component, key }, index) => (
        <Component key={key} tone={toneCycle[index % toneCycle.length]} />
      ))}
      <FinalCTA />
      <Footer />
    </main>
  );
}
