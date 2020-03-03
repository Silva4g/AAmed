import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";
import Menu from "./components/Menu/index";
import Rodape from "./components/Rodape/index";
import defaults from './Pages/index';
import Logout from "./Pages/Logout";
import { LoginLogged, RegisterLogged, LoginRoute, RegisterRoute, LogoutRoute, ProfileLogged, NotFoundL } from './auth';
import isLogged from './utils/logged';
import Profile from "./Pages/Profile";

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
          {isLogged() ?
            <>
              <Route path="/" exact component={Home} />
              <LoginLogged path="/login" component={Login} />
              <RegisterLogged path="/register" component={Register} />
              <LogoutRoute path="/logout" component={Logout} />
              <ProfileLogged path="/profile" component={Profile} />
            </>
            :
            <>
              <Route path="/" exact component={Home} />
              <Route path="/support" component={Support} />
              <Route path="/about" component={About} />
              <LoginRoute path="/login" component={Login} />
              <RegisterRoute path="/register" component={Register} />
              <NotFoundL path="*" component={NotFound} />
            </>
          }

        </Switch>
        <Rodape />
      </Router>
    );
  }
}
