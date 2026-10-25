import { MapPinIcon } from "@/components/Icons";
import ReviewCard from "@/components/ReviewCard";
import { business, customerReviews } from "@/config/site";
import { btnSecondary } from "@/lib/ui";

export default function ReviewsSection() {
  if (customerReviews.length === 0) return null;

  const single = customerReviews.length === 1;

  return (
    <section id="yorumlar" aria-labelledby="yorumlar-baslik" className="bg-carbon py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amg-bright">
              Müşteri Yorumları
            </p>
            <h2
              id="yorumlar-baslik"
              className="font-[family-name:var(--font-display)] text-4xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-6xl"
            >
              Müşteri deneyimleri
            </h2>
          </div>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${btnSecondary} shrink-0`}>
            <MapPinIcon />
            Tüm Yorumları Google Haritalar&apos;da Oku
            <span className="sr-only"> (yeni sekmede açılır)</span>
          </a>
        </div>

        <ul
          className={`mt-12 grid items-start gap-4 ${
            single ? "max-w-3xl" : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {customerReviews.map((review) => (
            <li key={`${review.author}-${review.text.slice(0, 24)}`} className="min-w-0">
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
