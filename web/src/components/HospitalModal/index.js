import React, { useState, useEffect } from 'react';

import './styles.css';
import api from '../../services/api';

export default function HospitalModal({ id }) {
    const [hospital, setHospital] = useState({});

    useEffect(() => {

        async function getData() {
            const response = await api.get(`/hosp/${id}`);
            setHospital(response.data)
            console.log(hospital.address.street);
        }
        getData();

    }, [id]);
    return (
        <div className="modal-hospital">
            <div>
                <div>
                    <h2>Hospital:</h2>
                    <h2>CNPJ:</h2>
                    <h2>E-mail:</h2>
                    <h2>Telefone:</h2>
                    <h2>Rua:</h2>
                    <h2>Bairro:</h2>
                    <h2>Estado:</h2>
                    <h2>Cidade:</h2>
                </div>
                <div>
                    <h2>{hospital.cnpj}</h2>
                    <h2>{hospital.name}</h2>
                    <h2>{hospital.email}</h2>
                    <h2>{hospital.phone}</h2>
                    <h2>{hospital.street}</h2>
                    <h2>{hospital.neighborhood}</h2>
                    <h2>{hospital.state}</h2>
                    <h2>{hospital.city}</h2>
                </div>
            </div>
        </div>
    );
}
