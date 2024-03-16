import Card from '../card/card';

import Offer from '../../types/offer';


type OfferListProps = {
  elementType: 'cities' | 'favorite' | 'offers';
  offers: Array<Offer>;
  onCardHover?: (offerId: Offer['id'] | null) => void;
}

function CardList({ elementType, offers, onCardHover }: OfferListProps) {
  return (
    <>
      {
        offers.map((offer) => (
          <Card
            key={offer.id}
            elementType={elementType}
            offer={offer}
            onCardHover = {onCardHover}
          />
        ))
      }
    </>
  );
}

export default CardList;
