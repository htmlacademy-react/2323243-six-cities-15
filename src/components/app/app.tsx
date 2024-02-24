import Main from '../main/main';

type AppProps = {
  offersNumber: number;
}

function App({offersNumber}: AppProps): JSX.Element {
  return <Main offersNumber={offersNumber}/>;
}

export default App;
