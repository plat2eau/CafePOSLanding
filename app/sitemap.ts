import type { MetadataRoute } from "next";
import { resourcePages } from "@/lib/resources";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-12");

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 1,
      url: absoluteUrl("/"),
    },
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 0.9,
      url: absoluteUrl("/orderdeskpos"),
    },
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 0.8,
      url: absoluteUrl("/resources"),
    },
  ];

  const resourceRoutes: MetadataRoute.Sitemap = resourcePages.map((page) => ({
    changeFrequency: "monthly",
    lastModified: new Date(page.updatedAt),
    priority: 0.7,
    url: absoluteUrl(`/resources/${page.slug}`),
  }));

  return [...coreRoutes, ...resourceRoutes];
}
