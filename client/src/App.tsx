import React, { useState }from 'react';
import { Normalize } from 'styled-normalize';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toast from 'react-toast-component';
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

const App: React.FC = () => {
  const [isOpen, setToast] = useState(true);
  return (
    <>
      <Toast
        isOpen={isOpen}
        hasAutoDismiss={false}
        hasCloseBtn
        closeCallback={() => setToast(false)}
        description="There's some great info here."
        title="App Notification!!"
        duration={5000}
        classNames={['info']}  // 'success', 'info', 'warning', 'error'
      />
      <Normalize />
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
