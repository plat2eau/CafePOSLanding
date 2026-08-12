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
  SeoFaqSection,
} from "@/components/sections";
import { JsonLd } from "@/components/seo/json-ld";
import type { SectionTone } from "@/components/ui/section";
import { faqPageJsonLd, softwareApplicationJsonLd } from "@/lib/schema";

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
  { Component: SeoFaqSection, key: "faq" },
  { Component: DemoRequestForm, key: "demo-request" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-warm text-charcoal">
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqPageJsonLd()} />
      <Navbar />
      {alternatingSections.map(({ Component, key }, index) => (
        <Component key={key} tone={toneCycle[index % toneCycle.length]} />
      ))}
      <FinalCTA />
      <Footer />
    </main>
  );
}
