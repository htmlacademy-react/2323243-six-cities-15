import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useMap from '../../hooks/useMap';
import { AppRoute, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

import { Offer } from '../../types/offer';
import Loc from '../../types/loc';

type MapProps = {
  mapType: 'cities' | 'offer';
  offers: Offer[];
  offerId: Offer['id'] | null;
}

const defaultCustomIcon = L.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = L.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


function Map({ mapType, offers, offerId }: MapProps): JSX.Element {

  const { pathname } = useLocation();
  const isOfferPage = pathname.startsWith(AppRoute.Offer);


  const location: Loc = offers[0]?.city.location;

  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map && location) {
      map.setView({
        lat: location.latitude,
        lng: location.longitude,
      });

    }
  }, [map, location]);


  useEffect(() => {
    if (map) {
      const markerLayer = L.layerGroup().addTo(map);

      offers.forEach((offer) => {

        const marker = L.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            offerId !== undefined && offer.id === offerId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer)
          .bindPopup(`<h2>${offer.title}</h2><p style="font-size:1.5em">€${offer.price}</p>`);

      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, offerId, isOfferPage, mapType]);


  return (
    <section
      className={`${mapType}__map map`}
      ref={mapRef}
      style={mapType === 'offer' ?
        {
          height: '100%',
          minHeight: '600px',
          width: '60%',
          minWidth: '1144px',
          margin: '0 auto'
        }
        : undefined}
    >
    </section>
  );
}

export default Map;
