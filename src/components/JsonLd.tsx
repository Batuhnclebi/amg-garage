import { business, seo, siteUrl } from "@/config/site";

/**
 * Yalnızca doğrulanmış bilgilerle yapılandırılmış veri.
 * Bilerek yer ALMAYANLAR: aggregateRating, review, çalışma saatleri, tam adres (doğrulanana kadar).
 */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: business.name,
    description: seo.description,
    telephone: business.phones.map((p) => p.tel),
    hasMap: business.mapsUrl,
    sameAs: [business.instagram.url, business.tiktok.url],
    areaServed: { "@type": "City", name: business.city },
    address: {
      "@type": "PostalAddress",
      ...(business.streetAddress ? { streetAddress: business.streetAddress } : {}),
      addressLocality: business.city,
      addressCountry: business.country,
    },
    ...(siteUrl ? { url: siteUrl } : {}),
    ...(business.openingHours ? { openingHours: business.openingHours } : {}),
  };

  return (
    <script
      type="application/ld+json"
      // Veri yalnızca bu dosyadaki sabit yapılandırmadan üretilir.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
