import styles from './404-page.module.css';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFound() {
  return (
    <div className={`page ${styles.notfound}`}>
      <Helmet>
        <title>{'6 cities - Not Found'}</title>
      </Helmet>
      <h1 className={styles.title}>404 NOT FOUND</h1>
      <h3>
        <Link to={'/'}>Go to main page</Link>
      </h3>
    </div >

  );
}

export default NotFound;
