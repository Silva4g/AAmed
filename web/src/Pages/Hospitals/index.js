import React, { useState, useEffect, Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { Button, ButtonToolBar } from 'react-bootstrap';
import { AddDepModal } from '../../components/Modal/AddDepModal'

import { IoMdArrowRoundBack } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';

import api from '../../services/api';
import './styles.css';

class Hospital extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { deep:[], addModalShow : false }
    // }


    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [cnpj, setCnpj] = useState('');
    // const [cnes, setCnes] = useState('');
    // const [city, setCity] = useState('');
    // const [state, setState] = useState('');
    // const [street, setStreet] = useState('');
    // const [neighborhood, setNeighborhood] = useState('');
    // const [cep, setCep] = useState('');

    // const [hosp, setHosp] = useState([]);

    // const getHospital = async () => {
    //         const response = await api.get('/hospital', /*{
    //         //     headers: { Authorization: `Bearer ${localStorage.getItem('tk-hopt')}` }
    //         // }*/);
    //         console.log(response.data);
    //         setHosp(response.data);
    // }
    // useEffect(() => {
    //     getHospital();
    // }, []);

    render () {

        let addModalClose =() => this.setState({addModalShow:false});

    return (
        <>
            <div className="menu-profile">
                <div className="back">
                    <button onClick={() => props.history.goBack()}><IoMdArrowRoundBack size={25} />Voltar</button>
                </div>
                <div className="title-profile">
                    <h2>Olá, {name}</h2>
                </div>
            </div>
            <div className="lista">
                {hosp.map(hospital => (
                    <>
                        
                    </>
                    ))}
            </div>
        </>
    );
}
}