import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Filter, {filters} from './filter';
import { TestProvider, implement } from '../../testUtilities';
import { setupStore } from '../../store/setupStore';
import { AppProcess } from '../../types/sliceTypes';

describe('Filter component', () => {
  test('renders 6 inactive filters', () => {
    const mockStore = setupStore({
        APP: implement<AppProcess>({}),
    });

    const { getByText, getByTestId, getAllByTestId } = render(
      <Router>
        <Filter />
      </Router>,
      {wrapper: ({children}) => <TestProvider store={mockStore} children={children} />}
    );

    expect(filters.length).toEqual(6);
    for (const filter of filters) {
      expect(getByText(filter)).toBeInTheDocument();
    }

    expect(() => getByTestId('active')).toThrowError('Unable to find an element by: [data-testid="active"]');
    expect(getAllByTestId('inactive').length).toEqual(6);
  });

  test('renders 5 inactive filters and 1 active filter', () => {
    const mockStore = setupStore({
        APP: implement<AppProcess>({
          activeCity: 'Amsterdam'
        }),
    });

    const { getByText, getByTestId, getAllByTestId } = render(
      <Router>
        <Filter />
      </Router>,
      {wrapper: ({children}) => <TestProvider store={mockStore} children={children} />}
    );

    expect(filters.length).toEqual(6);
    for (const filter of filters) {
      expect(getByText(filter)).toBeInTheDocument();
    }

    expect(getByTestId('active')).toBeInTheDocument();
    expect(getAllByTestId('inactive').length).toEqual(5);
  });
  
  test('sets the active city when click on filter', () => {
    const mockStore = setupStore({
        APP: implement<AppProcess>({
          activeCity: 'Amsterdam'
        }),
    });

    const { getByTestId, getByTitle } = render(
      <Router>
        <Filter />
      </Router>,
      {wrapper: ({children}) => <TestProvider store={mockStore} children={children} />}
    );

    expect(getByTestId('active').children[0].innerHTML).toEqual('Amsterdam');

    fireEvent.click(getByTitle('Paris'));

    expect(getByTestId('active').children[0].innerHTML).toEqual('Paris');
  });
});
