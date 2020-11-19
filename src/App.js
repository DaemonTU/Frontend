import './App.css';
import Banner from './components/banner';
import Team from './components/teamPage';
import {BrowserRouter as Router,
Switch,Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Banner} />
          <Route path="/team" exact component={Team} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
