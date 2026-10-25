import Image from "next/image";
import { ArrowIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";
import { business, heroImage } from "@/config/site";
import { btnPrimary, btnSecondary } from "@/lib/ui";

export default function Hero() {
  const primaryPhone = business.phones[0];

  return (
    <section
      aria-labelledby="hero-baslik"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-ink"
    >
      {/* Arka plan: kendi fotoğrafınız varsa o, yoksa özgün ışık/çizgi kompozisyonu */}
      {heroImage ? (
        <>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            priority
            sizes="100vw"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        </>
      ) : (
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_85%_15%,rgba(200,22,31,0.30),transparent_70%)]" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.08]" focusable="false">
            <defs>
              <pattern id="hero-lines" width="56" height="56" patternUnits="userSpaceOnUse" patternTransform="rotate(-24)">
                <rect width="1" height="56" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-lines)" />
          </svg>
          <div className="absolute -right-24 top-0 h-full w-40 -skew-x-[18deg] bg-amg/90 sm:w-56" />
          <div className="absolute -right-4 top-0 h-full w-3 -skew-x-[18deg] bg-white/90 sm:right-10" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent" />
        </div>
      )}

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-24">
        <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-mist sm:text-sm">
          <span aria-hidden="true" className="h-px w-10 bg-amg" />
          Düzce · Mercedes-Benz Özel Servis
        </p>

        <h1
          id="hero-baslik"
          className="max-w-4xl font-[family-name:var(--font-display)] font-extrabold uppercase leading-[0.95] tracking-tight"
        >
          <span className="block text-6xl sm:text-8xl lg:text-9xl">AMG Garaj</span>
          <span className="mt-3 block text-2xl text-zinc-200 sm:text-4xl lg:text-5xl">
            Düzce&apos;de Mercedes-Benz özel servisi
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          Mercedes-Benz araçlara özel hizmet veren AMG Garaj, Düzce&apos;de aracınıza özenle
          yaklaşan bir servis deneyimi sunmayı hedefler. Çalışmalarımızı inceleyin, konumumuzu
          açın veya doğrudan arayın.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
          >
            <MapPinIcon />
            Google Haritalar&apos;da Konumu Aç
            <span className="sr-only"> (yeni sekmede açılır)</span>
          </a>
          <a href={`tel:${primaryPhone.tel}`} className={btnSecondary}>
            <PhoneIcon />
            Hemen Ara
            <span className="sr-only">: {primaryPhone.display}</span>
          </a>
        </div>

        <a
          href="#hakkimizda"
          className="mt-12 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mist transition-colors hover:text-white sm:inline-flex"
        >
          Keşfet
          <ArrowIcon className="h-4 w-4 rotate-90" />
        </a>
      </div>
    </section>
  );
}
