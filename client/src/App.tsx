// import gql from "graphql-tag";
import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
// import { useQuery } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toast from "react-toast-component";

import { theme } from "./style/theme";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${props => props.theme.color.text};
    background: ${props => props.theme.color.background};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.color.link};
  }
  
`;

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
