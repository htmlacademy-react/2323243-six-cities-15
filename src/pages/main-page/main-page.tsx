import Cities from '../../components/cities/cities';
import Filter from '../../components/filter/filter';

import Offer from '../../types/offer';

type MainPageProps = {
  offers: Array<Offer>;
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  return (

    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Filter />
          </section>
        </div>
        <Cities offers={offers} />
      </main>
    </div>

  );
}

export default MainPage;
