import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../services/api';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';

export default function Login(props) {
  document.title = "Faça login com seu hospital";
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');

  const [show, setShow] = useState(false);

  async function submit(e) {
    e.preventDefault()
    try {
      await api.post('/loginHospital', {
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
    }catch(err){
      window.scrollTo(0,0);
    }
    
  }


  return (
    <div className="container" >
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="content-form">
        <h1>Faça login com seu hospital</h1>
        {
          error !== null ?
            (
              <div className={show ? 'modal-error' : 'hide-modal'}>
                <div>{error}</div>
              </div>
            ) : ""
        }
        <form className="form-register" onSubmit={submit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={
              e => setEmail(e.target.value)
            }
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={
              e => setPassword(e.target.value)
            }
            value={password}
          />
          <button>logar</button>
        </form>
      </div>
    </div>
  );
}
