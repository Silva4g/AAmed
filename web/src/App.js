import React, { Component } from 'react'
import './App.css'
import logo from "./external/logo.png"
import SlideShow from "./components/Slide" /* Importando o SlideShow da classe master slide */

export default class App extends React.Component {
    render() {
        return (

            <>
                <div className="menu">

                    <div className="logo">
                        <img src={logo} />
                    </div>

                    <div className="itemsMenu">
                        <ul>
                            <li><a href="">HOME</a></li>
                            <li><a href="">PICTURE</a></li>
                            <li><a href="">SUPORTE</a></li>
                            <li><a href="">ESTUDOS</a></li>
                        </ul>
                    </div>

                    <div className="signInUp">
                        <a href="">LOG IN</a>
                        <button>SIGN UP</button>
                    </div>

                </div>

                <div className="slide" >
                    <SlideShow />
                </div>
            </>

        );
    }
}




