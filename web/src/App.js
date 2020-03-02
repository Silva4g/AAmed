import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";
import Menu from "./components/Menu/index";
import Rodape from "./components/Rodape/index";
import defaults from './Pages/index';
import Logout from "./Pages/Logout";
import { LoginLogged, RegisterLogged, LoginRoute, RegisterRoute, LogoutRoute } from './auth';
import isLogged from './utils/logged';

const { Home, Support, About, Login, Register, NotFound } = defaults;


export default class App extends Component {

  render() {
    return (
      <Router>
        {
          isLogged() ? '' :
            <Menu />
        }
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/support" component={Support} />
          <Route path="/about" component={About} />
          {isLogged() ?
            <>
              <LoginLogged path="/login" component={Login} />
              <RegisterLogged path="/register" component={Register} />
              <LogoutRoute path="/logout" component={Logout} />
              <Route path="*" component={NotFound} />

            </>
            :
            <>
              <LoginRoute path="/login" component={Login} />
              <RegisterRoute path="/register" component={Register} />
              <Route path="*" component={NotFound} />

            </>
          }
        </Switch>
        <Rodape />
      </Router>
    );
  }
}
