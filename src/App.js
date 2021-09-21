import './sass/main.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
