import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { Marker, layerGroup } from 'leaflet';
import { useRef, useEffect } from 'react';

import useMap from '../../hooks/useMap';
import { CityMap } from '../../mocks/city';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

import Offer from '../../types/offer';

type MapProps = {
  city: CityMap;
  offers: Array<Offer>;
  hoveredOfferId: Offer['id'] | null;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


function Map({ city, offers, hoveredOfferId }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            hoveredOfferId !== undefined && offer.id === hoveredOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);

      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, hoveredOfferId]);


  return (
    <section
      className="cities__map map"
      ref={mapRef}
    >

    </section>
  );

}

export default Map;
