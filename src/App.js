import { GlobalStyle } from './styles/global';
import Header from './components/Header/container/index';
import Home from './components/Home/container/index';

function App() {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
