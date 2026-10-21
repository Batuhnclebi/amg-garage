# AMG Garage Düzce — Tanıtım Sitesi

Düzce'deki Mercedes-Benz özel servisi **AMG Garage** için tek sayfalık, mobil öncelikli tanıtım sitesi.
Teknoloji: Next.js (App Router) · React · TypeScript · Tailwind CSS. Veritabanı, panel veya form yoktur.

> **Durum notu:** Bu proje, npm kayıt sunucusuna erişimin engelli olduğu bir ortamda yazıldı.
> Bu yüzden `npm install`, `lint`, `typecheck` ve `build` komutları **henüz çalıştırılmadı**.
> Aşağıdaki "Kurulum" adımlarını kendi bilgisayarınızda uygulayıp çıktıları kontrol edin.
> Docker imajı ve Vercel dağıtımı da test edilmedi.

## 1. Gereksinimler ve kurulum

- Node.js 20 veya üstü (Docker imajı Node 22 kullanır)
- npm
- Git, bir GitHub hesabı ve (yayın için) bir Vercel hesabı

```bash
npm install          # bağımlılıkları kurar ve package-lock.json üretir (lock dosyasını commit edin)
cp .env.example .env.local
```

## 2. Yerel geliştirme

```bash
npm run dev
```

Site `http://localhost:3000` adresinde açılır.

## 3. Üretim derlemesi ve kontroller

```bash
npm run lint         # ESLint
npm run typecheck    # TypeScript
npm run build        # üretim derlemesi
npm run start        # derlenmiş siteyi çalıştırır
```

Projede otomatik test yoktur; kalite kontrolü lint, type-check ve build ile yapılır.
Yayından önce Chrome DevTools > Lighthouse ile mobil ölçüm almanız önerilir.

## 4. Docker

`Dockerfile`, Next.js `standalone` çıktısını kullanan çok aşamalı bir üretim imajı oluşturur.

```bash
# İmajı oluştur (alan adı biliniyorsa NEXT_PUBLIC_SITE_URL verin)
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://www.ornek-alan-adi.com -t amg-garage .

# Çalıştır
docker run --rm -p 3000:3000 amg-garage
```

Google yorumlarını Docker'da kullanacaksanız, anahtarlar imaja yazılmasın diye build secret kullanın:

```bash
docker build --secret id=google_env,src=.env.local -t amg-garage .
docker run --rm -p 3000:3000 \
  -e GOOGLE_PLACES_API_KEY=... -e GOOGLE_PLACE_ID=... amg-garage
```

`.env.local` içindeki değerler derleme sırasında okunur; çalışma anındaki `-e` değişkenleri yorumların
24 saatte bir yenilenmesini sağlar. Yorumlar kullanılmayacaksa bu adım gerekmez.

**Önemli:** Vercel, Dockerfile'ı kullanmaz. Dockerfile yalnızca kendi sunucunuzda veya başka bir konteyner
platformunda çalıştırmak içindir. `output: "standalone"` ayarı yalnızca `DOCKER_BUILD=1` iken (Dockerfile içinde) açılır.

## 5. GitHub'a gönderme

```bash
git init
git add .
git commit -m "AMG Garage sitesi"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADI/amg-garage.git
git push -u origin main
```

`.env*` dosyaları `.gitignore` ile dışarıda tutulur (`.env.example` hariç). Gizli anahtarları asla commit etmeyin.

## 6. Vercel'de yayınlama

1. Vercel panelinde **Add New → Project** ile GitHub deposunu içe aktarın.
2. Framework otomatik olarak **Next.js** seçilir; derleme ayarlarını değiştirmenize gerek yoktur.
3. **Environment Variables** bölümüne 7. adımdaki değişkenleri ekleyin.
4. **Deploy**'a basın. Sonraki her `git push` otomatik yeni yayın oluşturur.
5. Alan adınızı **Settings → Domains** bölümünden bağlayın.

## 7. Ortam değişkenleri

| Değişken | Zorunlu | Açıklama |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Hayır (canlıda önerilir) | Örn. `https://www.ornek-alan-adi.com`. Canonical, Open Graph URL, `sitemap.xml` ve `robots.txt` içindeki sitemap bağlantısı bundan üretilir. |
| `GOOGLE_PLACES_API_KEY` | Hayır | Google yorumları için sunucu tarafı API anahtarı. |
| `GOOGLE_PLACE_ID` | Hayır | İşletmenin Google Place ID değeri. |

Değişken eklendikten sonra Vercel'de yeniden dağıtım (redeploy) gerekir.
Anahtarlar kaynak koda gömülmez; başına `NEXT_PUBLIC_` eklemeyin, yoksa tarayıcıya açılır.

## 8. Instagram ve Google yorumları: nasıl çalışır, neler gerekir

### Instagram

Bu ortamdan Instagram'a erişilemediği için gerçek gönderi bağlantılarını göremedim; **galeri varsayılan olarak boştur**
ve sahte gönderi içermez. Boşken Instagram hesabına yönlendiren bir önizleme alanı görünür.

Gerçek gönderileri göstermek için `src/config/site.ts` içindeki `instagramPosts` listesine ekleyin:

```ts
export const instagramPosts: InstagramPost[] = [
  {
    permalink: "https://www.instagram.com/p/GÖNDERİ_KODU/",
    image: "/instagram/01.jpg", // isteğe bağlı: public/instagram/ altına koyduğunuz kendi görseliniz
    alt: "Görselin Türkçe açıklaması",
  },
];
```

- **`image` verilirse:** kare kartta gösterilir, tıklanınca gönderi açılır. Görseli kendiniz kaydedip `public/instagram/` altına koyarsınız (gönderi sahibi olarak kendi içeriğinizi kullanırsınız).
- **`image` verilmezse:** resmî Instagram embed'i kullanılır. Üçüncü taraf script (`instagram.com/embed.js`) yalnızca ziyaretçi "Gönderiyi göster" düğmesine basınca yüklenir; sayfa hızı ve gizlilik korunur. Bu yöntem API anahtarı gerektirmez.
- **Otomatik çekme:** Instagram Basic Display API kullanımdan kaldırıldı. Otomatik akış için Instagram'ın güncel API'si (profesyonel hesap, Meta uygulaması ve izin/inceleme süreci) veya ücretli bir üçüncü taraf servis gerekir; bu projeye bilerek eklenmedi. Güncel koşulları Meta'nın geliştirici dokümanlarından kontrol edin.

### Google yorumları

Yorumlar yalnızca resmî **Places API (New)** ile gösterilir; Google sayfaları kazınmaz.
Değişkenler tanımlı değilse bölüm, sahte kart üretmeden Google Haritalar'a yönlendiren bir panel gösterir.

Etkinleştirmek için:

1. Google Cloud'da proje oluşturup **faturalandırmayı** açın ve **Places API (New)**'yi etkinleştirin.
2. Bir API anahtarı oluşturun ve **API kısıtlaması** olarak yalnızca Places API (New)'yi seçin. Anahtar sunucuda kullanıldığı için HTTP referrer kısıtı uygulanmaz; kısıtı API düzeyinde yapın ve kota/bütçe uyarısı tanımlayın.
3. İşletmenizin **Place ID** değerini Google'ın Place ID Finder aracıyla bulun. (Kısa `maps.app.goo.gl` bağlantısı Place ID içermez; bu ortamda çözümleyemedim.)
4. İki değeri `GOOGLE_PLACES_API_KEY` ve `GOOGLE_PLACE_ID` olarak tanımlayın.

Bilmeniz gerekenler: Places API en fazla 5 yorum döndürür; yorumlar 24 saatte bir yenilenir; puan/yorum alanları ücretli bir
fiyatlandırma katmanına girer (güncel fiyatı Google Cloud'dan kontrol edin); Google verileri kullanılırken atıf gösterilmelidir
(sitede "Google'dan alınmıştır" notu vardır). Yapılandırılmış veriye (schema) **aggregateRating/review eklenmez**.

## 9. Nereden ne güncellenir

Tüm içerik `src/config/site.ts` dosyasındadır:

- Telefon numaraları: `business.phones`
- Google Maps bağlantısı: `business.mapsUrl`
- Instagram / TikTok: `business.instagram`, `business.tiktok`
- Doğrulanınca adres ve çalışma saatleri: `business.streetAddress`, `business.openingHours` (JSON-LD'ye otomatik girer)
- SEO başlığı ve açıklaması: `seo`
- Instagram galerisi: `instagramPosts`
- Hero fotoğrafı: `heroImage` (dosyayı `public/images/` altına koyun; `null` iken özgün, fotoğrafsız bir kompozisyon kullanılır)

Sayfa metinleri `src/components/` altındadır (`Hero.tsx`, `About.tsx` …). Hakkımızda ve hero metinleri bilinçli olarak genel
tutuldu; deneyim yılı, yetki, sertifika veya hizmet listesi içermez. Doğruladığınız bilgileri siz ekleyin.

Yazı tipleri sistem yazı tipleridir (harici font yüklenmez). Marka logosu, "AMG Garage" yazısına dayalı özgün bir tipografik
işarettir (`Logo.tsx`, `src/app/icon.svg`); Mercedes-Benz/AMG logoları kullanılmaz.

## 10. Alan adı belli olunca yapılacak SEO işleri

1. `NEXT_PUBLIC_SITE_URL` değişkenini Vercel'de ve gerekirse `.env.local`'da tanımlayıp yeniden dağıtın. Bu, canonical, Open Graph URL'si, `/sitemap.xml` ve `/robots.txt` içindeki sitemap satırını otomatik üretir. (`robots.txt` ve `sitemap.xml`, `src/app/robots.ts` ve `src/app/sitemap.ts` dosyalarından üretilir.)
2. [Google Search Console](https://search.google.com/search-console)'a siteyi ekleyin ve `sitemap.xml`'i gönderin.
3. Google İşletme Profili'ndeki adres, telefon ve site adresinin bu siteyle aynı olduğundan emin olun.
4. Tam adres ve çalışma saatlerini doğrulayıp `site.ts` içine girin.
5. `https://alan-adiniz/opengraph-image` adresinden paylaşım görselini kontrol edin; isterseniz `src/app/opengraph-image.tsx` yerine kendi 1200×630 görselinizi koyun.
6. Gerçek fotoğraflar eklerken `alt` metinlerini açıklayıcı yazın.
