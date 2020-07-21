import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Yi from './team/yi/yi'
import Sammy from './team/sammy/sammy'
import Steven from './team/steven/steven'
import FAQ from './faq'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Yi} exact path="/yi" />
          <Route component={Sammy} exact path="/sammy" />
          <Route component={Steven} exact path="/steven" />
          <Route component={FAQ} exact path="/faq" />
        </Switch>
    </Router>
  );
}

export default App;
