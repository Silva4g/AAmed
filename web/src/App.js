import React, { Component } from 'react'
import './App.css'
import logo from "./external/logo.png"
import sus from "./external/sus.png"
import unimed from "./external/unimed.png"
import maps from "./external/maps.png"
import unicamp from "./external/unicamp.png"
import ima from "./external/ima.png"
import SlideShow from "./components/Slide" /* Importando o SlideShow da classe master slide */

/* no react não tem o <a href></a> o que precisa é isso aqui 
    import { BrouserRouter, Switch, Route } from 'react-router-dom';
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
    );
    const About = () => (
        <div>
            <h1>About Page</h1>
        </div>
    );
    const Shop = () => (
        <div>
            <h1>Shop Page</h1>
        </div>
    );

*/

export default class App extends Component {
    render() {
        return (

            <>

                <div className="menu">

                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="itemsMenu">
                        <ul> {/* IREI ARRUMAR OS LINKS */}
                            <li><a href="/">HOME</a></li>
                            <li><a href="/">PICTURE</a></li>
                            <li><a href="/">SUPORTE</a></li>
                            <li><a href="/">ESTUDOS</a></li>
                        </ul>
                    </div>

                    <div className="signInUp">
                        <a href="/">LOG IN</a>
                        <button>SIGN UP</button>
                    </div>

                </div>

                <div className="slide" >
                    <SlideShow />
                </div>

                <div className="tituloPatrocinio">
                    <p>PATROCÍNIOS</p>
                </div>
                <div className="patrocinios">

                    <div className="patrocinio1 pat-respon">
                        <img src={sus} alt="banner-sus" />
                    </div>

                    <div className="patrocinio2 pat-respon">
                        <img src={ima} alt="banner-ima" />
                    </div>
                    <div className="patrocinio3 pat-respon">
                        <img src={unimed} alt="banner-unimed" />
                    </div>

                    <div className="patrocinio4 pat-respon">
                        <img src={maps} alt="banner-google-maps" />
                    </div>

                    <div className="patrocinio5 pat-respon">
                        <img src={unicamp} alt="banner-unicamp" />
                    </div>
                </div>
            </>

        );
    }
}




