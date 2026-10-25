export const business = {
  name: "AMG Garaj",
  city: "Düzce",
  country: "TR",
  phones: [
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

export type CustomerReview = {
  author: string;
  text: string;
  when?: string;
};

export const customerReviews: CustomerReview[] = [
  {
    author: "Emre K***",
    text: `Aracım Mercedes C180 W204 2012 CGI model. Aracımın hem ön ana aküsünü hem de yedekleme aküsünü değiştirdikten sonra, Start-Stop ve Hold özellikleri çalışmaz oldu. Aküm 80 amperlik AGM akü. Başta sorunun aküden kaynaklandığını düşünüyordum. Bu nedenle Akın Bey ile iletişime geçtim. Aküyü farklı bir yerden almama rağmen, “Gerekirse yeni akü takar, sorunu yine de çözeriz.” dedi. en de aracı alıp gittim. Yalçın Bey de sağ olsun hemen ilgilendi. Önce akü sensörüne baktı, elektrik gelmediğini fark etti. Ardından bagajdaki beyinden şüphelendi. Kontrol sırasında beynin su aldığını ve oksitlenmeye bağlı olarak bir ayağının kırıldığını tespit etti. Sağ olsun, tamir için yedek parça bile temin etti. Bana sadece küçük bir lehim yapmak kaldı ve tüm sorun çözüldü. Nokta atışıyla sorunu bulan Yalçın Bey’e ve samimi tutumundan dolayı Akın Bey’e teşekkür ederim. Sadece Mercedes araçlara bakan bu ekibin, işini ne kadar profesyonel yaptığını ve sorunu adım adım göstererek nasıl çözüm ürettiklerini görmek gerçekten takdire şayandı. Kendilerine gönülden teşekkür ederim.`,
  },
  {
    author: "Hilal A***",
    text: `Yolculuğum sırasında Mercedes aracımla ilgili yaşadığım bir sorun nedeniyle yolda kalınca Mercedes-Benz Otomobil Özel Servis AMG Garaj’a gittim. İlk andan itibaren Akın Bey ve Yalçın Bey son derece ilgili, güler yüzlü ve çözüm odaklı yaklaştılar. Aracımla titizlikle ilgilenerek yapılan işlemler hakkında detaylı bilgi verdiler ve sorunun kısa sürede çözülmesini sağladılar. Özellikle şehir dışından gelen biri olarak gösterdikleri ilgi, güven veren yaklaşımları ve profesyonellikleri benim için çok kıymetliydi. Gönül rahatlığıyla aracınızı teslim edebileceğiniz, işini özenle yapan güvenilir bir servis. Akın Bey ve Yalçın Bey’e ilgileri ve emekleri için ayrıca teşekkür ederim. Kesinlikle tavsiye ediyorum.`,
  },  
  {
    author: "Yüksel G***",
    text: `Bolu’da başka bir serviste iki gün uğraşmamıza rağmen bir sorunu çözmeye çalışırken başka bir sorun ortaya çıktı ve ne yazık ki problemi bulamadılar. Düzce’de ise arkadaşlar aracı kısa sürede, yaklaşık 1,5 saat içerisinde kontrol edip sorunu tespit ederek çözdüler. İlgi, alaka, güler yüz ve işçiliklerinden çok memnun kaldım. Böyle işini bilen ve müşterisine yardımcı olmaya çalışan bir servis görmek gerçekten güven veriyor. Gönül rahatlığıyla tavsiye ederim. Özellikle Akin Bey’e ve tüm ekibe emekleri için çok teşekkür ederim.`,
  },    
];

export type InstagramPost = {
  permalink: string;
  image?: string;
  alt: string;
};

export const instagramPosts: InstagramPost[] = [  
  {
    permalink: "https://www.instagram.com/reel/DYmfUQssdVg/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    image: "/images/egzozgazi.jpg",
    alt: "Farklı servislerde çözülemeyen sorun giderilmesi",
  },
  {
    permalink: "https://www.instagram.com/reel/Dbtf7c3MqEq/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    image: "/images/kacak.jpg",
    alt: "Hava kaçağı duman testi ile tespiti",
  },
  {
    permalink: "https://www.instagram.com/reel/DZ_9o8ssh-d/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    image: "/images/kronik.jpg",
    alt: "Kronik sorun giderilmesi",
  },
];

/* ------------------------------------------------------------------ */
/* Hero görseli                                                        */
/* ------------------------------------------------------------------ */

export type HeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const heroImage: HeroImage | null = {
  src: "/images/mrclogo.png",
  alt: "AMG Garage Mercedes-Benz özel servis",
  width: 1920,
  height: 1080,
};