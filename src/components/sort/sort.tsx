import { useState, useEffect, useRef } from 'react';

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

  const refSpan = useRef<HTMLUListElement | null>(null);

  const [sortItems, setSortItems] = useState(items);
  const [isOpened, setIsOpened] = useState(false);

  function handleDocumentKeydown(event: KeyboardEvent) {
    if (event.key.startsWith('Esc') && isOpened) {
      event.preventDefault();
      setIsOpened(false);
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleDocumentKeydown);

    return (() => document.removeEventListener('keydown', handleDocumentKeydown));
  });

  function handleDocumentClick(event: MouseEvent) {
    const isContains = refSpan.current?.contains(event.target as Element);
    if (!isContains) {
      setIsOpened(false);
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return (() => document.removeEventListener('click', handleDocumentClick));
  });

  function handleSpanClick(event: React.MouseEvent) {
    event.stopPropagation();
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }

  function handleLiClick(sortValue: SortType) {
    return () => {
      items.forEach((it) => (it.isSelected = sortValue === it.value));

      cb(sortValue);
      setIsOpened((prevIsOpened) => !prevIsOpened);
      setSortItems(items);
    };
  }

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"


    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSpanClick}
        ref={refSpan}
      >
        {sortItems.find((item) => item.isSelected)?.value || 'Popular'}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom places__options${isOpened ? '--opened' : '--closed'}`}

      >
        {
          sortItems.map((item) => (
            <li
              key={item.value}
              className={`places__option ${item.isSelected ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={handleLiClick(item.value)}
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
