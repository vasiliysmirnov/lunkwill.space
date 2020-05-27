import React from 'react';
import './App.css';
import Home from './pages/Home'
import Demos from './pages/Demos'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/demos">
          <Demos />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
