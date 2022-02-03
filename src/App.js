import { Route, Switch } from 'react-router';
import './sass/main.scss';
import Home from './pages/Home';
import SingleProperty from './pages/SingleProperty';


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/properties/:slug" component={SingleProperty} />
      </Switch>
    </>
  );
}

export default App;
