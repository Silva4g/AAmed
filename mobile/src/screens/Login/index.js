import React, { useState, Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from 'react-native-masked-text';
import { validate } from 'gerador-validador-cpf';
import * as Animatable from 'react-native-animatable';

import styles from "./styles";
import api from '../../utils/api';
Animatable.createAnimatableComponent(Login);
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleLogin() {
  //validate(cpf) ? console.log('valido') : console.log('falso');
    console.log(`cpf: ${cpf} senha: ${pass}`)
    const response = await api.get('/user');
    console.log(response);
  }
render(){
  return (
    <>
      <View style={styles.containerBlue}>
        <View style={styles.content}>
          <Text style={styles.textoLogin}>Login</Text>
          <View style={styles.inputContainer}>
            <SimpleLineIcons style={styles.iconUser} name="user" />
            <TextInputMask
              style={styles.input}
              onChangeText={e => setCpf(e)}
              value={cpf}
              type={'cpf'}
              placeholder="CPF"
              backgroundColor="#72d2fb"
              placeholderTextColor="#000"
            />
          </View>

          <View style={styles.inputContainer}>
            <SimpleLineIcons style={styles.iconLock} name="lock" />
            <SimpleLineIcons style={styles.iconEye} name="eye" />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={e => setPass(e)}
              value={pass}
              placeholder="Senha"
              placeholderTextColor="#000"
              backgroundColor="#72d2fb"
            />
          </View>
        </View>

        <Animatable.TouchableOpacity
          animation="fadeInUp"

          style={styles.botaoEntrar}
          onPress={handleLogin}
        >
          <Text style={styles.txtBtEntrar}>ENTRAR</Text>
        </Animatable.TouchableOpacity>

        <View style={{ width: 200, alignSelf: 'center' }}>
          <Text
            style={styles.esqueceuSenha}
            onPress={() => {
              navigate("ForgotPassword");
            }}
          >
            Esqueceu a senha?
          </Text>
        </View>
      </View>

      <View style={styles.containerWhite}>
        <Text style={styles.textCadastre}>
          Não possui login?
          <Text
            style={{ fontWeight: "bold", textDecorationLine: "underline" }}
            onPress={() => {
              navigate("Register");
            }}
          >
            Cadastre-se
          </Text>
        </Text>
        <Text style={styles.textEntreCom}>ou entre com</Text>
        <View style={styles.contentIcons}>
          <Icon name="google" style={styles.iconGoogle} />
          <Icon name="facebook-square" style={styles.iconFacebook} />
        </View>
      </View>
    </>
  );
}
}
