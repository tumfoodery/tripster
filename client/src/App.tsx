// import gql from "graphql-tag";
import React from "react";
import { ThemeProvider } from "styled-components";
// import { useQuery } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toast from "react-toast-component";

import { theme, GlobalStyle } from "./style/theme";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

// const GET_NOTIFICATIONS = gql`
//   {
//     errors @client
//   }
// `;

const App: React.FC = () => {
  // const {
  //   // data: { errors }
  // } = useQuery(GET_NOTIFICATIONS);
  // console.log(errors);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
