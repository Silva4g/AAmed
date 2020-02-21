import React, { useState } from 'react';
import './styles.css';

export default function Suporte() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || email === undefined || email === null) return console.log('email requerido');
    if (!subject || subject === undefined || subject === null) return console.log('assunto requerido');
    if (!description || description === undefined || description === null) return console.log('descrição requerida');

    console.log(email)
    console.log(subject)
    console.log(description)
  }

  return (
    <div className="wrapper">
      <div className="content-form-support">
        <h1>FORMULÁRIO DE SUPORTE</h1>
        <p>Connect with us by sending your views.</p>
      </div>

      <form action="/" className="form-support" onSubmit={handleSubmit} method="POST">
        <div className="top-form">
          <div className="inner-form">
            <div className="label"><label htmlFor="email">Email</label></div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              
            />
          </div>
        </div>

        <div className="middle-form">
          <div className="inner-form">
            <div className="label"><label htmlFor="subject">Assunto</label></div>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Assunto"
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />
          </div>
        </div>

        <div className="bottom-form">
          <div className="inner-form">
            <div className="inner-form"><label htmlFor="description">Descrição</label></div>
            <textarea
              name="description"
              id="description"
              className="form-area"
              placeholder="Descrição"
              value={description}
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="btn">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
