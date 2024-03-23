import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCity } from '../../store/actions';

import Filters from '../../types/filters';
import { ActiveCity } from '../../types/city';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Filter(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.activeCity);
  const filters: Filters = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const dispatch = useAppDispatch();

  function handleClick(filter: ActiveCity) {
    return () => dispatch(setCity({city: filter}));
  }

  return (
    <ul className="locations__list tabs__list">
      {filters.map((filter) => (
        <li
          key={filter}
          className="locations__item"
          onClick={handleClick(filter)}
        >
          <Link
            to={AppRoute.Main}
            className={`${filter === selectedCity ? 'tabs__item--active ' : ''}locations__item-link tabs__item`}
          >
            <span>{filter}</span>
          </Link>
        </li>
      ))}


    </ul>
  );
}

export default Filter;
