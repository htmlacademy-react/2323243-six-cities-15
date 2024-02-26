import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';

import { AppRoute, CITIES_LOCATION } from '../../const';

import Map from '../../components/map/map';
import OfferDetails from '../../components/offer-details/offer-details';

import Offer from '../../types/offer';
import NearPlaces from '../../components/near-places/near-places';
import { useState } from 'react';

type OfferPageProps = {
  offers: Array<Offer>;
  upcomingOffers: Array<Offer>;
};

function OfferPage({offers, upcomingOffers}: OfferPageProps): JSX.Element {
  const {offerId} = useParams();
  const selectedOffer = offers.find((it) => it.id === Number(offerId));
  const [upcomingOfferId, setUpcomingOfferId] = useState<Offer['id'] | null>(null);

  function handleCardHover(nearOfferId:Offer['id'] | null) {
    setUpcomingOfferId(nearOfferId);
  }

  if (!selectedOffer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (

    <div className="page">
      <Helmet>
        <title>{'6 cities - offer'}</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferDetails selectedOffer={selectedOffer}/>
          <Map mapType={'offer'} cityLocations={CITIES_LOCATION} offers={upcomingOffers} hoveredOfferId={upcomingOfferId}/>
        </section>
        <div className="container">
          <NearPlaces upcomingOffers={upcomingOffers} hoveredOfferId={handleCardHover}/>
        </div>
      </main>
    </div>

  );
}

export default OfferPage;
