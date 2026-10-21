/**
 * Google Places API (New) ile işletme puanı ve yorumları (resmî yöntem).
 *
 * Gereksinimler: GOOGLE_PLACES_API_KEY ve GOOGLE_PLACE_ID ortam değişkenleri,
 * Google Cloud'da etkinleştirilmiş "Places API (New)" ve faturalandırma.
 * Değişkenler yoksa ya da istek başarısız olursa null döner; arayüz bu durumda
 * sahte veri göstermeden Google Haritalar'a yönlendiren bölüme düşer.
 */

export type GoogleReview = {
  author: string;
  authorUrl?: string;
  rating: number;
  text: string;
  when: string;
};

export type GoogleReviewsData = {
  rating: number;
  count: number;
  reviews: GoogleReview[];
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: Array<{
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    originalText?: { text?: string };
    authorAttribution?: { displayName?: string; uri?: string };
  }>;
};

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=tr`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: 86400 },
      },
    );

    if (!res.ok) {
      console.error(`Google Places isteği başarısız oldu: HTTP ${res.status}`);
      return null;
    }

    const data = (await res.json()) as PlacesResponse;
    if (typeof data.rating !== "number" || typeof data.userRatingCount !== "number") {
      return null;
    }

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "",
        authorUrl: r.authorAttribution?.uri,
        rating: r.rating ?? 0,
        text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
        when: r.relativePublishTimeDescription ?? "",
      }))
      .filter((r) => r.author && r.text && r.rating > 0);

    return { rating: data.rating, count: data.userRatingCount, reviews };
  } catch (error) {
    console.error("Google Places isteği sırasında hata:", error);
    return null;
  }
}
