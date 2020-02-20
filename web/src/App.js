import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./App.css";
import Menu from "./components/Menu/index";
import Rodape from "./components/Rodape/index"; 
import defaults from './Pages/index';
const { Home, Picture, Suport, Estudos, Login, Register } = defaults;

export default class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/picture" component={Picture}/>
          <Route path="/support" component={Suport}/>
          <Route path="/study" component={Estudos}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
        <Rodape />
      </Router>
    );
  }
}
