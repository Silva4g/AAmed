import React, { PureComponent, useState } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../utils/api';

import Step from './Step';

export default function Wizard(props) {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  // const { children } = props;
  Wizard.Step = props => <Step {...props} />;


  function nextStep() {
    // const { index } = this.state;

    if (index !== props.children.length - 1) {
      setIndex(index + 1);
    }
  };

  function prevStep() {
    if (index !== 0) {
      setIndex(index - 1)
    }
  };

  async function onSubmit() {
    const { name, cpf, email, senha, susCard, bio } = props.initialValues;
    try {
      const response = await api.post('/user', {
        name,
        cpf,
        email,
        password: senha,
        susCard,
        bio
      });
      Alert.alert('Sucesso', 'Cadastrado com sucesso');
      navigation.navigate('SignIn');
      console.log('cadastrado com sucesso!', response.data);
    } catch (err) {
      Alert.alert('Erro', 'Houve um erro interno');
      console.log('houve um erro', err);
    }
  };


  // console.log('values', this.props.initialValues);
  // const { children } = props;
  // const { index, values } = state;
  console.log(props.initialValues);
  return (
    <View style={{ flex: 1, backgroundColor: '#24292e' }}>
      {React.Children.map(props.children, (el, position) => {
        if (position === index) {
          return React.cloneElement(el, {
            currentIndex: index,

            nextStep: nextStep,
            prevStep: prevStep,
            onSubmit: onSubmit,
            isLast: index === props.children.length - 1,
          });
        }

        return null;
      })}
    </View>
  );
}
// export default Wizard;
