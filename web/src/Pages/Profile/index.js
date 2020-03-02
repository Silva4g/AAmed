import React from 'react';
import api from '../../services/api';
import { useEffect } from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import Sidebar from '../../components/Logged';

// import { Container } from './styles';

export default class Profile extends Component {

    state = {
        name: '',
        email: '',
        cnes: '',
        cnpj: '',
        id: null,
    }

    componentDidMount() {
        this.getHospital();
    }

    async getHospital() {
        if (localStorage.getItem('tk-hopt') !== null) {
            const response = await api.get('/home', {
                headers: { Authorization: "Bearer " + localStorage.getItem('tk-hopt') }
            });
            const { cnes, cnpj, name, email, _id } = response.data;
            this.setState({ cnes });
            this.setState({ cnpj });
            this.setState({ name });
            this.setState({ email });
            this.setState({ id: _id });
        } else {
            return null;
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.props.history.goBack()}>Voltar</button>
                <h1>ID: {this.state.id}</h1>
                <h1>Usuário: {this.state.name} </h1>
                <h1>Email: {this.state.email} </h1>
                <h1>Número de cnes: {this.state.cnes} </h1>
                <h1>Cnpj: {this.state.cnpj}</h1>
            </div>
        );
    }
}
