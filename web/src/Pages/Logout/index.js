import { Component } from 'react';

export default class Logout extends Component{
    componentWillMount(){
        localStorage.removeItem('tk-hopt');
        this.props.history.push('/');
        window.location.reload();
    }
    render(){
        return null;
    }
}