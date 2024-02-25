import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './components/pages/main-page/main-page';
import LoginPage from './components/pages/login-page/login-page';
import FavoritePage from './components/pages/favorite-page/favorite-page';
import OfferPage from './components/pages/offer-page/offer-page';
import NotFound from './components/pages/404-page/404-page';
import PrivateRoute from './components/private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthStatus } from './const';
import Layout from './components/layout/layout';

type AppProps = {
  offersCount: number;
};

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Layout />} >
            <Route path={AppRoute.Main} element={<MainPage offersCount={offersCount} />} />
            <Route path={AppRoute.Login} element={
              <PrivateRoute restrictedFor={AuthStatus.Unknown} redirectTo={AppRoute.Main} >
                <LoginPage />
              </PrivateRoute>
            }
            />

            <Route path={AppRoute.Favorite} element={
              <PrivateRoute restrictedFor={AuthStatus.NoAuth} redirectTo={AppRoute.Login} >
                <FavoritePage />
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.Offer}>
              <Route index element={<OfferPage />} />
            </Route>
            <Route path={'*'} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </HelmetProvider >

  );
}


export default App;
