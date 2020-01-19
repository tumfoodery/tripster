import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Copyright from './components/Copyright';

import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Copyright />
      </Router>
    </>
  );
}

export default App;