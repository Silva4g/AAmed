import React, { useState, useEffect } from 'react';

import { IoMdArrowRoundBack } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';

import api from '../../services/api';
import './styles.css';

export default function Profile(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cnes, setCnes] = useState('');
    const [id, setId] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [street, setStreet] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [cep, setCep] = useState('');
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const getHospital = async () => {
        if (localStorage.getItem('tk-hopt') !== null) {
            const response = await api.get('/home', {
                headers: { Authorization: `Bearer ${localStorage.getItem('tk-hopt')}` }
            });
            const { cnes, cnpj, name, email, _id, phone, address, location } = response.data;
            setName(name);
            setEmail(email);
            setPhone(phone);
            setCnes(cnes);
            setCnpj(cnpj);
            setId(_id);
            setCity(address.city);
            setState(address.state);
            setStreet(address.street);
            setNeighborhood(address.neighborhood);
            setCep(address.cep);
            setLatitude(location.coordinates[1]);
            setLongitude(location.coordinates[0]);
        } else {
            return null;
        }
    }
    useEffect(() => {
        getHospital();
    }, []);

    return (
        <div className="profile">
            <div className="back">
                <button onClick={() => props.history.goBack()}><IoMdArrowRoundBack size={25} />Voltar</button>
            </div>
            <div className="container-profile">
                <div className="container-top">
                    <div>
                        <img src={require('../../assets/logo.png')} alt="" />
                    </div>
                    <div>
                        <h2>Olá, {name}</h2>
                        <span>
                            <MdLocationOn size={20} />
                            <p>{city}, {state}</p>
                        </span>
                    </div>
                </div>
                <div className="container-bottom">
                    <h2>Informações de contato</h2>
                    <div className="content-bottom">
                        <div>
                            <h2>Nome: </h2>
                            <h2>Endereço: </h2>
                            <h2>E-mail: </h2>
                            <h2>CNES: </h2>
                            <h2>Cnpj: </h2>
                        </div>
                        <div>
                            <h2>{name}</h2>
                            <h2>{street}, {city} {state} - {cep}</h2>
                            <h2>{email}</h2>
                            <h2>{cnes}</h2>
                            <h2>{cnpj}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}