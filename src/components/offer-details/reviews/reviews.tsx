import ReviewForm from '../review-form/review-form';

import ReviewList from '../review-ist/review-list';

function Reviews(): JSX.Element {
  return (
    <section className="offer__reviews reviews">

      <ReviewList />
      <ReviewForm />
    </section>
  );
}

export default Reviews;
