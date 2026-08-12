import { Button, Container, Section } from "@/components/ui";

export function FinalCTA() {
  return (
    <Section className="py-14 sm:py-18" tone="navy">
      <Container className="text-center">
        <h2 className="mx-auto max-w-3xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Ready to Make Your Cafe Easier to Manage?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/76 sm:text-lg">
          See OrderDesk in action and find out how it can work for your cafe.
        </p>
        <Button
          className="mt-7 w-full max-w-xs"
          data-analytics-event="demo_cta_click"
          data-analytics-label="final_cta"
          href="#demo"
        >
          Request a Free Demo
        </Button>
        <p className="mt-4 text-sm font-semibold text-orange">
          Early access available for selected cafes.
        </p>
      </Container>
    </Section>
  );
}
