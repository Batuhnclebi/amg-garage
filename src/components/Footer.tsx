import { InstagramIcon, TikTokIcon } from "@/components/Icons";
import Logo from "@/components/Logo";
import { business } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-carbon pb-28 pt-10 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-mist">
            &copy; {new Date().getFullYear()} {business.name}. Tüm hakları saklıdır.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AMG Garage Instagram hesabı (yeni sekmede açılır)"
            className="flex h-12 w-12 items-center justify-center text-white transition-colors hover:bg-graphite hover:text-amg-bright"
          >
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a
            href={business.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AMG Garage TikTok hesabı (yeni sekmede açılır)"
            className="flex h-12 w-12 items-center justify-center text-white transition-colors hover:bg-graphite hover:text-amg-bright"
          >
            <TikTokIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
