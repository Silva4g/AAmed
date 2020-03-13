import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import styles from './styles';

export default function ForgotPasword() {
  const [email, setEmail] = useState('');

  function handleSubmit() {
    console.log(email);
  }

  return (
    <>
      <KeyboardAvoidingView enabled={Platform.OS === 'android'} behavior="padding" style={{ flex: 2 }}>
        <View style={styles.upperContainer}>
          <View style={styles.wrapper}>
            <Text style={styles.textOne}>Esqueceu a senha?</Text>
            <Text style={styles.textTwo}>Informe seu email:</Text>
            <View style={styles.inputContainer}>
              <SimpleLineIcons
                name={'user'}
                size={25}
                color={'#333333'}
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#000"
                selectionColor="#ffffff77"
                underlineColorAndroid="transparent"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>ou entre com </Text>
        <View style={styles.others}>
          <Icon
            name={'google-plus-g'}
            size={42}
            color={'#ff7171'}
          />
          <Icon
            name={'facebook-square'}
            size={42}
            color={'#495d9e'}
          />
          <Icon
            name={'twitter'}
            size={42}
            color={'#6eafef'}
          />
        </View>
      </View>
    </>
  );
}