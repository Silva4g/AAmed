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

export default function Logged({ match }) {
  let click = React.createRef();
  let changeColor = React.createRef();
  const [id, setId] = useState(match.params.id);
  //requisição do socket
  const [user, setUser] = useState([]);
  const [ok, setOk] = useState(null);

  //provavelmente não precisa desse useEffect aqui, vou ver dps
  useEffect(() => {
    async function getIdLogged() {
      const response = await api.get("/hospital/token", {
        withCredentials: true,
      });
      const tk = response.data.token;
      return tk;
    }
    async function reqTk() {
      api.defaults.headers.Authorization = `Bearer ${await getIdLogged()}`;
    }
    getIdLogged();
    reqTk();
  }, [id]);

  useEffect(() => {
    const socket = socketio("http://localhost:3333", {
      query: { hospital_id: id },
    });
    socket.on("aviso", (data) => {
      console.log(data);
      setUser([...user, data]);
      setOk(true);
    });
  }, [id, user]);

  function handleClick() {
    const cc = changeColor.current;
    cc.classList.toggle("bgcolorClick");
  }

  async function handleLogout() {
    await api.get("/hospital/logout", { withCredentials: true });
    localStorage.removeItem("hptid");
    window.location.href = "/";
  }

  return (
    <div className="container-logged">
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
            <label
              htmlFor="toggle"
              className="click"
              onClick={handleClick}
              ref={click}
            >
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
        <div onClick={handleLogout} href="#" className="items logout">
          <span>Sair</span>
        </div>
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
        {ok
          ? user.map((users) => (
              <div key={users.user._id}>
                <div className="user-help">
                  {users.user.name} está solicitando uma ajuda! com a seguinte
                  descrição: {users.description}
                  <button>ACEITAR</button>
                  <br />
                  <button>RECUSAR</button>
                </div>
              </div>
            ))
          : ""}
      </div>
      <div className="atendimento">
        <span>Em atendimento</span>
      </div>
    </div>
  );
}
