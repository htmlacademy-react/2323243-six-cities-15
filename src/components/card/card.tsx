type CardProps = {
  elementType: 'cities' | 'favorite';
  isLabel?: boolean;
}

function Card({ elementType, isLabel = true}: CardProps): JSX.Element | null {
  const options = {
    cities: {
      className: 'cities',
      width: '260',
      height: '200',
      styleWidth: '80%'
    },
    favorite: {
      className: 'favorites',
      width: '150',
      height: '110',
      styleWidth: '100%'
    }
  };

  return (
    <article className={`${options[elementType].className}__card place-card`}>
      {isLabel &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${options[elementType].className}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src="img/apartment-01.jpg" width={options[elementType].width} height={options[elementType].height} alt="Place image" />
        </a>
      </div>
      <div className={`${elementType === 'favorite' ? 'favorites__card-info ' : ''}'place-card__info'`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;120</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${elementType === 'favorite' ? 'place-card__bookmark-button--active ' : ''}place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: options[elementType].styleWidth }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default Card;
