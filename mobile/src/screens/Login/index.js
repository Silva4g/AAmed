import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  ImageBackground,
  Button
} from "react-native";

import {
  ImageContainer,
  LoginBox,
  InputBox,
  Input,
  InputMask,
  Touch,
  Icon,
  IconEye,
  TouchEye,
  ViewOptions,
  Option,
  ErrorText
} from "./styles";
import screen from "../../../assets/screen.png";
import logo from "../../../assets/logo.png";
import api from "../../services/api";
import { useAuth } from "../../utils/auth";

export const Login = () => {
  const [cpf, setCpf] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [press, setPress] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const navigation = useNavigation();
  const [auth, { login }] = useAuth();

  navigation.setOptions({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate("SignUp")}
        title="Cadastre-se"
        color="#0277BD"
      />
    ),
    headerRightContainerStyle: {
      padding: 15
    },
    title: "Bem-Vindo"
  });

  function toggleShowPass() {
    if (!press) {
      setShowPass(false);
      setPress(true);
    } else {
      setShowPass(true);
      setPress(false);
    }
  }

  // o plano e usar o formik
  async function onSubmit() {
    try {
      const response = await api.post("/login/user", {
        cpf: cpf,
        password: pass
      });

      login(response.data);
      console.log(response.data); //debug
    } catch (error) {
      // Error
      if (error.response) {
        setErrorMsg(error.response.data.error);
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      // setErrorMsg(error.message); // depois vejo isso
      console.log("Erro fora dos ifs ", error); // depois de 2min que vai aparecer
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={screen} style={{ flex: 1 }}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={30}
          enabled={Platform.OS == "android" || Platform.OS == "ios"}
          behavior="padding"
          style={{ flex: 1 }}
        >
          <ImageContainer>
            <Image
              source={logo}
              style={{
                width: 150,
                height: 150
              }}
            />
          </ImageContainer>

          {!!errorMsg && <ErrorText>{errorMsg}</ErrorText>}
          <LoginBox>
            <InputBox>
              <Icon name="user" />
              <InputMask
                onChangeText={e => setCpf(e)}
                value={cpf}
                type={"cpf"}
                placeholder="CPF"
                placeholderTextColor="#24292e"
                returnKeyType="next"
              />
            </InputBox>

            <InputBox>
              <Icon name="lock" />
              <Input
                secureTextEntry={showPass}
                onChangeText={e => setPass(e)}
                value={pass}
                placeholder="Senha"
                placeholderTextColor="#24292e"
                returnKeyType="done"
              />
              <TouchEye onPress={toggleShowPass}>
                <IconEye name={press ? "eye-off-outline" : "eye-outline"} />
              </TouchEye>
            </InputBox>

            <Touch onPress={onSubmit}>
              <Text>ENTRAR</Text>
            </Touch>
          </LoginBox>

          <ViewOptions>
            <Option
              onPress={() => {
                navigation.navigate("ForgotPassword");
              }}
            >
              Esqueceu a senha?
            </Option>
          </ViewOptions>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};
