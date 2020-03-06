import React from 'react';
import {  View, StyleSheet,Text, Image, Dimensions, TextInput, TouchableOpacity, Button } from 'react-native';
import bolaLogin from "../../../assets/bolaLogin.png";

import styles from './styles';

export default function Login({navigation}) {

  // function goToForgot() {
  //   return props.navigate.navigation('ForgotPassword');
  // }

  return (
    
    <View style={styles.loginPrincipal}>
    
    <Image style={styles.image} source={(bolaLogin)} />
    <View style={styles.formulario}> 

    <Text style={styles.textoLogin}>Login</Text>

   <TextInput style={styles.inputEmail}
        placeholder="Email"
        placeholderTextColor='white'
        backgroundColor = '#72d2fb'
        //underlineColorAndroid='green' 
      />

      <TextInput style={styles.inputSenha}
        placeholder="Senha"
        placeholderTextColor='white'
        backgroundColor = '#72d2fb'
      />


    </View>

  </View>
  );
}