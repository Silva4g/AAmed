import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdSettings } from 'react-icons/io';
import { AiFillMedicineBox } from 'react-icons/ai';
import { FaUserCircle, FaList } from 'react-icons/fa';

import './styles.css';

export default function Logged() {
  return (
    <div className="container-logged">
      <div className="grid">
        <img src={require('../../assets/hospital.jpg')} alt="" />
        <Link to="/profile" className="items">
          <FaUserCircle size={25} />
          <span>Perfil</span>
        </Link>
        <Link to="/settings" className="items">
          <IoMdSettings size={25} />
          <span>Configurações</span>
        </Link>
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
        </table>
      </div>
      <div className="espera">
        <a>A caminho</a>
      </div>
      <div className="atendimento">
        <a>Em atendimento</a>
      </div>
    </div>
  );
}
