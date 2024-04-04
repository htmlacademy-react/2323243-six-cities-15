import { Outlet } from 'react-router-dom';

import Header from '../header/header';

function Layout(): JSX.Element {
  return (

    // <div className="page page--gray">
    // <div className="page">
    <>
      <Header />
      <Outlet />
    </>
    // </div>

  );
}

export default Layout;
