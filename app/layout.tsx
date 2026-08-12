import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DemoClickTracker } from "@/components/analytics/demo-click-tracker";
import { JsonLd } from "@/components/seo/json-ld";
import { siteJsonLd } from "@/lib/schema";
import { getSiteUrl, seoKeywords, siteConfig } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  category: "Cafe POS software",
  creator: siteConfig.name,
  description: siteConfig.description,
  icons: {
    apple: [{ type: "image/png", url: siteConfig.faviconUrl }],
    icon: [{ type: "image/png", url: siteConfig.faviconUrl }],
    shortcut: [siteConfig.faviconUrl],
  },
  keywords: seoKeywords,
  metadataBase: getSiteUrl(),
  publisher: siteConfig.name,
  robots: {
    follow: true,
    index: true,
  },
  title: {
    default: "OrderDesk POS | Cafe POS Software With QR Ordering",
    template: "%s | OrderDesk POS",
  },
  openGraph: {
    description: siteConfig.shortDescription,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "en_IN",
    siteName: siteConfig.name,
    title: "OrderDesk POS | Cafe POS Software With QR Ordering",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    description: siteConfig.shortDescription,
    images: ["/opengraph-image"],
    title: "OrderDesk POS | Cafe POS Software With QR Ordering",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        <JsonLd data={siteJsonLd()} />
        {children}
        <DemoClickTracker />
        <Analytics />
      </body>
    </html>
  );
}
