import Review from '../review/review';

import { useAppSelector } from '../../../hooks';


function ReviewList(): JSX.Element {

  const reviewServer = useAppSelector((state) => state.reviews);


  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewServer.length}</span></h2>
      <ul className="reviews__list">
        {reviewServer.map((review) => (
          <Review
            key={review.id}
            review={review}
          />
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
