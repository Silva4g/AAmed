import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import bolaLogin from "../../../assets/bolaLogin.png";

import styles from './styles';

export default function Login() {

  // function goToForgot() {
  //   return props.navigate.navigation('ForgotPassword');
  // }
  const { navigate } = useNavigation();

  return (

    <>
      <View style={styles.containerBlue}>
        <View style={styles.content}>
          <Text style={styles.textoLogin}>
            Login
          </Text>

          <View style={styles.inputContainer}>
            <Icon style={styles.iconUser} name="user" />
            <TextInput style={styles.input}
              placeholder="CPF"
              placeholderTextColor='white'
              backgroundColor='#72d2fb'
            //underlineColorAndroid='green' 
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon style={styles.iconLock} name="lock" />
            <Icon style={styles.iconEye} name="eye" />
            <TextInput style={styles.input}
              placeholder="Senha"
              placeholderTextColor='white'
              backgroundColor='#72d2fb'
            />
          </View>
        </View>

        <TouchableOpacity style={styles.botaoEntrar}
          onPress={() => {
            navigation.navigate('Register');
          }}
        >
          <Text style={styles.txtBtEntrar}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.esqueceuSenha}>
            Esqueceu a senha?
        </Text>
      </View>

      <View style={styles.containerWhite}>
        <Text style={styles.textCadastre}>
              Não possui login? <Text style={{fontWeight:'bold', textDecorationLine:'underline'}}>Cadastre-se </Text>
        </Text>
        <Text style={styles.textEntreCom}>
             ou entre com
        </Text>
      <View style={styles.contentIcons}>
        <Icon name="google" style={styles.iconGoogle} />
        <Icon name="facebook-square" style={styles.iconFacebook} />
      </View>
    </View>
    </>
  );
}