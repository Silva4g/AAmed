import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import {
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  ImageBackground,
  Button,
  ActivityIndicator,
} from "react-native";

import MainButton from "../../components/MainButton";

import {
  ImageContainer,
  LoginBox,
  InputBox,
  Input,
  InputMask,
  TouchText,
  Icon,
  IconEye,
  TouchEye,
  Option,
  ErrorText,
} from "./styles";
import screen from "../../assets/screen.png";
import logo from "../../assets/logo.png";
import api from "../../services/api";
import { useAuth } from "../../utils/auth";

export const Login = () => {
  const [showPass, setShowPass] = useState(true);
  const [press, setPress] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const navigation = useNavigation();
  const [auth, { login }] = useAuth();

  const formik = useFormik({
    initialValues: {
      cpf: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await api.post("/login/user", values);

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
    },
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

  navigation.setOptions({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate("SignUp")}
        title="Cadastre-se"
        color="#0277BD"
      />
    ),
    headerRightContainerStyle: {
      padding: 15,
    },
    title: "Bem-Vindo",
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={screen} style={{ flex: 1 }}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={0}
          enabled={false}
          behavior="padding"
          style={{ flex: 1 }}
        >
          <ImageContainer>
            <Image
              source={logo}
              style={{
                width: 150,
                height: 150,
              }}
            />
          </ImageContainer>

          {!!errorMsg && <ErrorText>{errorMsg}</ErrorText>}
          <LoginBox>
            <InputBox>
              <Icon name="user" />
              <InputMask
                name="cpf"
                type={"cpf"}
                placeholder="CPF"
                placeholderTextColor="#24292e"
                returnKeyType="next"
                value={formik.values.cpf}
                onChangeText={formik.handleChange("cpf")}
              />
            </InputBox>

            <InputBox>
              <Icon name="lock" />
              <Input
                name="password"
                secureTextEntry={showPass}
                placeholder="Senha"
                placeholderTextColor="#24292e"
                returnKeyType="done"
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
              />
              <TouchEye onPress={toggleShowPass}>
                <IconEye name={press ? "eye-off-outline" : "eye-outline"} />
              </TouchEye>
            </InputBox>

            <MainButton onPress={formik.handleSubmit}>
              {formik.isSubmitting ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <TouchText>ENTRAR</TouchText>
              )}
            </MainButton>
            <Option
              onPress={() => {
                navigation.navigate("ForgotPassword");
              }}
            >
              Esqueceu a senha?
            </Option>
          </LoginBox>

          {/* <ViewOptions>
          </ViewOptions> */}
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};
