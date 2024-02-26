import { useState } from 'react';

import CardList from '../card-list/card-list';
import Map from '../map/map';

import { CITIES_LOCATION } from '../../const';

import Offer from '../../types/offer';
import Sort from '../sort/sort';

type CitiesProps = {
  offers: Array<Offer>;
}

function Cities({ offers }: CitiesProps): JSX.Element {
  const [hoveredOfferId, setHoveredOfferId] = useState<Offer['id'] | null>(null);

  function handleCardHover(offerId: Offer['id'] | null) {
    setHoveredOfferId(offerId);
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in Amsterdam</b>
          <Sort />
          <div className="cities__places-list places__list tabs__content">
            <CardList
              elementType={'cities'}
              offers={offers}
              onCardHover={handleCardHover}
            />
          </div>
        </section>
        <div className="cities__right-section">
          <Map mapType={'cities'} cityLocations={CITIES_LOCATION} offers={offers} hoveredOfferId={hoveredOfferId} />
        </div>
      </div>
    </div>
  );
}

export default Cities;
