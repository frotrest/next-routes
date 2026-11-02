import { getProductReviews } from '@/lib/api';

const Reviews = async ({ id }: { id: string }) => {
  const reviews = await getProductReviews(id);

  if (reviews.length === 0) {
    return <p>Отзывов пока нет</p>;
  }

  return (
    <ul className="flex flex-col gap-3">
      {reviews.map((review, index) => (
        <li key={index} className="border rounded p-3">
          <div className="flex justify-between">
            <strong>{review.reviewerName}</strong>
            <span>⭐ {review.rating}/5</span>
          </div>
          <p>{review.comment}</p>
          <small>{new Date(review.date).toLocaleDateString()}</small>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;