import Review from '../review/review';

import { useAppSelector } from '../../../hooks';
import { dateInMs } from '../../../utilities';


function ReviewList(): JSX.Element {

  const reviewServer = useAppSelector((state) => state.reviews);

  const reviewServerCopy = structuredClone(reviewServer)
    .sort((a, b) => dateInMs(b.date) - dateInMs(a.date))
    .slice(0, 10);


  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewServer.length}</span></h2>
      <ul className="reviews__list">
        {reviewServerCopy.map((review) => (
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
