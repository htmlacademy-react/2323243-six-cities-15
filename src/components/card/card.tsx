import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Offer } from '../../types/offer';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { favoritesNumber, setOffers } from '../../store/actions';

type CardProps = {
  elementType: 'cities' | 'favorite' | 'offers';
  offer: Offer;
  onCardHover?: (offerId: Offer['id'] | null) => void;
}

function Card({ elementType, offer, onCardHover }: CardProps): JSX.Element {
  const options = {
    cities: {
      className: 'cities',
      width: '260',
      height: '200',
    },
    favorite: {
      className: 'favorites',
      width: '150',
      height: '110',
    },
    offers: {
      className: 'near-places',
      width: '260',
      height: '200',
    },
  };

  const offersStore = useAppSelector((state) => state.offers);

  const offerCopy = { ...offer };

  const [isFav, setIsFav] = useState<boolean>(offer.isFavorite);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authStatus);
  const navigate = useNavigate();

  function handleFavClick() {
    if (authStatus === AuthStatus.NoAuth) {
      navigate(AppRoute.Login);
    }
    if (authStatus === AuthStatus.Auth) {
      offerCopy.isFavorite = !isFav;
      setIsFav((isFavPrev) => !isFavPrev);
      dispatch(favoritesNumber(isFav ? -1 : 1));
      dispatch(setOffers(offersStore));
    }
  }

  function handleMouseEnter() {
    onCardHover?.(offer.id);
  }

  function handleMouseLeave() {
    onCardHover?.(null);
  }

  return (

    <article
      className={`${options[elementType].className}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {
        offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }

      <div className={`${options[elementType].className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={options[elementType].width} height={options[elementType].height} alt="Place image" />
        </Link>
      </div>
      <div className={`${elementType === 'favorite' ? 'favorites__card-info ' : ''}'place-card__info'`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`${(isFav && authStatus === AuthStatus.Auth) ? 'place-card__bookmark-button--active ' : ''}place-card__bookmark-button button`}
            type="button"
            onClick={handleFavClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating / 5 * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>

  );
}

export default Card;
