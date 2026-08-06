import type { MetadataRoute } from "next";

const BASE_URL = "https://uday-pundir-portfolio.vercel.app";

const routes = [
  "",
  "/about",
  "/projects",
  "/education",
  "/skills",
  "/journey",
  "/achievements",
  "/resume",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
