import { useState, useRef, useEffect } from 'react';

import { Map } from 'leaflet';
import L from 'leaflet';

import { ActiveCity, CityLocationType } from '../types/city';

function useMap(
  mapRef: React.MutableRefObject<HTMLElement | null>,
  cityLocations: Array<CityLocationType>,
  activeCity: ActiveCity
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const cityLocation = cityLocations.find((it) => it?.title === activeCity);

  useEffect(() => {
    if (!isRenderedRef.current && mapRef.current !== null && cityLocation) {
      const instance = L.map(mapRef.current, {
        center: {
          lat: cityLocation.lat,
          lng: cityLocation.lng,
        },
        zoom: cityLocation.zoom
      });

      const layer = L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      layer.addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, cityLocation, activeCity]);
  return map;
}

export default useMap;

