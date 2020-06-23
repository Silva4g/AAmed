import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Slide } from "../../components";

import "./styles.css";
import Menu from "../../components/Menu";
import api from "../../services/api";

export default function Home() {
  document.title = "AAMed";

  const { push } = useHistory();

  useEffect(() => {
    async function redirectToLogged() {
      if (!localStorage.getItem("hptid")) {
        return;
      }
      try {
        const response = await api.get("/hospital/verify", {
          withCredentials: true,
        });
        if (response.data.auth === "isAuth") {
          localStorage.setItem("hptid", true);
          push(`/home/${response.headers["id"]}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
    redirectToLogged();
  });

  return (
    <>
      <Menu />

      <div className="slide">
        <Slide />
      </div>

      <div className="patrocinios">
        <h1>PATROCÍNIOS</h1>
        <div className="patrocinios-list">
          <div className="pat-respon">
            <img
              src={require("../../assets/sus.png")}
              alt="SUS - Sistema Único de Saúde"
              title="SUS - Sistema Único de Saúde"
            />
          </div>
          <div className="pat-respon">
            <img
              src={require("../../assets/sebrae.png")}
              alt="SEBRAE"
              title="SEBRAE"
            />
          </div>
          <div className="pat-respon">
            <img
              src={require("../../assets/unimed2.png")}
              alt="Unimed"
              title="Unimed"
            />
          </div>
          <div className="pat-respon">
            <img
              src={require("../../assets/google_maps_2020.png")}
              alt="Google Maps"
              title="Google Maps"
            />
          </div>
          <div className="pat-respon">
            <img
              src={require("../../assets/unicamp.png")}
              alt="Unicamp"
              title="Unicamp"
            />
          </div>
        </div>
      </div>
    </>
  );
}
