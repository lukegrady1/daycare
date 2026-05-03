import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sunnyacres.example";
  const routes = [
    "/",
    "/about",
    "/programs",
    "/programs/infants",
    "/programs/toddlers",
    "/programs/preschool",
    "/programs/pre-k",
    "/staff",
    "/curriculum",
    "/a-day",
    "/tuition",
    "/tour",
    "/faq",
    "/blog",
    "/contact",
    "/careers",
    "/privacy",
    "/accessibility",
  ];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "/" ? 1 : r === "/tour" ? 0.9 : 0.7,
  }));
}
