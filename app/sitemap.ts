import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://orderdesk.example.com";

  return [
    {
      changeFrequency: "monthly",
      lastModified: new Date("2026-08-12"),
      priority: 1,
      url: siteUrl,
    },
  ];
}
