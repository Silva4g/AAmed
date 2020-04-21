import React, { useEffect } from "react";

import { Slide } from "../../components";

import "./styles.css";
import api from "../../services/api";

export default function Home() {
  document.title = "1° Socorros";

  useEffect(() => {
    async function redirectToLogged() {
      try {
        api.get("/hospital/token", { withCredentials: true }).then((res) => {
          console.log(res);
        });

        const response = await api.get("/hospital/verify", {
          withCredentials: true,
        });
        if (response.data.auth === "isAuth") {
          localStorage.setItem("hptid", true);
          window.location.href = `/home/${response.headers["id"]}`;
        }
      } catch (error) {
        console.log(error);
      }
    }
    redirectToLogged();
    console.log("estou aqui");
  });

  return (
    <>
      {/* <div className="slide">
        <Slide />
      </div> */}
      
      <div className="patrocinios">
        <h1>PATROCÍNIOS</h1>
        <div className="patrocinios-list">
          <div className="pat-respon">
            <img src={require("../../assets/sus.png")} alt="banner-sus" />
          </div>
          <div className="pat-respon">
            <img src={require("../../assets/sebrae.png")} alt="banner-ima" />
          </div>
          <div className="pat-respon">
            <img
              src={require("../../assets/unimed2.png")}
              alt="banner-unimed"
            />
          </div>
          <div className="pat-respon">
            <img
              src={require("../../assets/google_maps_2020.png")}
              alt="banner-google-maps"
            />
          </div>
          <div className="pat-respon">
            <img
              src={require("../../assets/unicamp.png")}
              alt="banner-unicamp"
            />
          </div>
        </div>
      </div>
    </>
  );
}
