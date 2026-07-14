import { MetadataRoute } from "next";

const siteUrl = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about/who-we-are",
    "/about/chairman-message",
    "/about/associations",
    "/solutions",
    "/services",
    "/infrastructure",
    "/products/tmt-bar-mill",
    "/products/structural-mill",
    "/products/wire-rod-mill",
    "/products/mill-stands",
    "/products/reheating-furnace",
    "/products/rolling-mill-gearbox",
    "/contact",
    "/contact/product-inquiry",
    "/contact/customer-feedback",
    "/contact/customer-support",
    "/career",
    "/gallery",
    "/clients",
    "/projects",
    "/insights/blogs",
    "/insights/videos",
    "/media/news",
    "/media/events",
    "/media/newsletters",
  ];

  return staticPages.map((page) => ({
    url: `${siteUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}