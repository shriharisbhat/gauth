import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Welcome from "./components/Welcome/welcome";
import Login from "./components/Login/login";
import Affiliates from "./components/Affiliates/affiliates";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/affiliates" component={Affiliates} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Welcome} />
      </Switch>
    </Router>
  );
}

export default App;
