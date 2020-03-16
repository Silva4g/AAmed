import React, { PureComponent } from 'react';
import { View, Alert } from 'react-native';

import Step from './Step';

class Wizard extends PureComponent {
  state = {
    index: 0,
    // values: {
    //   ...this.props.initialValues,
    // },
  };

  // valor = {
  //   teste: {...this.props.initialValues,},

  // };

  nextStep = () => {
    const { children } = this.props;
    const { index } = this.state;

    if (index !== children.length - 1) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }));
    }
  };

  prevStep = () => {
    const { index } = this.state;

    if (index !== 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }));
    }
  };

  // onChangeValue = (name, value) => {
  //   this.setState(prevState => ({
  //     values: {
  //       ...prevState.values,
  //       [name]: value,
  //     },
  //   }));
  // };

  onSubmit = () => {
    // faz um for para pegar todos os valores e joga eles em um array,
    // depois verifica se têm um valor vazio nele
    // const arr = [];
    // for (let prop of this.props.initialValues.alguma) {
    //   arr.push(prop);
    // }
    // for (let prop in this.state.values) {
    //   arr.push(prop);
    // }

    // const yes = arr.filter(ele => ele === '');

    // console.log(arr);
    // console.log(yes);
    // console.log('ÈÈÈÈEÈÈÈ ', this.valor);
    Alert.alert(JSON.stringify(this.props.initialValues));
  };

  static Step = Step; // before -> static Step = props => <Step {...props} />;

  render() {
    console.log('values', this.props.initialValues);
    const { children } = this.props;
    const { index, values } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#24292e' }}>
        {React.Children.map(children, (el, position) => {
          if (position === index) {
            return React.cloneElement(el, {
              currentIndex: index,
              onChangeValue: this.onChangeValue,
              nextStep: this.nextStep,
              prevStep: this.prevStep,
              onSubmit: this.onSubmit,
              isLast: index === children.length - 1,
              values,
            });
          }

          return null;
        })}
      </View>
    );
  }
}

export default Wizard;
