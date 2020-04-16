import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./styles.css";
import $ from "jquery";
import { findDOMNode } from "react-dom";

export default class Menu extends Component {
  componentDidMount() {
    if (this.props) {
      return;
    } else {
      var node = findDOMNode(this.refs.btn);
      var links = findDOMNode(this.refs.links);

      node.addEventListener("click", () => {
        links.classList.toggle("nav-active");
        node.classList.toggle("toggle");
      });

      var lastScroll = 0;
      const el = findDOMNode(this.refs.menu);
      $(window).scroll(function (e) {
        var st = $(this).scrollTop();
        if (st > lastScroll) {
          $(el).css("transform", "translateY(-120px)");
        } else {
          $(el).css("transform", "none");
        }
        lastScroll = st;
      });
    }
  }
  render() {
    if (this.props.log) {
      return null;
    } else {
      return (
        <div className="content">
          <div className="menu" ref="menu">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="itemsMenu" id="links" ref="links">
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/support">SUPORTE</Link>
                </li>
                <li>
                  <Link to="/about">SOBRE</Link>
                </li>
              </ul>
              <div className="signInUp">
                <Link to="/login">LOGIN</Link>
                <Link to="/register">
                  <button>CADASTRAR</button>
                </Link>
              </div>
            </div>
            <div className="burger" id="btn" ref="btn">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </div>
      );
    }
  }
}
