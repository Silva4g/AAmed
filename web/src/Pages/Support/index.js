import React, { useState } from 'react';
import api from '../../services/api';
import '../Support/styles.css';

export default function Support() {
  document.title = "Suporte";

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  // verificações
  const [hasEmail, setHasEmail] = useState(false);
  const [hasSubject, setHasSubject] = useState(false);
  const [hasDescription, setHasDescription] = useState(false);
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // verificações
    if (!email || email === undefined || email === null) {
      return setHasEmail(true);
    } else {
      setHasEmail(false);
    }

    if (!subject || subject === undefined || subject === null) {
      return setHasSubject(true);
    } else {
      setHasSubject(false);
    }

    if (!description || description === undefined || description === null) {
      return setHasDescription(true);
    } else {
      setHasDescription(false);
    }

    try {
      await api.post('/support', {
        email,
        subject,
        description
      })
      setEmail('');
      setSubject('');
      setDescription('');
      setModal(true);
      setTimeout(() => {
        setModal(false);
      }, 6000);
      window.scrollTo(0, 0);
    } catch (error) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 6000);
      window.scrollTo(0, 0);
      console.log("Houve um erro " + error);
    }

  }

  return (
    <>
      <div className="content-support">
        <div>
          <h2>Suporte do 1° Socorros</h2>
          <span>O que nós podemos fazer por você?</span>
          <a href="#form-support">Entre em contato conosco! :)</a>
        </div>
        <div>
          <img src={require('../../assets/support.png')} alt="Suporte do 1° Socorros" title="Suporte do 1° Socorros" />
        </div>
      </div>
      <div className="support-types">
        <h2>Em que nós damos suportes?</h2>
        <div className="line"></div>
        <div className="support-user">
          <div>
            <img src={require('../../assets/computer.png')} alt=""/>
            <span>Sistema e design</span>
          </div>
          <div>
            <img src={require('../../assets/engine.png')} alt=""/>
            <span>Nossas funcionalidades</span>
          </div>
          <div>
            <img src={require('../../assets/comunication.png')} alt=""/>
            <span>Ajude-nos a melhorar.</span>
          </div>
          <div>
            <img src={require('../../assets/user.png')} alt=""/>
            <span>Contas e usuários</span>
          </div>
        </div>
      </div>
      <div className="wrapper" id="form-support">
        {modal ? <span className="success-support">Formulário enviado com suceso!</span> : ""}
        {show ? <span className="error-support">HOUVE UM ERRO INTERNO, POR FAVOR TENTE NOVAMENTE MAIS TARDE!!</span> : ""}
        <div className="content-form-support">
          <h1>Envie uma mensagem para nós!</h1>
        </div>

        <form className="form-support" onSubmit={handleSubmit} method="POST">
          <div className="top-form">
            <div className="inner-form">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={email => setEmail(email.target.value)}
              />
              {hasEmail ? <span className="error-support">Email requerido.</span> : ""}
            </div>
          </div>

          <div className="middle-form">
            <div className="inner-form">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Assunto"
                value={subject}
                onChange={e => setSubject(e.target.value)}
              />
              {hasSubject ? <span className="error-support">Assunto requerido.</span> : ""}
            </div>
          </div>

          <div className="bottom-form">
            <div className="inner-form">
              <textarea
                name="description"
                id="description"
                className="form-area"
                placeholder="Descrição"
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></textarea>
              {hasDescription ? <span className="error-support">Descrição requerida.</span> : ""}
            </div>
          </div>

          <div className="btn">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
}
