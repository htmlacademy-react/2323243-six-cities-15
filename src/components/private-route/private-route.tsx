import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/users-process/user-process-selectors';


type PrivateRouteProps = {
  children: JSX.Element;
  redirectTo: AppRoute;
}

function PrivateRoute({ children, redirectTo }: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus === AuthStatus.NoAuth) {
    return <Navigate to={redirectTo} />;
  }
  return children;

}

export default PrivateRoute;
