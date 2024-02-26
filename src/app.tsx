import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/main-page/main-page';
import LoginPage from './pages/login-page/login-page';
import FavoritePage from './pages/favorite-page/favorite-page';
import OfferPage from './pages/offer-page/offer-page';
import NotFound from './pages/404-page/404-page';
import PrivateRoute from './components/private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute, AuthStatus } from './const';
import Layout from './components/layout/layout';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={'/'} element={<Layout />} >
            <Route path={AppRoute.Main} element={<MainPage />} />
            <Route path={AppRoute.Login} element={
              <PrivateRoute restrictedFor={AuthStatus.Unknown} redirectTo={AppRoute.Main} >
                <LoginPage />
              </PrivateRoute>
            }
            />

            <Route path={AppRoute.Favorite} element={
              <PrivateRoute restrictedFor={AuthStatus.Unknown} redirectTo={AppRoute.Login} >
                <FavoritePage />
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.Offer}>
              <Route index element={<OfferPage />} />
              <Route path={':offerId'} element={<OfferPage />} />
            </Route>
            <Route path={AppRoute.NotFound} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </HelmetProvider >

  );
}

export default App;
