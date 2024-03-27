import Cities from '../../components/cities/cities';
import Filter from '../../components/filter/filter';

import { useAppSelector } from '../../hooks';
import { PlaceHolder } from '../../components/placeholder/placeholder';
import { AuthStatus } from '../../const';

function MainPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const isLoaded = useAppSelector((state) => state.isLoaded);
  const authStatus = useAppSelector((state) => state.authStatus);

  const filterValue = useAppSelector((state) => state.activeCity);
  const offersByCity = offers.filter((offer) => offer.city.name === filterValue);

  return (
    <>
      {(!isLoaded || authStatus === AuthStatus.Unknown) && <PlaceHolder />}

      {isLoaded && offersByCity &&
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
        </div>}

    </>

  );
}

export default MainPage;
