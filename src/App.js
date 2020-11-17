import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import {BrowserRouter as Router,
Switch,Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Banner} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
