import React from "react";
import { Link } from 'react-router-dom';

import "./style.css";
import logo from "../../assets/logo.png";

export default function Menu() {
  return (

    <div className="content">
      <div className="menu">

        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="itemsMenu">
          <ul>
            {/* IREI ARRUMAR OS LINKS */}

            <li>
              <Link to="/">
                HOME
                </Link>
            </li>


            <li>
              <Link to="/picture">
                PICTURE
              </Link>
            </li>


            <li>
              <Link to="/support">
                SUPORTE
            </Link>
            </li>
            <li>
              <Link to="/study">
                ESTUDOS
              </Link>
            </li>
          </ul>
        </div>

        <div className="signInUp">
          <Link to="/login">LOG IN</Link>
          <Link to="/register">
            <button>SIGN UP</button>
          </Link>
        </div>

      </div>
    </div>
  );
};
