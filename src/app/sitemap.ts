import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seoConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.siteUrl;
  const lastRevisionDate = new Date("2026-11-19");

  return [
    {
      url: `${siteUrl}`,
      lastModified: lastRevisionDate,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${siteUrl}/images/hero-arch-crop.jpg`,
        `${siteUrl}/images/contact-laundry.jpg`,
        `${siteUrl}/images/apm-logo.svg`,
      ],
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: lastRevisionDate,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${siteUrl}/images/contact-laundry.jpg`],
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: lastRevisionDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: lastRevisionDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
