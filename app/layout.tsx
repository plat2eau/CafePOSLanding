import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OrderDesk | Cafe POS",
  description: "A cafe-first POS landing page for OrderDesk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
