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

const { Home, Support, About, Login, Register, NotFound, Edit } = defaults;


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
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/hospitals" component={() => <h1>TESTE</h1>} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/logout" component={Logout} />
                <Route path="/profile" component={Profile} />
                <Route path="/edit" component={Edit} />
                <Route path="*" component={NotFound} />
              </Switch>
            </>
            :
            <>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/support" component={Support} />
                <Route path="/about" component={About} />
                <LoginRoute path="/login" component={Login} />
                <RegisterRoute path="/register" component={Register} />
                <Route path="*" component={NotFound} />
              </Switch>
            </>
          }

        </Switch>
        <Rodape />
      </Router>
    );
  }
}
