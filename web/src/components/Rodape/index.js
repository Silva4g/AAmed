import React from "react";
import "./style.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Rodape = () => {
  return (

    <div className="rodape">

      <div className="sub_rodape">

        <div className="redes_sociais">

          <div className="facebook">
            <h2>
              <FaFacebookF />{" "}
            </h2>
          </div>

          <div className="instagram">
            <h2>
              <FaInstagram />{" "}
            </h2>
          </div>

          <div className="linkedin">
            <h2>
              <FaLinkedin />{" "}
            </h2>
          </div>

          <div className="twitter">
            <h2>
              <FaTwitter />{" "}
            </h2>
          </div>

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
  );
};

export default Rodape; /* Exportando apresentação */
