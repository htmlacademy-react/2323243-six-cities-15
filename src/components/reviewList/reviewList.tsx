import ReviewForm from '../review-form/review-form';
import Review from '../review/review';

import type ReviewType from '../../types/review';

type ReviewListProps = {
  reviews: Array<ReviewType>;
}

function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
          />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewList;
