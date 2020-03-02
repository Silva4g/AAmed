import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuth = () => {
    if (localStorage.getItem('tk-hopt') !== null) {
        return true;
    }
    return false;
}
const check = () => {
    var bool;
    var width = window.innerWidth;
    if (width < 774) {
        bool = false;
    } else {
        bool = true;
    }
    return bool;
}

/**rotas bloqueadas para celulares */
const LoginRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                check() ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/'
                            }}
                        />
                    )
            }
        />
    )
}
const RegisterRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                check() ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/'
                            }}
                        />
                    )
            }
        />
    )
}
const LogoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                check() ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/'
                            }}
                        />
                    )
            }
        />
    )
}

/**rotas bloqueadas para hospital logado */
const LoginLogged = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuth() ? (
                    <Redirect to={{ pathname: '/' }} />
                ) : (
                        <Component {...props} />
                    )
            }
        />
    )
}
const RegisterLogged = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuth() ? (
                    <Redirect to={{ pathname: '/' }} />

                ) : (
                        <Component {...props} />
                    )
            }
        />
    )
}
const ProfileLogged = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuth() ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={{ pathname: '/' }} />
                    )
            }
        />
    )
}
export {
    LoginRoute,
    RegisterRoute,
    LogoutRoute,
    RegisterLogged,
    LoginLogged,
    ProfileLogged
}