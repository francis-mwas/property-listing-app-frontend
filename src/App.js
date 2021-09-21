import { Route, Switch } from 'react-router';
import './sass/main.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
