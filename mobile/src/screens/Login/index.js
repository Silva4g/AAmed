import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Login({navigation}) {

  // function goToForgot() {
  //   return props.navigate.navigation('ForgotPassword');
  // }

  return (
    <View>
      <Text>OLÁ LOGIN</Text>
      <TouchableOpacity
      style={{alignSelf: 'center', justifyContent: 'center', backgroundColor: '#F30', height: 30, width: 100, alignItems: 'center'}}
      onPress={() => {
        navigation.navigate('Register');
      }} 
      >
        <Text>CADASTRO</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={{alignSelf: 'center', justifyContent: 'center', backgroundColor: '#F90', height: 30, width: 100, alignItems: 'center'}} 
        onPress={() => {
          console.log(navigation)
          navigation.navigate('ForgotPassword');
        }}>
        <Text>FORGOT</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={{alignSelf: 'center', justifyContent: 'center', backgroundColor: '#F00', height: 30, width: 100, alignItems: 'center'}}
      onPress={() => {
        navigation.navigate('Map');
      }}
      >
        <Text>MAP</Text>
      </TouchableOpacity>
    </View>
  );
}