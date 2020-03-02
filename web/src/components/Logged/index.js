import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdSettings } from 'react-icons/io';
import { AiFillMedicineBox } from 'react-icons/ai';
import { FaUserCircle, FaList } from 'react-icons/fa';

import './styles.css';

export default function Sidebar({ hospital }) {
  return (
    <div className="container-logged">
      <aside>
        <img src={require('../../assets/hospital.jpg')} />
        <Link to="/profile" className="items">
          <FaUserCircle size={25} />
          <span>Perfil</span>
        </Link>
        <Link className="items">
          <IoMdSettings size={25} />
          <span>Configurações</span>
        </Link>
        <Link className="items">
          <FaList size={25} />
          <span>Hospitais</span>
        </Link>
        <Link className="items">
          <AiFillMedicineBox size={25} />
          <span>Atendimentos</span>
        </Link>
        <Link to='/logout' className="items logout">
          <span>Sair</span>
        </Link>
      </aside>
    </div>
  );
}
