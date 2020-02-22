import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import $ from 'jquery';
import {findDOMNode} from 'react-dom';

import "./App.css";
import Menu from "./components/Menu/index";
import Rodape from "./components/Rodape/index";
import defaults from './Pages/index';
const { Home, Picture, Support, About, Login, Register } = defaults;

export default class App extends Component {
  componentDidMount() {
    var lastScroll = 0;
    const el = findDOMNode(this.refs.menu);
    $(window).scroll(function (e) {
      var st = $(this).scrollTop();
      if (st > lastScroll) {
        $(el).addClass('hide');
      } else {
        $(el).removeClass('hide');
      }
      lastScroll = st;
    });
  }
  render() {
    return (
      <Router>
        <Menu ref="menu"/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/picture" component={Picture} />
          <Route path="/support" component={Support} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Rodape />
      </Router>
    );
  }
}
