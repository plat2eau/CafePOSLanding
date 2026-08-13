import type { Metadata } from "next";
import {
  BarChart3,
  ClipboardList,
  CreditCard,
  QrCode,
  ReceiptText,
  Table2,
} from "lucide-react";
import {
  FinalCTA,
  Footer,
  Navbar,
  SeoFaqSection,
} from "@/components/sections";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge, Button, Container, Section } from "@/components/ui";
import { faqPageJsonLd, softwareApplicationJsonLd } from "@/lib/schema";
import { seoKeywords, siteConfig, socialImage } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: {
    canonical: "/orderdeskpos",
  },
  description:
    "OrderDeskPOS is the exact-match alias for OrderDesk POS, cafe-first POS software for Indian cafes with QR ordering, tables, billing, and sales tracking.",
  keywords: seoKeywords,
  openGraph: {
    description:
      "OrderDeskPOS is the exact-match alias for OrderDesk POS, cafe-first POS software for Indian cafes.",
    images: [socialImage],
    title: "OrderDeskPOS | OrderDesk POS for Indian Cafes",
    type: "website",
    url: "/orderdeskpos",
  },
  title: "OrderDeskPOS | OrderDesk POS for Indian Cafes",
  twitter: {
    card: "summary_large_image",
    description:
      "OrderDesk POS helps Indian cafes run QR ordering, tables, billing, and daily tracking.",
    images: [socialImage],
    title: "OrderDeskPOS | OrderDesk POS for Indian Cafes",
  },
};

const capabilities = [
  {
    copy: "Customers scan a table code, browse your live menu, and place orders from their phone.",
    icon: QrCode,
    title: "QR table ordering",
  },
  {
    copy: "Staff can see new, preparing, ready, and served orders without chasing paper tickets.",
    icon: ReceiptText,
    title: "Live order flow",
  },
  {
    copy: "Orders stay attached to table sessions so billing and pending payments are easier to control.",
    icon: Table2,
    title: "Tables and bills",
  },
  {
    copy: "Daily sales, order counts, active tables, and item movement are easier to review.",
    icon: BarChart3,
    title: "Cafe reports",
  },
  {
    copy: "Menu items, categories, availability, prices, and portions can be handled from one place.",
    icon: ClipboardList,
    title: "Menu control",
  },
  {
    copy: "Payments and receipts stay connected to the original table orders and running totals.",
    icon: CreditCard,
    title: "Billing workspace",
  },
];

export default function OrderDeskPosPage() {
  return (
    <main className="min-h-screen bg-warm text-charcoal">
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqPageJsonLd()} />
      <Navbar />

      <Section className="pb-14 pt-10 sm:pb-18 lg:pb-24" tone="warm">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="max-w-3xl">
            <Badge tone="orange">OrderDeskPOS</Badge>
            <h1 className="mt-4 font-heading text-[2.35rem] font-extrabold leading-tight text-navy sm:text-5xl lg:text-6xl">
              OrderDesk POS for Indian cafes.
            </h1>
            <p className="mt-5 text-base leading-7 text-charcoal sm:text-lg sm:leading-8">
              Some cafe owners search for us as OrderDeskPOS. The product name
              is OrderDesk POS: cafe-first POS software for QR ordering, tables,
              billing, live orders, and daily sales tracking.
            </p>
            <p className="mt-3 text-base leading-7 text-muted sm:text-lg">
              It is built for teams that want one simple workspace instead of a
              separate QR menu, paper KOTs, manual bills, and disconnected
              reports.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                data-analytics-event="demo_cta_click"
                data-analytics-label="orderdeskpos_primary"
                href="/#demo"
              >
                Request Free Demo
              </Button>
              <Button href="/resources" variant="secondary">
                Read Cafe POS Guides
              </Button>
            </div>
          </div>

          <div className="rounded-[22px] border border-border bg-white p-5 shadow-[0_22px_70px_rgba(23,40,59,0.1)]">
            <div className="rounded-[18px] bg-navy p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-orange">
                One cafe workspace
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "QR order placed - Table 4",
                  "KOT visible to staff",
                  "Bill updated automatically",
                  "Sales report ready after shift",
                ].map((item) => (
                  <div
                    className="rounded-card bg-white px-4 py-3 text-sm font-extrabold text-navy"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="max-w-3xl">
            <Badge tone="teal">What It Covers</Badge>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              More than a QR menu, less complicated than enterprise software.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              {siteConfig.name} focuses on the operating flow a cafe team needs
              during service.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ copy, icon: Icon, title }) => (
              <article
                className="rounded-card border border-border bg-surface p-5"
                key={title}
              >
                <span className="grid size-10 place-items-center rounded-full bg-navy text-white">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={2.25} />
                </span>
                <h3 className="mt-4 font-heading text-xl font-extrabold text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <SeoFaqSection tone="surface" />
      <FinalCTA />
      <Footer />
    </main>
  );
}
