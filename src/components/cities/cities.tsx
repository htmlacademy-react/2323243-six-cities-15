import { useState } from 'react';

import CardList from '../card-list/card-list';
import Map from '../map/map';

import { city } from '../../mocks/city';

import Offer from '../../types/offer';

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
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            <CardList
              elementType={'cities'}
              offers={offers}
              onCardHover={handleCardHover}
            />
          </div>
        </section>
        <div className="cities__right-section">
          <Map city={city} offers={offers} hoveredOfferId={hoveredOfferId}/>
        </div>
      </div>
    </div>
  );
}

export default Cities;
