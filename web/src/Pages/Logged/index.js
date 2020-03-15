import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdSettings } from 'react-icons/io';
import { AiFillMedicineBox } from 'react-icons/ai';
import { FaUserCircle, FaList } from 'react-icons/fa';

import './styles.css';
import { useEffect } from 'react';

export default function Logged() {

  let click = React.createRef();
  let changeColor = React.createRef();

  useEffect(() => {
    const evt = click.current;
    const cc = changeColor.current;
    evt.addEventListener('click', () => {
      cc.classList.toggle('bgcolorClick');
    });
  }, [changeColor, click]);

  return (
    <div className="container-logged">
      <div className="grid">
        <img src={require('../../assets/hospital.jpg')} alt="" />
        <Link to="/profile" className="items">
          <FaUserCircle size={25} />
          <span>Perfil</span>
        </Link>
        <span className="config">
          <div ref={changeColor}>
            <IoMdSettings size={25} />
            <input type="checkbox" className="hidden" id="toggle" />
            <label htmlFor="toggle" className="click" ref={click}>Configurações</label>
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
        <Link to='/logout' className="items logout">
          <span>Sair</span>
        </Link>
      </div>
      <div className="menu-logado">
        <table>
          <tbody>
            {/** ENFEITAR OS SPANS POIS SÃO BOTÕES PARA 
           * RENDERIZAR A MESMA PAGINA **/}
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
