import { getProducts } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';

const CatalogPage = async () => {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Каталог</h1>
      <p className="mt-2 text-xl text-[#6e6e73]">Выберите то, что вам нравится.</p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((item) => (
          <Link key={item.id} href={`/products/${item.id}`} className="group block">
            <div className="flex h-full flex-col items-center rounded-3xl bg-white p-6 text-center transition-all duration-300 ease-out will-change-transform group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="relative h-48 w-full">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 line-clamp-1 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-1 text-[#6e6e73]">${item.price}</p>
              <span className="mt-4 text-sm font-medium text-[#0066cc] group-hover:underline">
                Подробнее ›
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
