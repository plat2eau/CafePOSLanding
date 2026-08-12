import { Badge, Container, Section } from "@/components/ui";
import type { SectionTone } from "@/components/ui/section";
import { buyerFaqs } from "@/lib/seo";

type SeoFaqSectionProps = {
  tone?: SectionTone;
};

export function SeoFaqSection({ tone = "warm" }: SeoFaqSectionProps) {
  return (
    <Section id="faq" tone={tone}>
      <Container>
        <div className="max-w-3xl">
          <Badge tone="teal">Cafe POS Questions</Badge>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Questions cafe owners ask before trying OrderDesk POS.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Clear answers about QR ordering, billing, table management, and the
            OrderDeskPOS name.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {buyerFaqs.map((faq) => (
            <article
              className="rounded-card border border-border bg-white p-5 shadow-[0_14px_38px_rgba(23,40,59,0.07)]"
              key={faq.question}
            >
              <h3 className="font-heading text-lg font-extrabold leading-7 text-navy">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
