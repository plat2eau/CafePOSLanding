import { Button, Container, Section } from "@/components/ui";
import type { SectionTone } from "@/components/ui/section";
import { OrderDeskProductMockup } from "./orderdesk-product-mockup";

type HeroSectionProps = {
  tone?: SectionTone;
};

export function HeroSection({ tone = "warm" }: HeroSectionProps) {
  return (
    <Section
      className="overflow-hidden pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-24 lg:pt-18"
      id="top"
      tone={tone}
    >
      <Container className="grid grid-cols-[minmax(0,1fr)] items-center gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <div className="min-w-0 max-w-2xl">
          <h1 className="mt-4 font-heading text-[2.35rem] font-extrabold leading-tight text-navy sm:mt-5 sm:text-5xl lg:text-6xl">
            Run Your Cafe. Simple, Fast & Easy.
          </h1>
          <p className="mt-5 text-base leading-7 text-charcoal sm:mt-6 sm:text-lg sm:leading-8">
            Manage orders, tables, menu, staff and sales all from one simple
            POS.
          </p>
          <p className="mt-3 text-base leading-7 text-muted sm:mt-4 sm:text-lg">
            Let customers order directly from their table using QR codes and
            manage everything from one place.
          </p>
          <div className="mt-7 flex flex-wrap gap-2 sm:mt-9 sm:gap-3">
            <Button
              className="w-full px-4 min-[360px]:w-auto sm:px-5"
              data-analytics-event="demo_cta_click"
              data-analytics-label="hero_primary"
              href="#demo"
            >
              Request a Free Demo
            </Button>
            <Button
              className="w-full px-4 min-[360px]:w-auto sm:px-5"
              href="#how-it-works"
              variant="secondary"
            >
              See How It Works
            </Button>
          </div>
        </div>

        <OrderDeskProductMockup />
      </Container>
    </Section>
  );
}
