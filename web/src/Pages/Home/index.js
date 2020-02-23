import React from 'react';
import SlideShow from "../../components/Slide/index";

// ima foi trocado por sebrae por conta do tamanho 
import sus from "../../assets/sus.png";
import sebare from "../../assets/sebrae.png";
import unimed from "../../assets/unimed2.png";
import maps from "../../assets/google_maps_2020.png";
import unicamp from "../../assets/unicamp.png";

import './styles.css';

export default function Home() {
  return (
    <>
      <div className="slide">
        <SlideShow />
      </div>

      <div className="patrocinios">
        <h1>PATROCÍNIOS</h1>
        <div className="patrocinios-list">
              <div className="pat-respon">
                <img src={sus} alt="banner-sus" />
              </div>
              <div className="pat-respon">
                <img src={sebare} alt="banner-ima" />
              </div>
              <div className="pat-respon">
                <img src={unimed} alt="banner-unimed" />
              </div>
              <div className="pat-respon">
                <img src={maps} alt="banner-google-maps" />
              </div>
              <div className="pat-respon">
                <img src={unicamp} alt="banner-unicamp" />
              </div>
        </div>
      </div>
    </>
  );
}
