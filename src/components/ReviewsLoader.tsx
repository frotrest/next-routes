const ReviewsLoader = () => (
  <div className="flex flex-col gap-3 animate-pulse">
    {[1, 2, 3].map((i) => (
      <div key={i} className="border rounded p-3">
        <div className="h-4 w-1/3 bg-gray-300 rounded mb-2" />
        <div className="h-3 w-full bg-gray-200 rounded" />
      </div>
    ))}
  </div>
);

export default ReviewsLoader;