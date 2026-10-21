import { InstagramIcon, MapPinIcon, PhoneIcon, TikTokIcon } from "@/components/Icons";
import { business } from "@/config/site";
import { btnGhost, btnPrimary } from "@/lib/ui";

export default function Contact() {
  return (
    <section id="iletisim" aria-labelledby="iletisim-baslik" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amg-bright">
          İletişim
        </p>
        <h2
          id="iletisim-baslik"
          className="font-[family-name:var(--font-display)] text-4xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-6xl"
        >
          Bize ulaşın
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          AMG Garage Düzce&apos;ye telefonla ulaşabilir veya konumumuzu Google Haritalar&apos;da
          açabilirsiniz.
        </p>

        <ul className="mt-10 grid gap-px bg-line sm:grid-cols-3">
          {business.phones.map((phone, index) => (
            <li key={phone.tel} className="bg-ink">
              <a
                href={`tel:${phone.tel}`}
                className="group flex min-h-24 flex-col justify-center gap-1 bg-carbon p-6 transition-colors hover:bg-graphite"
              >
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mist">
                  <PhoneIcon className="h-4 w-4 text-amg-bright" />
                  Telefon {index + 1}
                </span>
                <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-wide sm:text-3xl">
                  {phone.display}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
            <MapPinIcon />
            Google Haritalar&apos;da Konumu Aç
            <span className="sr-only"> (yeni sekmede açılır)</span>
          </a>
          <a href={business.instagram.url} target="_blank" rel="noopener noreferrer" className={btnGhost}>
            <InstagramIcon />
            Instagram
            <span className="sr-only"> (yeni sekmede açılır)</span>
          </a>
          <a href={business.tiktok.url} target="_blank" rel="noopener noreferrer" className={btnGhost}>
            <TikTokIcon />
            TikTok
            <span className="sr-only"> (yeni sekmede açılır)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
