import { useState } from 'react';

import { SortType } from '../../types/sort';

type SortProps = {
  cb: (sortValue: SortType) => void;
}

function Sort({ cb }: SortProps): JSX.Element {
  const values: Array<SortType> = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
  const items = values.map((value) => ({
    value,
    isSelected: false
  }));

  const [sortItems, setSortItems] = useState(items);
  const [ulClassName, setUlClassName] = useState('places__options--closed');

  function handleUlClick() {
    setUlClassName('places__options--opened');
  }

  function handleLiClick(sortValue: SortType) {
    items.forEach((it) => (it.isSelected = sortValue === it.value));

    cb(sortValue);
    setUlClassName('places__options--closed');
    setSortItems(items);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleUlClick}
      >
        {sortItems.find((item) => item.isSelected)?.value || 'Popular'}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${ulClassName}`}

      >
        {
          sortItems.map((item) => (
            <li
              key={item.value}
              className={`places__option ${item.isSelected ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => handleLiClick(item.value)}
            >
              {item.value}
            </li>
          ))
        }

      </ul>
    </form>
  );
}

export default Sort;
