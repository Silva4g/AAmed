import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";
import Menu from "./components/Menu/index";
import Rodape from "./components/Rodape/index";
import defaults from './Pages/index';
const { Home, Picture, Support, About, Login, Register, NotFound } = defaults;

export default class App extends Component {

  render() {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/picture" component={Picture} />
          <Route path="/support" component={Support} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Rodape />
      </Router>
    );
  }
}
