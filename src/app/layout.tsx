import type { Metadata, Viewport } from "next";
import { business, seo, siteUrl } from "@/config/site";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: business.name,
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: business.name,
    title: seo.title,
    description: seo.description,
    ...(siteUrl ? { url: "/" } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}