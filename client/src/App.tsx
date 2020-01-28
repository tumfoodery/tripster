import React from "react";
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toast from "react-toast-component";

import { theme } from './style/Theme';
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Toast />
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
