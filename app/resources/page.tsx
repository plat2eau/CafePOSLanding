import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer, Navbar } from "@/components/sections";
import { Badge, Container, Section } from "@/components/ui";
import { resourcePages } from "@/lib/resources";
import { seoKeywords, socialImage } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: {
    canonical: "/resources",
  },
  description:
    "Cafe POS guides for Indian cafes researching QR ordering, table billing, KOT flow, setup, and OrderDesk POS.",
  keywords: seoKeywords,
  openGraph: {
    description:
      "Cafe POS guides for Indian cafes researching QR ordering, billing, KOT flow, and setup.",
    images: [socialImage],
    title: "Cafe POS Resources for Indian Cafes",
    type: "website",
    url: "/resources",
  },
  title: "Cafe POS Resources for Indian Cafes",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-warm text-charcoal">
      <Navbar />
      <Section className="pb-12 pt-10 sm:pb-16 lg:pb-20" tone="warm">
        <Container>
          <div className="max-w-3xl">
            <Badge tone="orange">Cafe POS Resources</Badge>
            <h1 className="mt-4 font-heading text-[2.35rem] font-extrabold leading-tight text-navy sm:text-5xl">
              Guides for cafes comparing QR ordering, billing, and POS workflows.
            </h1>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              Practical OrderDesk POS resources for Indian cafe owners who want
              a cleaner way to connect orders, tables, KOTs, billing, and daily
              tracking.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resourcePages.map((page) => (
              <Link
                className="group flex min-h-[18rem] flex-col rounded-card border border-border bg-white p-5 shadow-[0_16px_44px_rgba(23,40,59,0.07)] transition hover:-translate-y-0.5 hover:border-orange"
                href={`/resources/${page.slug}`}
                key={page.slug}
              >
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-orange">
                  {page.eyebrow}
                </span>
                <h2 className="mt-4 font-heading text-xl font-extrabold leading-7 text-navy">
                  {page.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {page.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-navy group-hover:text-orange">
                  Read guide
                  <ArrowRight aria-hidden="true" className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <Footer />
    </main>
  );
}
