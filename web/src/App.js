import React, { Component } from 'react'
import './App.css'
import logo from "./external/logo.png"
import sus from "./external/sus.png"
import samu from "./external/samu.png"
import unimed from "./external/unimed.png"
import maps from "./external/maps.png"
import unicamp from "./external/unicamp.png"
import ima from "./external/ima.png"
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

                <div className="patrocinios">

                    <div className="tituloPatrocinio">
                        <p>PATROCÍNIOS</p>
                    </div>

                    <div className="patrocinio1">
                        <img src={sus} />
                    </div>

                    <div className="patrocinio2">
                        <img src={ima} />
                    </div>

                    <div className="patrocinio3">
                        <img src={unimed} />
                    </div>

                    <div className="patrocinio4">
                        <img src={maps} />
                    </div>

                    <div className="patrocinio5">
                        <img src={unicamp} />
                    </div>
                </div>
            </>

        );
    }
}




