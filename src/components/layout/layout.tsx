import { Link, Outlet } from 'react-router-dom';

import { AppRoute } from '../../const';

function Layout(): JSX.Element {
  const url = new URL(window.location.href);
  const pathname = url.pathname;

  const isMain = pathname === AppRoute.Main as string;
  const isLogin = pathname === AppRoute.Login as string;

  const link = isMain ? '' : AppRoute.Main;


  return (

    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className={`header__logo-link ${isMain ? 'header__logo-link--active' : ''}`}
                to={link}
                // style={isMain ? {cursor: 'default', padding: '100px'} : {}}
              >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            {
              !isLogin &&
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="#">
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            }
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>

  );
}

export default Layout;
