import React, { Component } from 'react';

import "./App.css";
import sus from "../../assets/sus.png";
import unimed from "../../assets/unimed.png";
import maps from "../../assets/maps.png";
import unicamp from "../../assets/unicamp.png";
import ima from "../../assets/ima.png";
import SlideShow from "../../components/Slide/index";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="slide">
          <SlideShow />
        </div>

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
      </>
    );
  }
}
