"use client";

import { useEffect, useState } from "react";
import { InstagramIcon } from "@/components/Icons";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const EMBED_SRC = "https://www.instagram.com/embed.js";

/**
 * Resmî Instagram embed'i. Üçüncü taraf script yalnızca ziyaretçi
 * "Gönderiyi göster" düğmesine bastığında yüklenir (hız ve gizlilik).
 */
export default function InstagramEmbedCard({
  permalink,
  label,
}: {
  permalink: string;
  label: string;
}) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;

    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${EMBED_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = EMBED_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    const onLoad = () => window.instgrm?.Embeds.process();
    script.addEventListener("load", onLoad);
    return () => script?.removeEventListener("load", onLoad);
  }, [active]);

  if (active) {
    return (
      <div className="min-h-[24rem] overflow-hidden bg-white">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink={permalink}
          data-instgrm-version="14"
          style={{ margin: 0, width: "100%", minWidth: 0, maxWidth: "100%" }}
        >
          <a href={permalink} target="_blank" rel="noopener noreferrer">
            Gönderiyi Instagram&apos;da görüntüle
          </a>
        </blockquote>
      </div>
    );
  }

  return (
    <div className="flex aspect-square flex-col items-center justify-center gap-4 bg-graphite p-6 text-center">
      <InstagramIcon className="h-10 w-10 text-zinc-200" />
      <button
        type="button"
        onClick={() => setActive(true)}
        aria-label={`${label} — Instagram gönderisini bu sayfada göster`}
        className="min-h-11 border border-white/30 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
      >
        Gönderiyi göster
      </button>
      <a
        href={permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-mist underline underline-offset-4 hover:text-white"
      >
        Instagram&apos;da aç
        <span className="sr-only"> (yeni sekmede açılır)</span>
      </a>
    </div>
  );
}
