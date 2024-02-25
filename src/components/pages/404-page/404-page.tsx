import { Link } from 'react-router-dom';
import './404-page.css';

function NotFound() {
  return (

    <div className="notfound">
      <h1 className="notfound--title">404 NOT FOUND</h1>
      <h3>
        <Link to={'/'} className="link">Go to main page</Link>
      </h3>
    </div>

  );
}

export default NotFound;
