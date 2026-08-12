import { orderDeskLogoUrl } from "@/lib/brand";

export const siteConfig = {
  defaultUrl: "https://orderdeskpos.com",
  description:
    "OrderDesk POS helps Indian cafes manage QR ordering, live orders, tables, billing, sales reports, and purchases from one simple POS.",
  exactAlias: "OrderDeskPOS",
  faviconUrl:
    "https://sxhqk8enpzaknmfx.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%2012%2C%202026%2C%2010_26_43%20PM.png",
  logoUrl: orderDeskLogoUrl,
  name: "OrderDesk POS",
  shortDescription:
    "Cafe-first POS software for QR ordering, live orders, tables, billing, reports, and purchases.",
};

export const seoKeywords = [
  "orderdeskpos",
  "OrderDesk POS",
  "OrderDeskPOS",
  "order desk pos",
  "orderdesk cafe pos",
  "orderdeskpos cafe pos india",
  "orderdesk pos for cafes",
  "qr ordering pos for cafes india",
  "cafe pos with qr ordering and billing",
  "simple cafe billing software with qr ordering",
];

export type BuyerFaq = {
  answer: string;
  question: string;
};

export const buyerFaqs: BuyerFaq[] = [
  {
    question: "What is OrderDesk POS?",
    answer:
      "OrderDesk POS is cafe-first POS software for Indian cafes that connects QR ordering, live orders, tables, billing, sales reports, and purchase tracking in one workspace.",
  },
  {
    question: "Is OrderDeskPOS the same as OrderDesk POS?",
    answer:
      "Yes. OrderDeskPOS is the exact-match alias people may search for, while OrderDesk POS is the readable product name used on the website.",
  },
  {
    question: "Does OrderDesk POS support QR ordering for cafe tables?",
    answer:
      "Yes. Customers can scan a table QR code, open the menu, place an order, and send it to staff without installing an app.",
  },
  {
    question: "Can OrderDesk POS manage billing and tables together?",
    answer:
      "Yes. Orders stay connected to table sessions so staff can track open bills, pending payments, and daily sales more clearly.",
  },
  {
    question: "Who is OrderDesk POS built for?",
    answer:
      "OrderDesk POS is built first for Indian cafes, coffee shops, small restaurants, and growing food businesses that want a simple operating system.",
  },
  {
    question: "How can a cafe try OrderDesk POS?",
    answer:
      "Cafes can request a free demo or early pilot setup call from the website. The current focus is a guided setup for selected cafes.",
  },
];

export function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || siteConfig.defaultUrl;

  try {
    const url = new URL(rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`);

    url.hash = "";
    url.pathname = "/";
    url.search = "";

    return url;
  } catch {
    return new URL(siteConfig.defaultUrl);
  }
}

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}

export function getSocialLinks() {
  return (process.env.NEXT_PUBLIC_SOCIAL_URLS || "")
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean);
}
