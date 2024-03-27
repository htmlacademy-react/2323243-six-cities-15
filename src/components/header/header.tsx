import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { favoritesNumber } from '../../store/actions';

function Header(): JSX.Element {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const favsNumber = useAppSelector((state) => state.favoritesNumber);
  const userData = useAppSelector((state) => state.UserData);

  const isMain = pathname === AppRoute.Main as string;
  const isLogin = pathname === AppRoute.Login as string;

  const link = isMain ? '' : AppRoute.Main;

  function handleSignOutClick() {
    dispatch(logoutAction());
    dispatch(favoritesNumber(-favsNumber));
    navigate(AppRoute.Main);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className={`header__logo-link ${isMain ? 'header__logo-link--active' : ''}`}
              to={link}
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {
            !isLogin &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={userData ? AppRoute.Favorite : AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{userData ? userData.email : 'Sign in'}</span>
                    {
                      userData &&
                      <span className="header__favorite-count">{favsNumber}</span>
                    }
                  </Link>
                </li>
                {
                  userData &&
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      to="#"
                      onClick={handleSignOutClick}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                }

              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
