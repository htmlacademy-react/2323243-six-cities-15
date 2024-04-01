import { Outlet } from 'react-router-dom';

import Header from '../header/header';

function Layout(): JSX.Element {
  return (
    <>
      <Header block={'hasNavigation'}/>
      <Outlet />
    </>
  );
}

export default Layout;
