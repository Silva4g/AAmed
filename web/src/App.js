import React, { Component } from 'react';
import axios from 'axios';
export default class App extends Component {

  state = {
    file: null
  }

  handleForm = e => {
    console.log(e.target.files[0]);
    this.setState({
      file: e.target.files[0]
    })
  };
  submitForm = () => {
    const data = new FormData();
    data.append('avatar', this.state.files);

    axios.post("http://192.168.1.15:3333/user", data, {
      name: 'felipe',
      cpf: '480525',
      susCard: '12346',
      password: '123456',
      bio: 'aaa'
    }).then(res => console.log(res));
  };
  render(){
    return (
      <div className="App">
        <h1>Cadastro de user</h1>
        <form>
          <input type="file" name="avatar" onChange={this.handleForm} />
          <button type="submit" onClick={this.submitForm}>Enviar</button>
        </form>
      </div>
    );
  }
}