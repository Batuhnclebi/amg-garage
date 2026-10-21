import Image from "next/image";
import InstagramEmbedCard from "@/components/InstagramEmbedCard";
import { ArrowIcon, InstagramIcon } from "@/components/Icons";
import { business, instagramPosts } from "@/config/site";
import { btnPrimary } from "@/lib/ui";

export default function InstagramSection() {
  const { instagram } = business;
  const hasPosts = instagramPosts.length > 0;

  return (
    <section id="instagram" aria-labelledby="instagram-baslik" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amg-bright">
              Instagram
            </p>
            <h2
              id="instagram-baslik"
              className="font-[family-name:var(--font-display)] text-4xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-6xl"
            >
              Çalışmalarımızı inceleyin
            </h2>
          </div>
          <a href={instagram.url} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} shrink-0`}>
            <InstagramIcon />
            {instagram.handle}
            <span className="sr-only"> hesabını Instagram&apos;da aç (yeni sekmede açılır)</span>
          </a>
        </div>

        {hasPosts ? (
          <ul className="mt-12 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
            {instagramPosts.map((post) => (
              <li key={post.permalink} className="min-w-0">
                {post.image ? (
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-square overflow-hidden bg-graphite"
                  >
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      <InstagramIcon className="h-8 w-8" />
                    </span>
                    <span className="sr-only">Instagram gönderisini aç (yeni sekmede açılır)</span>
                  </a>
                ) : (
                  <InstagramEmbedCard permalink={post.permalink} label={post.alt} />
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="relative mt-12 overflow-hidden border border-line bg-carbon p-8 sm:p-14">
            <div aria-hidden="true" className="absolute -right-10 top-0 h-full w-24 -skew-x-[18deg] bg-amg/80" />
            <div className="relative max-w-xl">
              <InstagramIcon className="mb-6 h-10 w-10 text-white" />
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
                Güncel çalışmalar Instagram&apos;da
              </p>
              <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">
                Araçlar ve servis çalışmalarımızla ilgili tüm paylaşımlara{" "}
                <span className="text-white">{instagram.handle}</span> hesabımızdan ulaşabilirsiniz.
              </p>
              <a
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-white underline decoration-amg decoration-2 underline-offset-8 hover:text-amg-bright"
              >
                Hesabı görüntüle
                <ArrowIcon />
                <span className="sr-only"> (yeni sekmede açılır)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
