import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-wrapper flex min-h-screen">
      <aside className="w-64 bg-slate-800 text-slate-200 p-6 flex flex-col gap-4">
        <h2 className="text-lg font-bold text-white border-b border-slate-700 pb-2">
          Панель адміна
        </h2>
        <Link href="/admin" className="hover:text-white">Дашборд</Link>
        <Link href="/admin/products" className="hover:text-white">Управління товарами</Link>
        <Link href="/" className="mt-auto text-sm text-slate-400 hover:text-white">
          ← На сайт
        </Link>
      </aside>
      <main className="flex-1 bg-slate-100 p-8">{children}</main>
    </div>
  );
}