import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Home, SignUp } from "components";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
