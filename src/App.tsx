import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projetos" component={Projects} />
        <Route path="/contato" component={Contact} />
      </Switch>
    <Footer />
    <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
