import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Slide } from "../../components";

import illustration from '../../assets/undraw_medicine.svg';
import aamed from '../../assets/aamed.svg';

import { Main, Container } from "./styles.js";
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
      <Container>
        <Main>
          <img src={aamed} alt="AAMed"/>
          <h2>
            Atendimento e Agilidade Médica
          </h2> 
        </Main>
          <img src={illustration} alt="Médicos"/>
      </Container>
    </>
  );
}
