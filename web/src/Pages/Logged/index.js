import React, { useState } from "react";
import { Link } from "react-router-dom";
//socket io
import socketio from "socket.io-client";
import { IoMdSettings } from "react-icons/io";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaUserCircle, FaList } from "react-icons/fa";

import "./styles.css";
import { useEffect } from "react";
import api from "../../services/api";

export default function Logged() {
  let click = React.createRef();
  let changeColor = React.createRef();

  const [id, setId] = useState(null);
  //requisição do socket
  const [user, setUser] = useState([]);
  const [ok, setOk] = useState(null);

  useEffect(() => {
    async function getIdLogged() {
      const response = await api.get("/hospital/home", {
        headers: { Authorization: `Bearer ${localStorage.getItem("tk-hopt")}` },
      });
      setId(response.data._id);
    }
    getIdLogged();

    const socket = socketio("http://localhost:3333", {
      query: { hospital: id },
    });
    socket.on("aviso", (data) => {
      setUser([...user, data]);
      setOk(true);
    });
  }, [user, id]);

  useEffect(() => {
    const evt = click.current;
    const cc = changeColor.current;
    evt.addEventListener("click", () => {
      cc.classList.toggle("bgcolorClick");
    });
  }, [changeColor, click]);

  return (
    <div className="container-logged">
      {ok
        ? user.map((users) => (
            <div key={users.user_id}>
              <div className="user-help">
                {user.user} está solicitando uma ajuda!
              </div>
            </div>
          ))
        : ""}
      <div className="grid">
        <img src={require("../../assets/hospital.jpg")} alt="" />
        <Link to="/profile" className="items">
          <FaUserCircle size={25} />
          <span>Perfil</span>
        </Link>
        <span className="config">
          <div ref={changeColor}>
            <IoMdSettings size={25} />
            <input type="checkbox" className="hidden" id="toggle" />
            <label htmlFor="toggle" className="click" ref={click}>
              Configurações
            </label>
            <ul className="info-config">
              <Link to="/update">Atualizar</Link>
              <Link to="/changepassword">Trocar senha</Link>
              <Link to="/deleteaccount">Excluir conta</Link>
            </ul>
          </div>
        </span>
        <Link to="/hospitals" className="items">
          <FaList size={25} />
          <span>Hospitais</span>
        </Link>
        <Link to="/treatment" className="items">
          <AiFillMedicineBox size={25} />
          <span>Atendimentos</span>
        </Link>
        <Link to="/logout" className="items logout">
          <span>Sair</span>
        </Link>
      </div>
      <div className="menu-logado">
        <table>
          <tbody>
            <tr>
              <th>
                <span>Pacientes</span>
              </th>
              <th>
                <span>Leitos</span>
              </th>
              <th>
                <span>Medicos</span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="espera">
        <span>A caminho</span>
      </div>
      <div className="atendimento">
        <span>Em atendimento</span>
      </div>
    </div>
  );
}
