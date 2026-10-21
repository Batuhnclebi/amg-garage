import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";

// /sitemap.xml olarak sunulur. Gerçek alan adı tanımlanana kadar boş kalır;
// uydurma bir adres üretim URL'si gibi yayınlanmaz.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [{ url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
