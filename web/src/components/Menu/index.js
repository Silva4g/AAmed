import React from "react";
import "./style.css";
import logo from "./logo.png";

const Menu = () => {
  return (

    <div className="fora">

      <div className="menu">

        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="itemsMenu">

          <ul>
            {/* IREI ARRUMAR OS LINKS */}

            <li>
              <a href="/">HOME</a>
            </li>

            <li>
              <a href="/">PICTURE</a>
            </li>

            <li>
              <a href="/">SUPORTE</a>
            </li>

            <li>
              <a href="/">ESTUDOS</a>
            </li>

          </ul>

        </div>

        <div className="signInUp">
          <a href="/">LOG IN</a>
          <button>SIGN UP</button>
        </div>

      </div>
      
    </div>
  );
};

export default Menu; /* Exportando apresentação */
