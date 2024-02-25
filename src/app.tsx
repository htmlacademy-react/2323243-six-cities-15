import MainPage from './components/pages/main-page/mainPage';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return <MainPage offersCount={offersCount}/>;
}

export default App;
