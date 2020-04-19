import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";

import {
  Keyboard,
  Container,
  TopContainer,
  Title,
  BoxDescription,
  Description,
  Icon,
  Input,
  ButtonReset,
  ButtonResetText,
  BottomContainer,
  BottomContainerText,
  BottomContainerTextTouch,
} from "./styles";

export default function ForgotPasword() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  function handleSubmit() {
    console.log(email);
  }

  return (
    <Keyboard keyboardVerticalOffset={0} behavior="padding" enabled={false}>
      <Container>
        <TopContainer>
          <Title>Esqueceu a senha?</Title>
          <BoxDescription>
            <Description>
              {`Digite seu endereço de e-mail 
        e enviaremos um link 
      para redefinir sua senha`}
            </Description>
          </BoxDescription>
        </TopContainer>

        <View>
          <Icon name="email-outline" size={25} />
          <Input
            placeholder="Email"
            placeholderTextColor="#24292e"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
            autoFocus
          />

          <ButtonReset onPress={() => handleSubmit()}>
            <ButtonResetText>Resetar senha</ButtonResetText>
          </ButtonReset>
        </View>

        <BottomContainer>
          <BottomContainerText>Não tem uma conta?</BottomContainerText>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <BottomContainerTextTouch>Cadastre-se</BottomContainerTextTouch>
          </TouchableOpacity>
        </BottomContainer>
      </Container>
    </Keyboard>
  );
}
