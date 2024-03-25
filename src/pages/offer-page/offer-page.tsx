import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { AppRoute } from '../../const';
import Map from '../../components/map/map';
import OfferDetails from '../../components/offer-details/offer-details';
import NearPlaces from '../../components/near-places/near-places';
import { fetchNearPlaces, fetchReviews, fetchSelectedOffer, isSelectedOfferLoaded } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../hooks';


import { Offer, SelectedOffer } from '../../types/offer';
import { PlaceHolder } from '../../components/placeholder/placeholder';
import ReviewType from '../../types/review';


function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { offerId } = useParams();
  const nearOffers = useAppSelector((state) => state.nearPlaces);
  const selectedOffer = useAppSelector((state) => state.selectedOffer);
  const isReady = useAppSelector((state) => state.isSelectedOfferLoaded);

  useEffect(() => {
    if (offerId) {
      fetch(`https://15.design.htmlacademy.pro/six-cities/offers/${offerId}`)
        .then((response) => response.json())
        .then((data: SelectedOffer) => dispatch(fetchSelectedOffer(data)))
        .then(() => setTimeout(() => {
          dispatch(isSelectedOfferLoaded());
        }, 500));
    }
  }, [dispatch, offerId]);


  useEffect(() => {
    fetch(`https://15.design.htmlacademy.pro/six-cities/offers/${offerId}/nearby`)
      .then((response) => response.json())
      .then((data: Offer[]) => dispatch(fetchNearPlaces(data)));
  }, [dispatch, offerId]);

  useEffect(() => {
    fetch(`https://15.design.htmlacademy.pro/six-cities/comments/${offerId}`)
      .then((response) => response.json())
      .then((data: ReviewType[]) => dispatch(fetchReviews(data)));
  }, [dispatch, offerId]
  );

  if (!selectedOffer && !offerId) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const nearOffersCut = nearOffers.slice(0, 3);

  return (
    <>
      {!isReady && <PlaceHolder />}

      {isReady && selectedOffer &&
        <div className="page">
          <Helmet>
            <title>{'6 cities - offer'}</title>
          </Helmet>
          <main className="page__main page__main--offer">
            <section className="offer">
              <OfferDetails selectedOffer={selectedOffer} />
              <Map
                mapType={'offer'}
                offers={nearOffersCut}
                selectedOffer={selectedOffer}
              />
            </section>
            <div className="container">
              <NearPlaces upcomingOffers={nearOffersCut} />
            </div>
          </main>
        </div>};
    </>
  );
}

export default OfferPage;
