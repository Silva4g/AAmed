import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./App.css";
import Menu from "./components/Menu/index";
import Rodape from "./components/Rodape/index"; 
import Home from './Pages/Home';
import Picture from './Pages/Picture';
import Support from './Pages/Suporte';
import Estudos from './Pages/Estudos';
import Login from './Pages/Login';
import Register from './Pages/Register';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/picture" component={Picture}/>
          <Route path="/support" component={Support}/>
          <Route path="/study" component={Estudos}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
        <Rodape />
      </Router>
    );
  }
}
