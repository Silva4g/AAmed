import React, { useState } from 'react';

import './styles.css';

export default function HospitalModal({ name, cnpj, email, phone, street, neighborhood, state, city }) {

    console.log(name);
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
                    <h2>{name}</h2>
                    <h2>{cnpj}</h2>
                    <h2>{email}</h2>
                    <h2>{phone}</h2>
                    <h2>{street}</h2>
                    <h2>{neighborhood}</h2>
                    <h2>{state}</h2>
                    <h2>{city}</h2>
                </div>
            </div>
        </div>
    );
}
