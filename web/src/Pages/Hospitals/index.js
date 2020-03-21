import React, { useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';

import api from '../../services/api';

import './styles.css';
import HospitalModal from '../../components/HospitalModal';

export default function Hospitals(props) {

    const [hospitals, setHospitals] = useState([]);
    const [nameLogged, setNamelogged] = useState('');
    const [modal, setModal] = useState(null);


    useEffect(() => {
        async function getHospitals10() {

            const hospitalLogged = await api.get('/hospital/home', {
                headers: { Authorization: `Bearer ${localStorage.getItem('tk-hopt')}` }
            });

            const { location, _id, name } = hospitalLogged.data;
            setNamelogged(name);
            const longitude = location.coordinates[0];
            const latitude = location.coordinates[1];

            const response = await api.get('/search', {
                headers: {
                    hospital: _id
                },
                params: {
                    latitude,
                    longitude
                }
            });
            setHospitals(response.data.hospitais);
        }
        getHospitals10();
    }, []);

    return (
        <>
            <div className="menu-hospitals">
                <div className="back">
                    <button onClick={() => props.history.goBack()}><IoMdArrowRoundBack size={25} />Voltar</button>
                </div>
                <div className="title-profile">
                    <h2>Olá, {nameLogged}</h2>
                </div>
            </div>
            <div className="content-support">
                <div>
                    <h2>Veja abaixo os hospitais perto de você!</h2>
                    <span>Aqui está os hospitais mais próximos!.</span>
                </div>
                <div>
                    <img src={require('../../assets/profile.png')} alt="Suporte do 1° Socorros" title="Suporte do 1° Socorros" />
                </div>
            </div>
            <div className="container-hospitals">
                {
                    hospitals.map(hospital => (
                        <>
                            <div key={hospital._id} className="box" >
                                <h2>{hospital.name}</h2>
                                <button className="btnOpen" onClick={() => setModal(true)}>Clique para saber mais</button>
                                {modal ?
                                    <>
                                        <HospitalModal name={hospital.name} email={hospital.email} phone={hospital.phone} cnpj={hospital.cnpj} street={hospital.address.street} neighborhood={hospital.address.neighborhood} city={hospital.address.city} state={hospital.address.state} />
                                        <button className="btnClose" onClick={() => setModal(null)}>Fechar</button>
                                    </>
                                    : ''}
                            </div>
                        </>
                    ))
                }
            </div>

        </>
    );
}
