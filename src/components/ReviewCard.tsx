"use client";

import { useId, useState } from "react";
import type { CustomerReview } from "@/config/site";

const PREVIEW_LENGTH = 280;

/** Metni kelime sınırında keser. */
function preview(text: string) {
  const flat = text.replace(/\s+/g, " ").trim();
  const cut = flat.slice(0, PREVIEW_LENGTH);
  return `${cut.slice(0, cut.lastIndexOf(" ")).trimEnd()}…`;
}

export default function ReviewCard({ review }: { review: CustomerReview }) {
  const [open, setOpen] = useState(false);
  const textId = useId();
  const isLong = review.text.length > PREVIEW_LENGTH + 40;
  const paragraphs = review.text.split(/\n\s*\n/);

  return (
    <article className="flex flex-col border border-line bg-ink p-6 sm:p-8">
      <div
        id={textId}
        className="space-y-4 text-base leading-relaxed text-zinc-200"
      >
        {isLong && !open ? (
          <p>{preview(review.text)}</p>
        ) : (
          paragraphs.map((p, i) => <p key={i}>{p}</p>)
        )}
      </div>

      {isLong && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={textId}
          className="mt-4 min-h-11 self-start text-sm font-bold uppercase tracking-[0.12em] text-amg-bright underline decoration-2 underline-offset-8 hover:text-white"
        >
          {open ? "Daha az göster" : "Devamını oku"}
        </button>
      )}

      <footer className="mt-5 border-t border-line pt-4 text-sm text-mist">
        <span className="font-semibold text-white">{review.author}</span>
        {review.when ? ` · ${review.when}` : ""}
      </footer>
    </article>
  );
}
