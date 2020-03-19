import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";
import { Menu, Rodape } from "./components";
import { About, Edit, Home, Hospitals, Login, Logout, NotFound, Profile, Register, Support, Update, ChangePass, Delete } from './Pages';
import { LoginRoute, RegisterRoute } from './auth';
import isLogged from './utils/logged';

export default function App() {
  return (
    <Router>
      {isLogged() ? '' : <Menu />}
      <Switch>
        {isLogged() ?
          <>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/hospitals" component={Hospitals} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/logout" component={Logout} />
              <Route path="/profile" component={Profile} />
              <Route path="/edit" component={Edit} />
              <Route path="/update" component={Update} />
              <Route path="/changepassword" component={ChangePass} />
              <Route path="/deleteaccount" component={Delete} />
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
