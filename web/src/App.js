import React, { Component } from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
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

                <div className="rodape">

                    <div className="sub_rodape">

                        <div className="redes_sociais">
                            <div className="facebook">  <h2> <FaFacebookF /> </h2> </div>
                            <div className="instagram">  <h2> <FaInstagram /> </h2> </div>
                            <div className="linkedin">  <h2> <FaLinkedin /> </h2> </div>
                            <div className="twitter">  <h2> <FaTwitter /> </h2> </div>
                        </div>

                        <div className="fale_conosco">
                            <i>Fale Conosco: (19) 3269-4089</i>
                        </div>
                    </div>

                    <div className="sub_rodape2">
                        <ul>
                            <span className="usuarios">Usuários</span>

                            <li>Aplicativo</li>
                            <li>Login</li>
                            <li>Cadastro</li>
                            <li>Localização</li>
                            <li>Suporte</li>
                            <li>Termos de Uso</li>
                        </ul>

                        <ul>
                            <span className="fast_Help">Fast Help</span>

                            <li>Certificações</li>
                            <li>Membros</li>
                            <li>Base</li>
                            <li>Localização</li>
                            <li>Contato</li>
                            <li>Aplicação</li>
                        </ul>

                        <ul>
                            <span className="hospitais">Hospitais</span>

                            <li>Certificações</li>
                            <li>Login</li>
                            <li>Unidades</li>
                            <li>Localização</li>
                            <li>Contato</li>
                            <li>Termos de Uso</li>
                        </ul>
                    </div>

                </div>
            </>

        );
    }
}




