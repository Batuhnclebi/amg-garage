import { MapPinIcon, StarIcon } from "@/components/Icons";
import { business } from "@/config/site";
import { getGoogleReviews } from "@/lib/google-reviews";
import { btnSecondary } from "@/lib/ui";

function Stars({ value, className = "h-5 w-5" }: { value: number; className?: string }) {
  const rounded = Math.round(value);
  return (
    <span className="inline-flex text-amber-400" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon key={n} className={className} filled={n <= rounded} />
      ))}
    </span>
  );
}

export default async function ReviewsSection() {
  const data = await getGoogleReviews();

  return (
    <section id="yorumlar" aria-labelledby="yorumlar-baslik" className="bg-carbon py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amg-bright">
              Google Yorumları
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

        {data ? (
          <>
            <div className="mt-10 flex items-center gap-5">
              <p className="font-[family-name:var(--font-display)] text-6xl font-extrabold leading-none">
                {data.rating.toLocaleString("tr-TR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
              </p>
              <div>
                <Stars value={data.rating} className="h-6 w-6" />
                <p className="mt-1 text-sm text-mist">
                  <span className="sr-only">5 üzerinden {data.rating} puan. </span>
                  Google üzerinde {data.count.toLocaleString("tr-TR")} değerlendirme
                </p>
              </div>
            </div>

            {data.reviews.length > 0 && (
              <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data.reviews.map((review) => (
                  <li key={`${review.author}-${review.when}`} className="flex flex-col border border-line bg-ink p-6">
                    <Stars value={review.rating} className="h-4 w-4" />
                    <p className="sr-only">5 üzerinden {review.rating} puan</p>
                    <blockquote className="mt-4 flex-1 text-base leading-relaxed text-zinc-200">
                      {review.text}
                    </blockquote>
                    <footer className="mt-5 text-sm text-mist">
                      {review.authorUrl ? (
                        <a
                          href={review.authorUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-white hover:underline"
                        >
                          {review.author}
                        </a>
                      ) : (
                        <span className="font-semibold text-white">{review.author}</span>
                      )}
                      {review.when ? ` · ${review.when}` : ""}
                    </footer>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-6 text-xs text-mist">Puan ve yorumlar Google&apos;dan alınmıştır.</p>
          </>
        ) : (
          <div className="relative mt-12 overflow-hidden border border-line bg-ink p-8 sm:p-14">
            <div aria-hidden="true" className="absolute -right-10 top-0 h-full w-24 -skew-x-[18deg] bg-amg/80" />
            <div className="relative max-w-xl">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
                Yorumlar Google Haritalar&apos;da
              </p>
              <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">
                Müşterilerimizin AMG Garage hakkındaki görüşlerini, puanları ve fotoğrafları
                Google Haritalar üzerindeki işletme sayfamızda inceleyebilirsiniz.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
