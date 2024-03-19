import ReviewForm from '../review-form/review-form';

import type ReviewType from '../../../types/review';
import ReviewList from '../review-ist/review-list';

type ReviewListProps = {
  reviews: Array<ReviewType>;
}

function Reviews({ reviews }: ReviewListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewList reviews={reviews } />
      <ReviewForm />
    </section>
  );
}

export default Reviews;
