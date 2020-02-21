import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [confirmPassword, setConfirmpass] = useState('');
  const [check, setCheck] = useState(true);
  const [passEqual, setPassequal] = useState(false)

  const changeCheck = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setCheck(value);
    console.log(value);
  }

  const handleForm = e => {
    e.preventDefault();

    if(password !== confirmPassword){
      setPassequal(true);
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
        <div className="form">
          <form onSubmit={handleForm}>
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
              passEqual ? <span className="passError">Senhas incompatíveis</span> : ""
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
              passEqual ? <span className="passError">Senhas incompatíveis</span> : ""
            }
            
            <input
              type="text"
              required
              placeholder="Nome do hospital"
              name="name"
              onChange={name => setName(name.target.value)}
              value={name}
            />
            <input
              type="text"
              required
              name="cnes"
              placeholder="CNES"
              onChange={cnes => setCnes(cnes.target.value)}
              value={cnes}
            />
            <input
              type="text"
              required
              name="cnpj"
              placeholder="CNPJ"
              onChange={cnpj => setCnpj(cnpj.target.value)}
              value={cnpj}
            />
            <input
              type="text"
              name="phone"
              required
              placeholder="Telefone do hospital"
              onChange={phone => setPhone(phone.target.value)}
              value={phone}
            />
            <input
              type="text"
              name="city"
              required
              placeholder="Cidade"
              onChange={city => setCity(city.target.value)}
              value={city}
            />
            <input
              type="text"
              name="state"
              required
              placeholder="Estado"
              onChange={state => setState(state.target.value)}
              value={state}
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