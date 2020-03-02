import React, { Component } from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import './styles.css';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.onRedirect = this.onRedirect.bind(this);
  }

  componentDidMount(){
    document.title = "Ops! Não encontramos"
  }

  onRedirect() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    return (
      <div className="wrapper-404">
        <header>
          <nav>
            <div className="back">
              {/* <Link to={this.onRedirect}></Link> */}
              <button onClick={this.onRedirect}>
                <span><FaAngleLeft />Voltar</span>
              </button>
            </div>
          </nav>

          <div className="broken">
            <p className="upper">Oops! 404 - Not found.</p>
            <img src={logo} alt="logo broken" />
            <p className="lower">Não conseguimos encontrar a página que você está solicitando.</p>
            <Link to="/" className="btnHome">Voltar a página inicial</Link>
          </div>
        </header>
      </div>
    );
  }
}
