import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";

// /robots.txt olarak sunulur. Alan adı tanımlıysa sitemap bağlantısı eklenir.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl } : {}),
  };
}
