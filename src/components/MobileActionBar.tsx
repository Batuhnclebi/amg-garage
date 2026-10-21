import { MapPinIcon, PhoneIcon } from "@/components/Icons";
import { business } from "@/config/site";

/** Yalnızca mobilde görünen sabit alt aksiyon çubuğu. Footer, çubuk için alt boşluk bırakır. */
export default function MobileActionBar() {
  const phone = business.phones[0];

  return (
    <div
      role="region"
      aria-label="Hızlı işlemler"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-white/10 bg-line pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <a
        href={`tel:${phone.tel}`}
        className="flex min-h-14 items-center justify-center gap-2 bg-amg text-sm font-bold uppercase tracking-wider text-white"
      >
        <PhoneIcon />
        Ara
        <span className="sr-only">: {phone.display}</span>
      </a>
      <a
        href={business.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-14 items-center justify-center gap-2 bg-ink text-sm font-bold uppercase tracking-wider text-white"
      >
        <MapPinIcon />
        Konum
        <span className="sr-only"> (yeni sekmede açılır)</span>
      </a>
    </div>
  );
}
