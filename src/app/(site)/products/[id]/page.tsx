import Reviews from '@/components/Reviews';
import ReviewsLoader from '@/components/ReviewsLoader';
import { getProductById } from '@/lib/api';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const productData = await getProductById(id);
  if (!productData) {
    notFound();
  }

  return {
    title: productData.title,
    description: productData.description,
    openGraph: {
      title: `${productData.title} — Купити в MyStore`,
      description: productData.description,
      images: [
        {
          url: productData.thumbnail,
          width: 800,
          height: 600,
          alt: productData.title,
        },
      ],
    },
  };
}



const CatalogItem = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const productData = await getProductById(id);
  if (!productData) {
    notFound();
  }

  return (
    <div>
      <Link href="/products" className="text-sm text-[#0066cc] hover:underline">
        ‹ Назад в каталог
      </Link>

      <div className="mt-6 grid items-center gap-12 md:grid-cols-2">
        <div className="relative aspect-square rounded-3xl bg-white p-8">
          <Image
            src={productData.thumbnail}
            alt={productData.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-8"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#bf4800]">
            {productData.category}
          </p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {productData.title}
          </h1>
          <p className="mt-4 text-lg text-[#6e6e73]">{productData.description}</p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-semibold">${productData.price}</span>
            {productData.discountPercentage > 0 && (
              <span className="rounded-full bg-[#0071e3]/10 px-3 py-1 text-sm font-medium text-[#0071e3]">
                −{Math.round(productData.discountPercentage)}%
              </span>
            )}
          </div>

          <button className="mt-8 rounded-full bg-[#0071e3] px-8 py-3 text-base font-medium text-white transition hover:bg-[#0077ed] active:scale-95 cursor-pointer">
            Добавить в корзину
          </button>

          <dl className="mt-10 divide-y divide-black/10 rounded-2xl bg-white px-6 text-sm">
            {[
              ['Наличие', productData.availabilityStatus],
              ['Гарантия', productData.warrantyInformation],
              ['Доставка', productData.shippingInformation],
              ['Возврат', productData.returnPolicy],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 py-4">
                <dt className="text-[#6e6e73]">{label}</dt>
                <dd className="text-right font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold tracking-tight">Отзывы покупателей</h2>
        <div className="mt-8">
          <Suspense fallback={<ReviewsLoader />}>
            <Reviews id={id} />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default CatalogItem;
