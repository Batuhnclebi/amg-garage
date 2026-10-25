/**
 * AMG Garaj — tek noktadan düzenlenebilir site yapılandırması.
 * Telefonlar, sosyal bağlantılar, Instagram galerisi ve hero görseli buradan güncellenir.
 */

export const business = {
  name: "AMG Garaj",
  city: "Düzce",
  country: "TR",
  phones: [
    // Sıra önemlidir: ilk kişi, sayfadaki "Hemen Ara" ve mobildeki "Ara" butonlarının numarasıdır.
    {
      name: "Akın ÇITLAK",
      title: "Müşteri Danışmanı",
      display: "+90 534 055 5281",
      tel: "+905340555281",
    },
    {
      name: "Atilla ÇEVİK",
      title: "Mekaniker Teknisyen",
      display: "+90 505 650 3335",
      tel: "+905056503335",
    },
    {
      name: "Yalçın KARACA",
      title: "Elektrik Arıza Teşhis Teknisyeni",
      display: "+90 552 739 5881",
      tel: "+905527395881",
    },
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
  title: "AMG Garaj Düzce | Mercedes-Benz Özel Servis",
  description:
    "Düzce'de Mercedes-Benz araçlara özel hizmet veren AMG Garaj. Çalışmaları Instagram'da inceleyin, konumu Google Haritalar'da açın ve hemen arayın.",
  keywords: [
    "Düzce Mercedes özel servis",
    "Düzce Mercedes-Benz servisi",
    "AMG Garaj Düzce",
    "Düzce Mercedes bakım servisi",
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Müşteri yorumları (elle yönetilir)                                  */
/* ------------------------------------------------------------------ */

export type CustomerReview = {
  /** Ad soyad */
  author: string;
  /** Yorum metni. Paragraflar boş satırla ayrılır; uzun yorumlarda "Devamını oku" çıkar. */
  text: string;
  /** İsteğe bağlı, ör. "Ekim 2026". Verilmezse gösterilmez. */
  when?: string;
};

/**
 * Yeni yorum eklemek için listeye bir nesne daha ekleyin. Yalnızca gerçek müşteri
 * yorumlarını, sahibinin onayıyla ekleyin.
 */
export const customerReviews: CustomerReview[] = [
  {
    author: "Emre Koyuncu",
    text: `Aracım Mercedes C180 W204 2012 CGI model. Aracımın hem ön ana aküsünü hem de yedekleme aküsünü değiştirdikten sonra, Start-Stop ve Hold özellikleri çalışmaz oldu. Aküm 80 amperlik AGM akü. Başta sorunun aküden kaynaklandığını düşünüyordum. Bu nedenle Akın Bey ile iletişime geçtim. Aküyü farklı bir yerden almama rağmen, “Gerekirse yeni akü takar, sorunu yine de çözeriz.” dedi.

Ben de aracı alıp gittim. Yalçın Bey de sağ olsun hemen ilgilendi. Önce akü sensörüne baktı, elektrik gelmediğini fark etti. Ardından bagajdaki beyinden şüphelendi. Kontrol sırasında beynin su aldığını ve oksitlenmeye bağlı olarak bir ayağının kırıldığını tespit etti. Sağ olsun, tamir için yedek parça bile temin etti. Bana sadece küçük bir lehim yapmak kaldı ve tüm sorun çözüldü.

Nokta atışıyla sorunu bulan Yalçın Bey’e ve samimi tutumundan dolayı Akın Bey’e teşekkür ederim. Sadece Mercedes araçlara bakan bu ekibin, işini ne kadar profesyonel yaptığını ve sorunu adım adım göstererek nasıl çözüm ürettiklerini görmek gerçekten takdire şayandı. Kendilerine gönülden teşekkür ederim.`,
  },
];

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
export const instagramPosts: InstagramPost[] = [  
  {
    permalink: "https://www.instagram.com/reel/DYmfUQssdVg/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    image: "/instagram/egzozgazi.jpg", // isteğe bağlı: public/instagram/ altına koyduğunuz kendi görseliniz
    alt: "Farklı servislerde çözülemeyen sorun giderilmesi",
  },];

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
