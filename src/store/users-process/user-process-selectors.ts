import { AuthStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserData } from '../../types/user-data';


const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;
const getUserData = (state: State): UserData => state[NameSpace.User].userData;

export {
  getAuthStatus,
  getUserData,
};
