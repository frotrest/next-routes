export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Категорія товарів</h1>
      <p className="text-gray-600 mb-4">Вкладені сегменти шляху:</p>
      <div className="flex gap-2 items-center text-sm font-mono bg-gray-100 p-3 rounded border">
        {slug.map((segment, index) => (
          <span key={index} className="flex gap-2 items-center">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {segment}
            </span>
            {index < slug.length - 1 && <span>/</span>}
          </span>
        ))}
      </div>
    </div>
  );
}