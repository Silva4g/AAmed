import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import InputMask from 'react-input-mask';

import './styles.css'

export default function Register() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [cnes, setCnes] = useState('');
  const [phone, setPhone] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep_hospital, setCep] = useState('');
  const [error, setError] = useState(null);

  //restrições, verificações
  const [confirmPassword, setConfirmpass] = useState('');
  const [check, setCheck] = useState(true);
  const [passEqual, setPassequal] = useState(false);
  const [lenghtName, setLenghtname] = useState(false);
  const [modal, setModal] = useState(false);

  function changeCheck(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setCheck(value);
  };


  async function handleForm(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPassequal(true);
      return;
    } else {
      setPassequal(false);
    }

    if (check) {
      setCheck(true);
    } else {
      setCheck(false);
      return;
    }

    if (name.length < 5) {
      setLenghtname(true);
      return;
    } else {
      setLenghtname(false);
    }

    try {
      await api.post('/hospital', {
        name, password, cnes, cnpj, latitude, longitude, cep_hospital, phone, email
      }).then((res) => {
        window.scrollTo(0, 0);
        setModal(true);
        setName('');
        setCnpj('');
        setCnes('');
        setPassword('');
        setConfirmpass('');
        setPhone('');
        setCep('');
        setEmail('');
      }).catch((exp) => {
        console.log(exp.response);
        setError(exp.response === undefined ? 'Falha na conexão com o servidor!' : exp.response.data.error);
      });
    } catch (response) {
      //console.log(response);
      //setError( !res'Ops! Parece que houve um erro durante o cadastro')
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  return (
    <div className="container" >
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="content-form">
        <h1>Cadastre seu hospital</h1>
        {
          modal ?
            (
              <div className="modal">
                <div>Cadastro realizado com sucesso</div>
              </div>
            ) : ""
        }
        {
          error !== null ?
            (
              <div className="modal-error">
                <div>{error}</div>
              </div>
            ) : ""
        }
        <div>
          <form className="form-register" onSubmit={handleForm}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={email => setEmail(email.target.value)}
              value={email}
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              required
              onChange={password => setPassword(password.target.value)}
              value={password}
            />
            {
              passEqual ? <span className="error">Senhas incompatíveis</span> : ""
            }
            <input
              type="password"
              name="confirmPass"
              required
              placeholder="Confirmar senha"
              onChange={confirmPassword => setConfirmpass(confirmPassword.target.value)}
              value={confirmPassword}
            />
            {
              passEqual ? <span className="error">Senhas incompatíveis</span> : ""
            }

            <input
              type="text"
              required
              placeholder="Nome do hospital"
              name="name"
              onChange={name => setName(name.target.value)}
              value={name}
            />
            {
              lenghtName ? <span className="error">Nome deve ter pelo menos 5 caracteres!</span> : ""
            }
            <InputMask
              mask="9999999"
              type="text"
              required
              name="cnes"
              placeholder="CNES"
              onChange={cnes => setCnes(cnes.target.value)}
              value={cnes}
            />
            <InputMask
              type="text"
              required
              mask="99.999.999/9999-99"
              placeholder="CNPJ"
              onChange={cnpj => setCnpj(cnpj.target.value)}
              value={cnpj}
            />
            <InputMask
              type="text"
              name="phone"
              mask="(99)9999-9999"
              required
              placeholder="Telefone do hospital"
              onChange={phone => setPhone(phone.target.value)}
              value={phone}
            />
            <InputMask
              mask="99999999"
              type="text"
              name="cep_hospital"
              required
              placeholder="CEP"
              onChange={cep => setCep(cep.target.value)}
              value={cep_hospital}
            />
            <input
              type="text"
              name="latitude"
              required
              placeholder="Latitude"
              className="coordinate"
              value={latitude}
              onChange={latitude => setLatitude(latitude.target.value)}
            />
            <input
              type="text"
              name="longitude"
              placeholder="Longitude"
              required
              className="coordinate"
              value={longitude}
              onChange={longitude => setLongitude(longitude.target.value)}
            />
            <div className="termos">
              <div>
                <label htmlFor="termos">Aceitar termos de cadastro</label>
                <input
                  type="checkbox"
                  id="termos"
                  checked={check}
                  onChange={changeCheck}
                />
              </div>
              {check ? "" : <span className="error">Você deve aceitar os termos</span>}
              <div>
                <span>Termos de cadastro do sistema: </span>
                <Link to="/terms">
                  Veja nossos termos para cadastro
                </Link>
              </div>
            </div>
            <button
              type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}