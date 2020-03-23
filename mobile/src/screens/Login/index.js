import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  StatusBar
} from "react-native";

import styles from "./styles";
import logo from "../../../assets/logo.png";
import api from "../../services/api";
import { useAuth } from "../../utils/auth";
import { ScrollView } from "react-native-gesture-handler";

export const Login = () => {
  const [cpf, setCpf] = useState("");
  const [pass, setPass] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const navigation = useNavigation();
  const [auth, { login }] = useAuth();

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
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        setErrorMsg(error.response.data.error);
        console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message);
      }
      setErrorMsg(error.message);
      console.log("Erro fora dos ifs ", error); // depois de 2min que vai aparecer
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <ScrollView>
        <KeyboardAvoidingView
          enabled={Platform.OS == "android" || Platform.OS == "ios"}
          behavior="padding"
          style={styles.containerKeyboard}
        >
          <View style={styles.wrapperContent}>
            <Image
              source={logo}
              style={{
                width: 150,
                height: 150,
                alignSelf: "center",
                marginTop: 5
              }}
            />

            {!!errorMsg && <Text>{errorMsg}</Text>}
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

            <TouchableOpacity style={styles.botaoEntrar} onPress={onSubmit}>
              <Text style={styles.txtBtEntrar}>ENTRAR</Text>
            </TouchableOpacity>

            <View style={styles.viewTextSenha}>
              <Text
                style={styles.textEsqueceuSenha}
                onPress={() => {
                  navigation.navigate("ForgotPassword");
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
                  navigation.navigate("SignUp");
                }}
              >
                Cadastre-se
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};
