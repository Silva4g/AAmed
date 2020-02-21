import React, { Component } from 'react';
import "./style.css";
import imgInicial from "../../assets/imgAbout.jpeg";
import imgDescription2 from "../../assets/imgDescription2.jpeg";

// import { Container } from './styles';

export default class About extends Component {
  render() {
    return (
      <>
        <div className="img_Inicial">
          <img src={imgInicial} alt="imgInicial"></img>

          <div className="frase_img">
            <span typeof="text"> De uma sala para o mundo!</span>
            <a href="#c2">Saiba mais!</a>
          </div>

        </div>

        <div className="descricao">
          <div className="img_Descricao"> 
            <img src={imgDescription2} alt="imgDescription2"></img>
          </div>
          <div className="text_Descricao">
            <h2>A melhor empresa</h2>
            <h2>FourMembers é considerada</h2>
            <h2>a melhor empresa para se</h2>
            <h2>trabalhar em Campinas</h2>
          </div>
        </div>




        <div className="c1"></div>
        <div className="c2" id="c2"></div>
        <section id="conteudo"></section>
      </>

    );
  }
}
