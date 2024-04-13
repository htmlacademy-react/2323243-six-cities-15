import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header';
import { TestProvider, implement } from '../../testUtilities';
import { setupStore } from '../../store/setupStore';
import { AuthStatus } from '../../const';
import { UserProcess } from '../../types/sliceTypes';
import { UserData } from '../../types/user-data';

describe('Header component', () => {
  test('renders header with navigation when signed in', () => {
    const userData = implement<UserData>({
        email: 'test@email.com'
    })

    const mockStore = setupStore({
        USER: implement<UserProcess>({
            authStatus: AuthStatus.Auth,
            userData
        }),
    });

    const { getByText } = render(
      <Router>
        <Header block={'hasNavigation'}/>
      </Router>,
      {wrapper: ({children}) => <TestProvider store={mockStore} children={children} />}
    );

    expect(getByText('Sign out')).toBeInTheDocument();
    expect(getByText(userData!.email)).toBeInTheDocument();
  });

  test('renders header with navigation when signed out', () => {
    const mockStore = setupStore({
        USER: implement<UserProcess>({
            authStatus: AuthStatus.NoAuth,
        }),
    });

    const { getByText } = render(
      <Router>
        <Header block={'hasNavigation'}/>
      </Router>,
      {wrapper: ({children}) => <TestProvider store={mockStore} children={children} />}
    );

    expect(getByText('Sign in')).toBeInTheDocument();
  });

  test('renders header with NO navigation when signed in', () => {
    const userData = implement<UserData>({
        email: 'test@email.com'
    })

    const mockStore = setupStore({
        USER: implement<UserProcess>({
            authStatus: AuthStatus.Auth,
            userData
        }),
    });

    const { getByText } = render(
      <Router>
        <Header block={'noNavigation'}/>
      </Router>,
      {wrapper: ({children}) => <TestProvider store={mockStore} children={children} />}
    );

    expect(() => getByText('Sign out')).toThrowError('Unable to find an element with the text: Sign out');
    expect(() => getByText(userData!.email)).toThrowError(`Unable to find an element with the text: ${userData!.email}`);
  });


  test('renders header with NO navigation when signed out', () => {
    const mockStore = setupStore({
        USER: implement<UserProcess>({
            authStatus: AuthStatus.NoAuth,
        }),
    });

    const { getByText } = render(
      <Router>
        <Header block={'noNavigation'}/>
      </Router>,
      {wrapper: ({children}) => <TestProvider store={mockStore} children={children} />}
    );

    expect(() => getByText('Sign in')).toThrowError('Unable to find an element with the text: Sign in');
  });
});
