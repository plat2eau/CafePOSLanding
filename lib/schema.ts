import type { BuyerFaq } from "@/lib/seo";
import type { ResourcePage } from "@/lib/resources";
import {
  absoluteUrl,
  buyerFaqs,
  getSocialLinks,
  siteConfig,
} from "@/lib/seo";

function organizationNode() {
  const sameAs = getSocialLinks();

  return {
    "@id": `${absoluteUrl("/")}#organization`,
    "@type": "Organization",
    alternateName: [siteConfig.exactAlias, "OrderDesk Cafe POS"],
    description: siteConfig.description,
    logo: siteConfig.logoUrl,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

function websiteNode() {
  return {
    "@id": `${absoluteUrl("/")}#website`,
    "@type": "WebSite",
    alternateName: siteConfig.exactAlias,
    description: siteConfig.description,
    inLanguage: "en-IN",
    name: siteConfig.name,
    publisher: {
      "@id": `${absoluteUrl("/")}#organization`,
    },
    url: absoluteUrl("/"),
  };
}

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode()],
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@id": `${absoluteUrl("/")}#software`,
    "@type": "SoftwareApplication",
    alternateName: siteConfig.exactAlias,
    applicationCategory: "BusinessApplication",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Indian cafes and restaurants",
    },
    brand: {
      "@id": `${absoluteUrl("/")}#organization`,
    },
    description: siteConfig.description,
    image: absoluteUrl("/opengraph-image"),
    name: siteConfig.name,
    operatingSystem: "Web",
    url: absoluteUrl("/"),
  };
}

export function faqPageJsonLd(faqs: BuyerFaq[] = buyerFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
      name: faq.question,
    })),
  };
}

export function articleJsonLd(page: ResourcePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    author: {
      "@id": `${absoluteUrl("/")}#organization`,
    },
    dateModified: page.updatedAt,
    datePublished: page.publishedAt,
    description: page.description,
    headline: page.title,
    inLanguage: "en-IN",
    mainEntityOfPage: absoluteUrl(`/resources/${page.slug}`),
    publisher: {
      "@id": `${absoluteUrl("/")}#organization`,
    },
  };
}
