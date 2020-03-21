import React, { PureComponent, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TextInputMask } from "react-native-masked-text";

import Wizard from "./Wizard";
import Step from './Step';

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#52c8fa"
  },
  inputContainer: {
    // backgroundColor: '#c1aa99',
    width: "90%",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    backgroundColor: "#52c8fa00",
    width: "90%",
    height: 45,
    paddingHorizontal: 40,
    borderRadius: 2,
    borderBottomWidth: 2,
    borderBottomColor: "#24292e"
  },
  iconUser: {
    position: "absolute",
    top: 10,
    left: 25,
    zIndex: 5
  }
});

// Sobre os 200 A's do 'TextInputMask' do nome: é só um teste(por enquanto)
function WizardScreen() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [susCard, setSusCard] = useState("");
  const [bio, setBio] = useState("");

  const args = {
    name,
    cpf,
    email,
    senha,
    susCard,
    bio
  };

  return (
    <View style={styles.root}>
      <Wizard initialValues={args}>
        <Step>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <SimpleLineIcons
                name="user"
                size={25}
                color="#24292e"
                style={styles.iconUser}
              />
              <TextInputMask
                type={'custom'}
                options={{
                  mask: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
                  'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
                  'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                  delimiter: '/'
                }}
                style={styles.input}
                autoFocus
                placeholderTextColor="#24292e"
                placeholder="Nome completo"
                onChangeText={e => setName(e)}
                value={name}
              />
            </View>
          </View>
        </Step>
        <Step>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <AntDesign
                name="idcard"
                size={25}
                color="#24292e"
                style={styles.iconUser}
              />
              <TextInputMask
                type={'cpf'}
                style={styles.input}
                autoFocus
                placeholderTextColor="#24292e"
                placeholder="CPF"
                keyboardType="number-pad"
                onChangeText={e => setCpf(e)}
                value={cpf}
              />
            </View>
          </View>
        </Step>
        <Step>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="email-outline"
                size={25}
                color="#24292e"
                style={styles.iconUser}
              />
              <TextInput
                style={styles.input}
                autoFocus
                autoCapitalize="none"
                placeholderTextColor="#24292e"
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
              />
            </View>
          </View>
        </Step>
        <Step>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <SimpleLineIcons
                name="lock"
                size={25}
                color="#24292e"
                style={styles.iconUser}
              />
              <TextInput
                style={styles.input}
                autoFocus
                placeholderTextColor="#24292e"
                placeholder="Senha"
                secureTextEntry
                onChangeText={setSenha}
                value={senha}
              />
            </View>
          </View>
        </Step>
        <Step>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <SimpleLineIcons
                name="credit-card"
                size={25}
                color="#24292e"
                style={styles.iconUser}
              />
              <TextInputMask
                type={'custom'}
                options={{
                  mask: '9 99 9999 9999 9999'
                }}
                style={styles.input}
                autoFocus
                placeholderTextColor="#24292e"
                placeholder="Cartão do SUS"
                keyboardType="number-pad"
                onChangeText={e => setSusCard(e)}
                value={susCard}
              />
            </View>
          </View>
        </Step>
        <Step>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="text-subject"
                size={25}
                color="#24292e"
                style={styles.iconUser}
              />
              <TextInput
                style={styles.input}
                autoFocus
                placeholderTextColor="#24292e"
                placeholder="Bio"
                onChangeText={setBio}
                value={bio}
              />
            </View>
          </View>
        </Step>
        <Step>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                editable={false}
                placeholderTextColor="#24292e"
                value={name}
              />
              <TextInput
                style={styles.input}
                editable={false}
                placeholderTextColor="#24292e"
                value={cpf}
              />
              <TextInput
                style={styles.input}
                editable={false}
                placeholderTextColor="#24292e"
                value={email}
              />
              <TextInput
                style={styles.input}
                editable={false}
                placeholderTextColor="#24292e"
                value={senha}
              />
              <TextInput
                style={styles.input}
                editable={false}
                placeholderTextColor="#24292e"
                value={susCard}
              />
              <TextInput
                style={styles.input}
                editable={false}
                placeholderTextColor="#24292e"
                value={bio}
              />
            </View>
          </View>
        </Step>
      </Wizard>
    </View>
  );
}

export default WizardScreen;
