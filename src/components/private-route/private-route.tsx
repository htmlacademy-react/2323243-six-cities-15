import {Navigate} from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';


type PrivateRouteProps = {
  children: JSX.Element;
  restrictedFor: AuthStatus;
  redirectTo: AppRoute;
}

function PrivateRoute({children, restrictedFor, redirectTo}: PrivateRouteProps): JSX.Element {


  return restrictedFor === AuthStatus.NoAuth ? <Navigate to={redirectTo} /> : children;
}

export default PrivateRoute;
