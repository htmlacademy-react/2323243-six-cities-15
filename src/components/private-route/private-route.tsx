import {Navigate} from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';


type PrivateRouteProps = {
  children: JSX.Element;
  restrictedFor: AuthStatus;
  redirectTo: AppRoute;
}

function PrivateRoute({ children, restrictedFor, redirectTo }: PrivateRouteProps): JSX.Element {

  if (restrictedFor === AuthStatus.NoAuth) {
    return <Navigate to={redirectTo} />;
  }
  if (restrictedFor === AuthStatus.Auth) {
    return <Navigate to={redirectTo} />;
  }
  return children;
}

export default PrivateRoute;
