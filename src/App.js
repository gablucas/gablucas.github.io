import { GlobalStyle } from './styles/global';
import Header from './components/Header/container/index';
import Home from './components/Home/container/index';
import About from './components/About/container/index';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <GlobalStyle />
    </>
  );
}

export default App;
