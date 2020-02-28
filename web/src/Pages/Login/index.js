import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../services/api';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e) {
    e.preventDefault()
    const response= await api.post('/loginHospital', {
      email,
      password
    });
    console.log("oi" + response)
  } 


  return (
    <div className="container" >
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="content-form">
        <h1>Cadastre seu hospital</h1>
        <form className="form-register" onSubmit={submit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={
            e=>setEmail(e.target.value)
          }      
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={
            e=>setPassword(e.target.value)
          }      
          value={password}
        />
        <button>logar</button>
        </form>
      </div>
    </div>
  );
}
