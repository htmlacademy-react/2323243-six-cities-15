import { useState } from 'react';

function Sort(): JSX.Element {
  const values = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
  const items = values.map((value, ind) => ({
    value,
    isSelected: ind === 0
  }));

  const [state, setState] = useState(items);

  function handleClick(event: React.MouseEvent<HTMLLIElement> & { target: HTMLLIElement }) {
    const selectedElement = event.target;
    items.forEach((it) => (it.isSelected = selectedElement.textContent === it.value));

    setState(items);
  }
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {state.find((item) => item.isSelected)?.value}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {
          state.map((item) => (
            <li
              key={item.value}
              className={`places__option ${item.isSelected ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={handleClick}
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
