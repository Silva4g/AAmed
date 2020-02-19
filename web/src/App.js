import React, { Component } from "react";
import "./App.css";
import sus from "./external/sus.png";
import unimed from "./external/unimed.png";
import maps from "./external/maps.png";
import unicamp from "./external/unicamp.png";
import ima from "./external/ima.png";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";
import Slide from './components/Slide';

/* no react não tem o
<a href></a> o que precisa é isso aqui import { BrouserRouter, Switch, Route } from 'react-router-dom';
<BrowserRouter>
    <div className="App">
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" componenst={About} />
            <Route path="/shop" component={Shop} />
        </Switch>
    </div>
</BrowserRouter>

const Home = () => (
<div>
    <h1>Home Page</h1>
</div>
); const About = () => (
<div>
    <h1>About Page</h1>
</div>
); const Shop = () => (
<div>
    <h1>Shop Page</h1>
</div>
); */

/* Importando o SlideShow da classe master slide */

export default class App extends Component {
  render() {
    return (
      <>
        <Menu />
        <Slide />

        <div className="patrocinios">

          <div className="tituloPatrocinio">
            <p>PATROCÍNIOS</p>
          </div>

          <ul>
            <li>
              <div className="pat-respon">
                <img src={sus} alt="banner-sus" />
              </div>
            </li>
            <li>
              <div className="pat-repon">
                <img src={ima} alt="banner-ima" />
              </div>
            </li>
            <li>
              <div className="pat-respon">
                <img src={unimed} alt="banner-unimed" />
              </div>
            </li>
            <li>
              <div className="pat-respon">
                <img src={maps} alt="banner-google-maps" />
              </div>
            </li>
            <li>
              <div className="pat-respon">
                <img src={unicamp} alt="banner-unicamp" />
              </div>
            </li>
          </ul>
        </div>

        <Rodape />
      </>
    );
  }
}
