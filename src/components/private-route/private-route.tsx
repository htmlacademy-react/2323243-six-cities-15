import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks';


type PrivateRouteProps = {
  children: JSX.Element;
  redirectTo: AppRoute;
}

function PrivateRoute({ children, redirectTo }: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);

  if (authStatus === AuthStatus.NoAuth) {
    return <Navigate to={redirectTo} />;
  }
  return children;

}

export default PrivateRoute;
