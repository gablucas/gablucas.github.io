import { GlobalStyle } from './styles/global';
import Header from './components/Header/container/index';
import Home from './components/Home/container/index';
import About from './components/About/container/index';
import Projects from './components/Projects/container/index';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <GlobalStyle />
    </>
  );
}

export default App;
