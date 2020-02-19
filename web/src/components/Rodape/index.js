import React from "react";
import "./style.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Rodape() {
  return (

    <div className="rodape">

      <div className="sub_rodape">

        <div className="redes_sociais">

          <div>
              <FaFacebookF />
          </div>

          <div>
              <FaInstagram />
          </div>

          <div>
              <FaLinkedin />
          </div>

          <div >
              <FaTwitter />
          </div>

        </div>

        <div>
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
