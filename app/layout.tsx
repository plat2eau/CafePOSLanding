import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DemoClickTracker } from "@/components/analytics/demo-click-tracker";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://orderdesk.example.com"),
  title: {
    default: "OrderDesk | Cafe-First POS",
    template: "%s | OrderDesk",
  },
  description:
    "OrderDesk helps cafes manage QR ordering, live orders, tables, billing, sales reports, and purchases from one simple POS.",
  openGraph: {
    description:
      "Cafe-first POS software for QR ordering, live orders, tables, billing, reports, and purchases.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "OrderDesk | Cafe-First POS",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Run your cafe with QR ordering, live orders, tables, billing, reports, and purchases in one place.",
    images: ["/opengraph-image"],
    title: "OrderDesk | Cafe-First POS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <DemoClickTracker />
        <Analytics />
      </body>
    </html>
  );
}
