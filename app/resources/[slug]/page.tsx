import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer, Navbar } from "@/components/sections";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge, Button, Container, Section } from "@/components/ui";
import { articleJsonLd } from "@/lib/schema";
import {
  getResourcePage,
  resourcePages,
  type ResourcePage,
} from "@/lib/resources";
import { seoKeywords } from "@/lib/seo";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resourcePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourcePage(slug);

  if (!page) {
    return {};
  }

  return {
    alternates: {
      canonical: `/resources/${page.slug}`,
    },
    description: page.description,
    keywords: [...seoKeywords, ...page.keywords],
    openGraph: {
      description: page.description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
      title: page.title,
      type: "article",
      url: `/resources/${page.slug}`,
    },
    title: page.title,
    twitter: {
      card: "summary_large_image",
      description: page.description,
      images: ["/opengraph-image"],
      title: page.title,
    },
  };
}

function RelatedResources({ currentPage }: { currentPage: ResourcePage }) {
  const relatedPages = resourcePages
    .filter((page) => page.slug !== currentPage.slug)
    .slice(0, 3);

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {relatedPages.map((page) => (
        <Link
          className="group rounded-card border border-border bg-white p-4 text-sm font-extrabold leading-6 text-navy transition hover:border-orange hover:text-orange"
          href={`/resources/${page.slug}`}
          key={page.slug}
        >
          {page.title}
          <ArrowRight
            aria-hidden="true"
            className="mt-3 size-4 transition group-hover:translate-x-1"
          />
        </Link>
      ))}
    </div>
  );
}

export default async function ResourceDetailPage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const page = getResourcePage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-warm text-charcoal">
      <JsonLd data={articleJsonLd(page)} />
      <Navbar />
      <Section className="pb-10 pt-8 sm:pb-14 lg:pb-18" tone="warm">
        <Container>
          <Button href="/resources" variant="ghost">
            <ArrowLeft aria-hidden="true" className="mr-2 size-4" />
            Resources
          </Button>
          <div className="mt-7 max-w-4xl">
            <Badge tone="orange">{page.eyebrow}</Badge>
            <h1 className="mt-4 font-heading text-[2.3rem] font-extrabold leading-tight text-navy sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              {page.description}
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.25fr)]">
          <article className="max-w-3xl">
            {page.sections.map((section) => (
              <section className="border-b border-border py-8 first:pt-0" key={section.heading}>
                <h2 className="font-heading text-2xl font-extrabold leading-8 text-navy">
                  {section.heading}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted">
                  {section.body}
                </p>
                {section.bullets ? (
                  <ul className="mt-5 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <li className="flex gap-3 text-sm leading-6 text-charcoal" key={bullet}>
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 size-5 shrink-0 text-teal"
                          strokeWidth={2.4}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <div className="mt-8 rounded-card border border-orange/25 bg-orange/10 p-5">
              <h2 className="font-heading text-xl font-extrabold text-navy">
                Key takeaway
              </h2>
              <p className="mt-3 text-base leading-7 text-charcoal">
                {page.takeaway}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                data-analytics-event="demo_cta_click"
                data-analytics-label={`resource_${page.slug}`}
                href="/#demo"
              >
                Request Free Demo
              </Button>
              <Button href="/orderdeskpos" variant="secondary">
                About OrderDeskPOS
              </Button>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-card border border-border bg-surface p-5">
              <h2 className="font-heading text-lg font-extrabold text-navy">
                Focus keywords
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {page.keywords.map((keyword) => (
                  <span
                    className="rounded-full border border-border bg-white px-3 py-1 text-xs font-bold text-muted"
                    key={keyword}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <Badge tone="teal">Next Reads</Badge>
              <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy">
                Related cafe POS guides
              </h2>
            </div>
            <Button href="/resources" variant="secondary">
              View all
            </Button>
          </div>
          <RelatedResources currentPage={page} />
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
