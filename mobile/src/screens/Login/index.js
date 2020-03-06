import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import bolaLogin from "../../../assets/bolaLogin.png";

import styles from './styles';

export default function Login({ navigation }) {

  // function goToForgot() {
  //   return props.navigate.navigation('ForgotPassword');
  // }

  return (

    <View style={styles.loginPrincipal}>

      {/*<Image style={styles.image} source={(bolaLogin)} />*/}
      <View style={styles.formulario}>

        <Text style={styles.textoLogin}>Login</Text>

      <View style={styles.containerEmail}>

        <TextInput style={styles.inputEmail}
            placeholder="Email"
            placeholderTextColor='white'
            backgroundColor='#72d2fb'
          //underlineColorAndroid='green' 
          />

        <Icon style={styles.iconUser} name ="user" />
        
      </View>

      <View style={styles.containerPassword}>

        <TextInput style={styles.inputPassword}
            placeholder="Senha"
            placeholderTextColor='white'
            backgroundColor='#72d2fb'
        />

        <Icon style={styles.iconLock} name ="lock" />
        <Icon style={styles.iconEye} name ="eye" />

      </View>

        <TouchableOpacity   style={styles.botaoEntrar}
        
          onPress={() => {
            navigation.navigate('Register');
          }}

        >
          <Text style={styles.txtBtEntrar}>Entrar</Text>
        </TouchableOpacity>

      </View>

      <View style={{marginLeft: 220}}>
       

        {/* <TouchableOpacity
          style={{ alignSelf: 'center', justifyContent: 'center', backgroundColor: '#fff', height: 30, width: 100, alignItems: 'center', marginBottom: 5 }}
          onPress={() => {
            console.log(navigation)
            navigation.navigate('ForgotPassword');
          }}>
          <Text>FORGOT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: 'center', justifyContent: 'center', backgroundColor: '#fff', height: 30, width: 100, alignItems: 'center' }}
          onPress={() => {
            navigation.navigate('Map');
          }}
        >
          <Text>MAP</Text>
        </TouchableOpacity> */}

      </View>
    </View>
  );
}