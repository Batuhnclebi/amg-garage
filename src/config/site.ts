/**
 * AMG Garage — tek noktadan düzenlenebilir site yapılandırması.
 * Telefonlar, sosyal bağlantılar, Instagram galerisi ve hero görseli buradan güncellenir.
 */

export const business = {
  name: "AMG Garage",
  city: "Düzce",
  country: "TR",
  phones: [
    { display: "+90 505 650 33 35", tel: "+905056503335" },
    { display: "+90 552 739 58 81", tel: "+905527395881" },
    { display: "+90 534 055 52 81", tel: "+905340555281" },
  ],
  mapsUrl: "https://maps.app.goo.gl/pAHKJj33vyUEbHRY6",
  instagram: {
    url: "https://www.instagram.com/amg_garaj_81/",
    handle: "@amg_garaj_81",
  },
  tiktok: {
    url: "https://www.tiktok.com/@amggarage.duzce",
    handle: "@amggarage.duzce",
  },
  /**
   * Doğrulanmamış bilgiler bilinçli olarak boş bırakıldı.
   * Doğruladığınızda doldurun; JSON-LD ve iletişim bölümünde otomatik kullanılabilir.
   */
  streetAddress: null as string | null,
  openingHours: null as string | null,
} as const;

/** Üretim alan adı. Boşsa canonical, sitemap ve Open Graph URL'leri üretilmez. */
export const siteUrl: string | null =
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "") || null;

export const seo = {
  title: "AMG Garage Düzce | Mercedes-Benz Özel Servis",
  description:
    "Düzce'de Mercedes-Benz araçlara özel hizmet veren AMG Garage. Çalışmaları Instagram'da inceleyin, konumu Google Haritalar'da açın ve hemen arayın.",
  keywords: [
    "Düzce Mercedes özel servis",
    "Düzce Mercedes-Benz servisi",
    "AMG Garage Düzce",
    "Düzce Mercedes bakım servisi",
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Instagram galerisi                                                  */
/* ------------------------------------------------------------------ */

export type InstagramPost = {
  /** Gönderinin kalıcı bağlantısı, ör. https://www.instagram.com/p/XXXXXXXX/ */
  permalink: string;
  /**
   * İsteğe bağlı yerel görsel (public/ altında), ör. "/instagram/01.jpg".
   * Verilirse kare bir kartta gösterilir ve tıklanınca gönderiye gider.
   * Verilmezse resmî Instagram embed'i, ziyaretçi isteyince yüklenir.
   */
  image?: string;
  /** Görselin açıklayıcı alt metni (Türkçe). */
  alt: string;
};

/**
 * Gerçek gönderilerinizi buraya ekleyin. Boş bırakılırsa Instagram'a yönlendiren
 * önizleme alanı gösterilir; sahte gönderi üretilmez.
 *
 * Örnek:
 * { permalink: "https://www.instagram.com/p/XXXXXXXX/", image: "/instagram/01.jpg", alt: "..." }
 */
export const instagramPosts: InstagramPost[] = [];

/* ------------------------------------------------------------------ */
/* Hero görseli                                                        */
/* ------------------------------------------------------------------ */

export type HeroImage = {
  /** public/ altındaki dosya, ör. "/images/hero.jpg" */
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Kendi araç/servis fotoğrafınızı public/images/ altına koyup burada tanımlayın.
 * null ise koyu, özgün bir tipografik/ışık kompozisyonu kullanılır.
 */
export const heroImage: HeroImage | null = null;
