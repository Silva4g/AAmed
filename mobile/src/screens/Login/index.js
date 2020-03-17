import React, { useState, Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Image
} from "react-native";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import { validate } from "gerador-validador-cpf";

import styles from "./styles";
import api from "../../utils/api";
import logo from "../../../assets/logo.png";

export default function Login() {
  const { navigate } = useNavigation();
  const [cpf, setCpf] = useState("");
  const [pass, setPass] = useState("");

  async function handleLogin() {
    //validate(cpf) ? console.log('valido') : console.log('falso');
    console.log(`cpf: ${cpf} senha: ${pass}`);
    const response = await api.get("/user");
    console.log(response.data);
  }

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS == "android" || Platform.OS == "ios"}
      behavior="padding"
      style={styles.containerKeyboard}
    >
      <View style={styles.wrapperContent}>
        <Image
          source={logo}
          style={{ width: 150, height: 150, alignSelf: "center", marginTop:5 }}
        />

        <View style={styles.containerInput}>
          <View>
            <SimpleLineIcons style={styles.icon} name="user" />
            <TextInputMask
              style={styles.input}
              onChangeText={e => setCpf(e)}
              value={cpf}
              type={"cpf"}
              placeholder="CPF"
              placeholderTextColor="#24292e"
            />
          </View>

          <View>
            <SimpleLineIcons style={styles.icon} name="lock" />
            <SimpleLineIcons style={styles.iconEye} name="eye" />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={e => setPass(e)}
              value={pass}
              placeholder="Senha"
              placeholderTextColor="#24292e"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.botaoEntrar} onPress={handleLogin}>
            <Text style={styles.txtBtEntrar}>ENTRAR</Text>
          </TouchableOpacity>

        <View style={styles.viewTextSenha}>
          <Text
            style={styles.textEsqueceuSenha}
            onPress={() => {
              navigate("ForgotPassword");
            }}
          >
            Esqueceu a senha?
          </Text>
        </View>

        <View style={styles.viewTextCadastro}>
          <Text style={styles.textLogin}>Não possui login?</Text>
          <Text
            style={styles.textCadastre}
            onPress={() => {
              navigate("Register");
            }}
          >
            Cadastre-se
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
