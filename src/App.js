import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Affiliates from "./components/Affiliates/affiliates";
import Register from "./components/Register/register";
import Main from "./Main";

function App() {
  return (
    <div>
      <Main></Main>
      <Router>
        <Switch>
          <Route path="/affiliates" component={Affiliates} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
