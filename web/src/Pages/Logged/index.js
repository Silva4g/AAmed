import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const id = match.params.id;
  //requisição do socket
  const [user, setUser] = useState([]);
  const [acceptUser, setAcceptUser] = useState([]);
  const [ok, setOk] = useState(null);

  const [socketAll, setSocketAll] = useState(null);
  const [solicitationUser, setSolicitationUser] = useState("");

  const [userAccept, setUserAccept] = useState(false);

  useEffect(() => {
    const socket = socketio("http://localhost:3333", {
      query: { hospital_id: id },
    });
    setSocketAll(socket);
    socket.on("aviso", (data) => {
      setUser([...user, data]);
      setOk(true);
    });
    socket.on("filter", (data) => {
      if (
        match.params.id !== data.hospital_id &&
        solicitationUser !== data.user_accept
      ) {
        setUser(user.filter((users) => users.user._id !== data.user_accept)); //tirar  da tela so hospital q n aceitou
      } else {
        setUserAccept(true);
        // setAcceptUser(user.filter((users) => users.user._id === data.user_accept));
      }
    });
  }, [id, match.params.id, solicitationUser, user]);

  function handleClick() {
    const cc = changeColor.current;
    cc.classList.toggle("bgcolorClick");
  }

  async function handleLogout() {
    await api.get("/hospital/logout", { withCredentials: true });
    localStorage.removeItem("hptid");
    window.location.href = "/";
  }
  async function accept(id) {
    try {
      await api.post(`/solicitations/${id}/approvals`, null, {
        headers: { hospital_id: match.params.id },
        withCredentials: true,
      });
      setSolicitationUser(id);
      socketAll.emit("accept", {
        hospital_id: match.params.id,
        user_accept: id,
      });
      setAcceptUser(user.filter((users) => users.user._id === id));
      setUser(user.filter((users) => users.user._id !== id));
    } catch (error) {
      console.log(error);
    }
  }
  const [testUser, setTest] = useState([]);
  useEffect(() => {
    acceptUser.filter((users) => setTest([...testUser, users]));
  }, [acceptUser]);
  // async function reject(id) {
  //   try {
  //     await api.post(`/bookings/${id}/rejections`, null, {
  //       headers: { hospital_id },
  //     });
  //     setUser(user.filter((user) => user.user_id !== id));
  //     socketAll.emit("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
        <div onClick={handleLogout} className="items logout">
          <span className="click">Sair</span>
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
        <span>Requisições</span>
        {ok &&
          user.map((users, i) => (
            <div key={i}>
              <div className="user-help">
                {users.user.name} está solicitando uma ajuda! com a seguinte
                descrição: {users.description}
                <button onClick={() => accept(users.user._id)}>ACEITAR</button>
                <br />
                <button>RECUSAR</button>
              </div>
            </div>
          ))}
      </div>
      <div className="atendimento">
        <span>A caminho</span>
        {userAccept &&
          testUser.map((users, i) => (
            <div key={i}>
              <div className="user-help">
                {users.user.name} está à caminho descrição:
                <br />
                {users.description}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
