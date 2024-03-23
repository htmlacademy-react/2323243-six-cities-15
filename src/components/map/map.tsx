import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useMap from '../../hooks/useMap';
import { AppRoute, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

import { Offer, OfferServer } from '../../types/offer';
import { CityLocationType } from '../../types/city';
import { useAppSelector } from '../../hooks';

type MapProps = {
  mapType: 'cities' | 'offer';
  cityLocations: Array<CityLocationType>;
  offers: Array<OfferServer> | Offer[];
  selectedOffer?: OfferServer;
  hoveredOfferId?: Offer['id'] | null;
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


function Map({ mapType, cityLocations, offers, hoveredOfferId, selectedOffer }: MapProps): JSX.Element {

  const { pathname } = useLocation();
  const isOfferPage = pathname.startsWith(AppRoute.Offer);

  const activeCity = useAppSelector((state) => state.activeCity);


  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocations, activeCity);


  if (isOfferPage && selectedOffer) {
    offers = offers.filter((offer) => offer.id !== selectedOffer.id);
  }

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
            hoveredOfferId !== undefined && offer.id === hoveredOfferId && mapType === 'cities'
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer)
          .bindPopup(`<h2>${offer.title}</h2><p style="font-size:1.5em">€${offer.price}</p>`);

        let selectedOfferMarker;
        if (mapType === 'offer' && selectedOffer) {
          selectedOfferMarker = L.marker({
            lat: selectedOffer.location.latitude,
            lng: selectedOffer.location.longitude,
          });

          selectedOfferMarker.setIcon(currentCustomIcon)
            .addTo(markerLayer)
            .bindPopup(`<h2>${selectedOffer.title}</h2><p style="font-size:1.5em">€${selectedOffer.price}</p>`);
        }
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, hoveredOfferId, activeCity, isOfferPage, selectedOffer, mapType]);

  useEffect(() => {
    if (map) {
      const location: CityLocationType | undefined = cityLocations.find((city) => city?.title === activeCity);
      if (location) {
        map.setView({
          lat: location.lat,
          lng: location.lng,
        });
      }
    }
  }, [map, cityLocations, activeCity]);


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
