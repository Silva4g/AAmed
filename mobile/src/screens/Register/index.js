import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Register() {
  return (
    <View>
      <Text>OLÁ CADASTRO</Text>
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
      // onPress={this.loginWithFacebook}
      >
        Login with Facebook
      </Icon.Button>

      <Icon.Button name="facebook" backgroundColor="#3b5998">
        <Text style={{ fontSize: 15 }}>
          Login with Facebook
         </Text>
      </Icon.Button>
    </View>
  );
}