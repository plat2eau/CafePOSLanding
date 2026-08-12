import { Check } from "lucide-react";
import { Badge, Container, Section } from "@/components/ui";
import type { SectionTone } from "@/components/ui/section";

const statements = [
  "No complicated software.",
  "No unnecessary features.",
  "Just what your team actually needs.",
];

type AudienceSectionProps = {
  tone?: SectionTone;
};

export function AudienceSection({ tone = "warm" }: AudienceSectionProps) {
  return (
    <Section id="for-cafes" tone={tone}>
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center">
        <div>
          <Badge tone="orange">Who This Is For</Badge>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Built for Cafes
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Whether you run a neighbourhood cafe, restaurant or growing food
            business, OrderDesk keeps daily operations simple.
          </p>
          <div className="mt-7 grid gap-3">
            {statements.map((statement) => (
              <div
                className="flex min-h-14 items-center gap-3 rounded-card border border-border bg-white px-4 py-3 shadow-[0_10px_28px_rgba(23,40,59,0.05)]"
                key={statement}
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-teal text-white">
                  <Check aria-hidden="true" className="size-4" strokeWidth={2.7} />
                </span>
                <p className="font-heading text-lg font-extrabold text-navy">
                  {statement}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-border bg-white shadow-[0_22px_70px_rgba(23,40,59,0.12)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Cafe counter with staff preparing coffee and serving customers"
            className="aspect-[4/3] w-full object-cover"
            height="720"
            loading="lazy"
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=82"
            width="960"
          />
        </div>
      </Container>
    </Section>
  );
}
