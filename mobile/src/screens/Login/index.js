import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
//import bolaLogin from "../../../assets/bolaLogin.png";
import styles from "./styles";

export default function Login() {
  // function goToForgot() {
  //   return props.navigate.navigation('ForgotPassword');
  // }
  const { navigate } = useNavigation();

  return (
    <>
      <View style={styles.containerBlue}>
        <View style={styles.content}>
          <Text style={styles.textoLogin}>Login</Text>

          <View style={styles.inputContainer}>
            <SimpleLineIcons style={styles.iconUser} name="user" />
            <TextInput
              style={styles.input}
              placeholder="CPF"
              backgroundColor="#72d2fb"
              placeholderTextColor="black"
              //underlineColorAndroid='green'
            />
          </View>

          <View style={styles.inputContainer}>
            <SimpleLineIcons style={styles.iconLock} name="lock" />
            <SimpleLineIcons style={styles.iconEye} name="eye" />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="black"
              backgroundColor="#72d2fb"
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.botaoEntrar}
          onPress={() => {
            navigate("HomeUser");
          }}
        >
          <Text style={styles.txtBtEntrar}>ENTRAR</Text>
        </TouchableOpacity>

        <View style={{width:200, alignSelf:'center'}}>
          <Text
            style={styles.esqueceuSenha}
            onPress={() => {
              navigate("ForgotPassword");
            }}
          >
            Esqueceu a senha?
          </Text>
        </View>
      </View>

      <View style={styles.containerWhite}>
        <Text style={styles.textCadastre}>
          Não possui login?
          <Text
            style={{ fontWeight: "bold", textDecorationLine: "underline" }}
            onPress={() => {
              navigate("Register");
            }}
          >
            Cadastre-se
          </Text>
        </Text>
        <Text style={styles.textEntreCom}>ou entre com</Text>
        <View style={styles.contentIcons}>
          <Icon name="google" style={styles.iconGoogle} />
          <Icon name="facebook-square" style={styles.iconFacebook} />
        </View>
      </View>
    </>
  );
}
