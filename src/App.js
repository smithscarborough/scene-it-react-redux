import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
