import Filters from '../../types/filters';


function Filter(): JSX.Element {
  const filters: Filters = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

  function handleClick(event: React.MouseEvent<HTMLLIElement> & {target: HTMLLIElement}) {
    return(event.target.textContent);
  }
  return (
    <ul className="locations__list tabs__list">
      {filters.map((filter) => (
        <li
          key={filter}
          className="locations__item"
          onClick={handleClick}
        >
          <a className="locations__item-link tabs__item" href="#">
            <span>{filter}</span>
          </a>
        </li>
      ))}


    </ul>
  );
}

export default Filter;
