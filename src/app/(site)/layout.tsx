import Link from 'next/link';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6 text-xs">
          <Link href="/" className="text-base font-semibold tracking-tight">
            MyStore
          </Link>
          <nav className="flex items-center gap-8 text-[#1d1d1f]/80">
            <Link href="/" className="transition-colors hover:text-black">
              Головна
            </Link>
            <Link href="/products" className="transition-colors hover:text-black">
              Каталог
            </Link>
            <Link href="/admin" className="transition-colors hover:text-[#0071e3]">
              Адмінка
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">{children}</main>

      <footer className="border-t border-black/10 py-8 text-center text-xs text-[#6e6e73]">
        © 2026 MyStore. Всі права захищені.
      </footer>
    </div>
  );
}
