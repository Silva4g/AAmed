//import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import './styles.css';
import api from '../../services/api';

export default function Login(props) {
  document.title = "Faça login com seu hospital";
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');

  const [show, setShow] = useState(false);

  async function submit(e) {
    e.preventDefault()
    try {
      await api.post('/login/hospital', {
        email,
        password
      }).then(response => {
        const { history } = props;
        localStorage.setItem('tk-hopt', response.data.token);
        history.push('/');
        window.location.reload();
      }).catch(exp => {
        setShow(true)
        setTimeout(() => {
          setShow(false);
        }, 7500);
        setError(exp.response === undefined ? 'Falha na conexão com o servidor!' : exp.response.data.error);
      });
    } catch (err) {
      window.scrollTo(0, 0);
    }

  }


  return (
    <div className="container" >
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="container-login">
        <div className="side">
          <div>
            <h2>Bem-vindo de volta!</h2>
            <span>Faça login para continuar!</span>
          </div>
          <div>
            <img src={require('../../assets/logo.png')} alt="" />
          </div>
        </div>
        <div className="content-form-login">
          <h1>Login</h1>
          {
            error !== null ?
              (
                <div className={show ? 'modal-error' : 'hide-modal'}>
                  <div>{error}</div>
                </div>
              ) : ""
          }
          <form className="form-login" onSubmit={submit}>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
                autoCapitalize="none"

                onChange={
                  e => setEmail(e.target.value)
                }
                value={email}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
                onChange={
                  e => setPassword(e.target.value)
                }
                value={password}
              />
            </div>
            <button>Fazer login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
