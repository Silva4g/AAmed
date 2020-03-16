import React, { useEffect } from 'react';

import { Slide } from '../../components';
import isLogged from '../../utils/logged';
import Logged from "../Logged";

import './styles.css';
import api from '../../services/api';

export default function Home() {

  document.title = "1° Socorros";
  const token = localStorage.getItem('tk-hopt');
  
  useEffect(() => {//quando a pagina alterar o token, a função é chamada
    const getData = async() => {
      if (token) {
        await api.get('/hospital/home', {
          headers: { Authorization: `Bearer ${token}` }
        })
          .then(response => { })
          .catch(exp => console.log(exp))
      } else {
        return null;
      }
    }
    getData();
  }, [token]);

  return (
    isLogged() ?
      <>
        <Logged />
      </>
      :
      <>
        <div className="slide">
          <Slide />
        </div>
        <div className="patrocinios">
          <h1>PATROCÍNIOS</h1>
          <div className="patrocinios-list">
            <div className="pat-respon">
              <img src={require('../../assets/sus.png')} alt="banner-sus" />
            </div>
            <div className="pat-respon">
              <img src={require('../../assets/sebrae.png')} alt="banner-ima" />
            </div>
            <div className="pat-respon">
              <img src={require('../../assets/unimed2.png')} alt="banner-unimed" />
            </div>
            <div className="pat-respon">
              <img src={require('../../assets/google_maps_2020.png')} alt="banner-google-maps" />
            </div>
            <div className="pat-respon">
              <img src={require('../../assets/unicamp.png')} alt="banner-unicamp" />
            </div>
          </div>
        </div>
      </>
  );
}
