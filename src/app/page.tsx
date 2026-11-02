import Link from "next/link";

export default function Home() {

  return (
    <div className="-mx-6 -my-12 flex flex-col">
      <section className="flex flex-col items-center bg-black px-6 py-28 text-center text-white">
        <p className="mb-3 text-xl font-medium text-[#f5f5f7]/70">Новинки</p>
        <h1 className="max-w-3xl bg-gradient-to-b from-white to-[#a1a1a6] bg-clip-text text-5xl font-semibold leading-[1.05] tracking-tight text-transparent md:text-7xl">
          Всё, что нужно.
          <br />
          Ничего лишнего.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-[#a1a1a6]">
          Тщательно отобранные товары с быстрой доставкой и гарантией.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="/products"
            className="rounded-full bg-[#0071e3] px-7 py-3 text-base font-medium text-white transition hover:bg-[#0077ed]"
          >
            Перейти в каталог
          </Link>
          <Link
            href="/products"
            className="rounded-full px-7 py-3 text-base font-medium text-[#2997ff] transition hover:underline"
          >
            Узнать больше ›
          </Link>
        </div>
      </section>

      <section className="grid gap-5 px-6 py-16 md:grid-cols-3 mx-auto w-full max-w-6xl">
        {[
          ["Быстрая доставка", "Отправляем в день заказа."],
          ["Гарантия", "Официальная гарантия на все товары."],
          ["Возврат 30 дней", "Не подошло? Вернём деньги."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-3xl bg-white p-8">
            <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 text-[#6e6e73]">{text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}