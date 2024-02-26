import CardList from '../card-list/card-list';

import Offer from '../../types/offer';

type NearPlacesProps = {
  upcomingOffers: Array<Offer>;
  hoveredOfferId:(offerId: Offer['id'] | null) => void;
}

function NearPlaces({upcomingOffers, hoveredOfferId}: NearPlacesProps): JSX.Element {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <CardList elementType="offers" offers={upcomingOffers} onCardHover={hoveredOfferId} />
      </div>
    </section>
  );
}

export default NearPlaces;
