import { Helmet } from 'react-helmet-async';

import { useAppSelector } from '../../hooks';
import CardList from '../../components/card-list/card-list';

import { Offer } from '../../types/offer';
import FavoritesByCity from '../../types/favorites-by-city';
import { PlaceHolder } from '../../components/placeholder/placeholder';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { getFavLoadingStatus, getFavs} from '../../store/offer-data/offer-data-selectors';
import { Link } from 'react-router-dom';
import { AppRoute, LoadingDataStatus } from '../../const';

function FavoritePage(): JSX.Element {
  const favLoadingStatus = useAppSelector(getFavLoadingStatus);

  const favoriteOffers = useAppSelector(getFavs);

  const favoriteOffersLength = favoriteOffers.length;

  function getFavoriteCities(favOffers: Array<Offer>): FavoritesByCity {


    const result = favOffers.reduce<FavoritesByCity>((acc, value) => {
      const city = value.city.name;
      if (!(city in acc)) {
        acc[city] = [];
      }
      acc[city].push(value);
      return acc;
    }, {});
    return result;
  }

  const favoritesByCity = getFavoriteCities(favoriteOffers);

  return (
    <>
      {!favoriteOffersLength && <FavoritesEmpty />}

      {favLoadingStatus === LoadingDataStatus.Pending && <PlaceHolder />}

      {
        favLoadingStatus === LoadingDataStatus.Success &&
        <div className='page'>
          <Helmet>
            <title>Избранное</title>
          </Helmet>
          <main className="page page__main page__main--favorites">
            <div className="page__favorites-container container">
              {
                favoriteOffersLength &&
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>

                  <ul className="favorites__list">
                    {Object.entries(favoritesByCity).map(([city, favoriteList]) => (

                      < li key={city} className="favorites__locations-items">
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{city}</span>
                            </a>
                          </div>
                        </div>
                        <div className="favorites__places">
                          <CardList elementType='favorite' offers={favoriteList} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              }
            </div>
          </main >
          <footer className="footer container">
            <Link className="footer__logo-link" to={AppRoute.Main}>
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
            </Link>
          </footer>
        </div >
      }
    </>
  );
}

export default FavoritePage;
