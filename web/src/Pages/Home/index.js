import React, { useState, useEffect } from 'react';
import SlideShow from "../../components/Slide";

import sus from "../../assets/sus.png";
import sebrae from "../../assets/sebrae.png";
import unimed from "../../assets/unimed2.png";
import maps from "../../assets/google_maps_2020.png";
import unicamp from "../../assets/unicamp.png";

import isLogged from '../../utils/logged';

import Logged from "../Logged";

import './styles.css';
import api from '../../services/api';

export default function Home() {
  document.title = "1° Socorros";
  const [hospital, setHospital] = useState({});

  const token = localStorage.getItem('tk-hopt');

  useEffect(() => {//quando a pagina alterar o token, a função é chamada
   getData()
  }, [token]);

  async function getData() {
    if (token) {
      await api.get('/home', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(response => {})
        .catch(exp => {console.log(exp);})
    } else {
      return null;
    }
  } 

  return (
    isLogged() ?
      <>
        <Logged />
      </>
      :
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
              <img src={sebrae} alt="banner-ima" />
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
