import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';

import { AppRoute, CITIES_LOCATION } from '../../const';
import Map from '../../components/map/map';
import OfferDetails from '../../components/offer-details/offer-details';
import NearPlaces from '../../components/near-places/near-places';


import { Offer, OfferServer } from '../../types/offer';
import { ActiveCity } from '../../types/city';
import { useEffect, useState } from 'react';
import { offerServer } from '../../mocks/offer';

type OfferPageProps = {
  offers: Array<Offer>;
};

function OfferPage({ offers }: OfferPageProps): JSX.Element {
  const { offerId } = useParams();
  const [offersServer, setOffersServer] = useState(offers);
  const [selectedOffer, setSelectedOffer] = useState<OfferServer>(offerServer);

  useEffect(() => {
    fetch(`https://14.design.pages.academy/six-cities/offers/${offerId}`)
      .then((response) => response.json())
      .then((data: OfferServer) => setSelectedOffer(data));
  }, [offerId]);

  useEffect(() => {
    fetch('https://14.design.pages.academy/six-cities/offers')
      .then((response) => response.json())
      .then((data: Array<Offer>) => setOffersServer(data));
  }, []);

  if (!selectedOffer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const selectedCityName: ActiveCity =
    offersServer.find((offer) => offer.id === offerId)?.city.name || 'Paris';

  const offersByCity: Offer[] | OfferServer[] = offersServer.filter((offer) =>
    (offer.city.name === selectedOffer.city.name));

  const nearOffers: Offer[] | Array<OfferServer> = offersByCity
    .filter((offer) => offer.id !== offerId)
    .slice(0, 3);

  const onMapOffers: OfferServer[] | Offer[] = [...nearOffers];
  onMapOffers.push(selectedOffer);

  return (

    <div className="page">
      <Helmet>
        <title>{'6 cities - offer'}</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferDetails selectedOffer={selectedOffer} />
          <Map
            mapType={'offer'}
            cityLocations={CITIES_LOCATION}
            offers={onMapOffers}
            activeCity={selectedCityName}
            selectedOffer={selectedOffer}
          />
        </section>
        <div className="container">
          <NearPlaces upcomingOffers={nearOffers} />
        </div>
      </main>
    </div>

  );
}

export default OfferPage;
