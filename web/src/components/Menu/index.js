import React, { Component } from "react";
import { Link } from 'react-router-dom';

import $ from 'jquery';
import {findDOMNode} from 'react-dom';

import "./style.css";
import logo from "../../assets/logo.png";

export default class Menu extends Component {
  componentDidMount() {
    var lastScroll = 0;
    const el = findDOMNode(this.refs.menu);
    $(window).scroll(function (e) {
      var st = $(this).scrollTop();
      if (st > lastScroll) {
        $(el).css('transform', 'translateY(-120px)');
      } else {
        $(el).css('transform', 'none');
      }
      lastScroll = st;
    });
  }
  render() {
    return (

      <div className="content">
        <div className="menu" ref="menu">

          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="itemsMenu">
            <ul>

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
                  SUPPORT
            </Link>
              </li>
              <li>
                <Link to="/about">
                  ABOUT
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
}
