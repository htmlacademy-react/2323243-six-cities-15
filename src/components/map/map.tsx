interface MapProps {
  city: string;
}

function Map({ city = 'Default City Name' }: MapProps): JSX.Element {
  return (
    <div className="cities__right-section">
      <section className="cities__map map">{city}</section>
    </div>
  );
}

export default Map;

