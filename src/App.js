import './App.css';
import Banner from './components/banner';
import Team from './components/teamPage';
import News from './components/news';
import DaemonShare from './components/daemonShare';
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
          <Route path="/news" exact component={News} />
          <Route path="/post" exact component={DaemonShare} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
