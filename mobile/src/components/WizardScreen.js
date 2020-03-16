import React, { PureComponent, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Wizard from './Wizard';
// import Input from './Input';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#52c8fa',
  },
  inputContainer: {
    // backgroundColor: '#c1aa99',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconUser: {
    position: 'absolute',
    top: 10,
    left: 25,
    zIndex: 5,
  },
});

// const algo = {
//   alguma: {
//     name: 'ola',
//     cpf: '',
//     email: '',
//     senha: '',
//     susCard: '',
//     bio: '',
//     [Symbol.iterator]: function*() {
//       yield this.name;
//       yield this.cpf;
//       yield this.email;
//       yield this.senha;
//       yield this.susCard;
//       yield this.bio;
//     },
//   },
// };

function WizardScreen() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [susCard, setSusCard] = useState('');
  const [bio, setBio] = useState('');

  const args = {
    name,
    cpf,
    email,
    senha,
    susCard,
    bio,
  };

  return (
    <View style={styles.root}>
      <Wizard initialValues={args}>
        <Wizard.Step>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <SimpleLineIcons
                name="user"
                size={25}
                color="#24292e"
                style={styles.iconUser}
              />
              <TextInput
                placeholder="Nome completo"
                onChangeText={setName}
                value={name}
              />
            </View>
          </View>
        </Wizard.Step>
        <Wizard.Step>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <AntDesign
                name="idcard"
                size={25}
                color="#24292e"
                style={styles.iconUser}
              />
              <TextInput
                placeholder="CPF"
                keyboardType="number-pad"
                onChangeText={setCpf}
                value={cpf}
              />
            </View>
          </View>
        </Wizard.Step>
        <Wizard.Step>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="email-outline"
                size={25}
                color="#24292e"
                style={styles.iconUser}
              />
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
              />
            </View>
          </View>
        </Wizard.Step>
        <Wizard.Step>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <SimpleLineIcons
                name="lock"
                size={25}
                color="#24292e"
                style={styles.iconUser}
              />
              <TextInput
                placeholder="Senha"
                secureTextEntry
                onChangeText={setSenha}
                value={senha}
              />
            </View>
          </View>
        </Wizard.Step>
        <Wizard.Step>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <SimpleLineIcons
                name="credit-card"
                size={25}
                color="#24292e"
                style={styles.iconUser}
              />
              <TextInput
                placeholder="Cartão do SUS"
                keyboardType="number-pad"
                onChangeText={setSusCard}
                value={susCard}
              />
            </View>
          </View>
        </Wizard.Step>
        <Wizard.Step>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="text-subject"
                size={25}
                color="#24292e"
                style={styles.iconUser}
              />
              <TextInput placeholder="Bio" onChangeText={setBio} value={bio} />
            </View>
          </View>
        </Wizard.Step>
      </Wizard>
    </View>
  );
}

export default WizardScreen;
