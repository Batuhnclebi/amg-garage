import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-md">
      <nav
        aria-label="Ana gezinme"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a href="#" aria-label="AMG Garaj — sayfanın başı" className="text-white">
          <Logo />
        </a>
        <a
          href="#iletisim"
          className="px-1 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:text-amg-bright"
        >
          İletişim
        </a>
      </nav>
    </header>
  );
}
