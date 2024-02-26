import { useEffect, useState } from 'react';

import Cities from '../../components/cities/cities';
import Filter from '../../components/filter/filter';

import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';

function MainPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const [offersServer, setOffers] = useState(offers);

  useEffect(() => {
    fetch('https://14.design.pages.academy/six-cities/offers')
      .then((response) => response.json())
      .then((data: Array<Offer>) => setOffers(data));
  }, [setOffers]);

  const filterValue = useAppSelector((state) => state.activeCity);
  const offersByCity = offersServer.filter((offer) => offer.city.name === filterValue);

  return (

    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Filter />
          </section>
        </div>
        <Cities offersByCity={offersByCity} selectedCity={filterValue} />
      </main>
    </div>

  );
}

export default MainPage;
