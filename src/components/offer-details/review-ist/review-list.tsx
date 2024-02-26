import Review from '../review/review';

import type ReviewType from '../../../types/review';

type ReviewListProps = {
  reviews: Array<ReviewType>;
}

function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
        />
      ))}
    </ul>

  );
}

export default ReviewList;
