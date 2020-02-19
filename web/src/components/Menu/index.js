import React from "react";
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
