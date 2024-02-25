import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './components/pages/main-page/main-page';
import LoginPage from './components/pages/login-page/login-page';
import FavoritePage from './components/pages/favorite-page/favorite-page';
import OfferPage from './components/pages/offer-page/offer-page';
import NotFound from './components/pages/404-page/404-page';

type AppProps = {
  offersCount: number;
}

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage offersCount={offersCount} />} />
        <Route path={'login'} element={<LoginPage />} />
        <Route path={'favorites'} element={<FavoritePage />} />
        <Route path={'offer'}>
          <Route index element={<OfferPage />} />
          <Route path={':id'} element={<OfferPage />} />
        </Route>
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
