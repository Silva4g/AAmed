import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function ForgotPasword() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  function handleSubmit() {
    console.log(email);
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        flex: 1,
        backgroundColor: "#72d2fb",
        padding: StatusBar.currentHeight
      }}
    >
      {/* <View style={{ alignSelf: "center", backgroundColor: "#778beb00" }}>
        <Image source={logo} style={{ width: 100, height: 100 }} />
      </View> */}
      <View style={{ justifyContent: "space-between", flex: 1 }}>
        <View
          style={{
            backgroundColor: "#e77f6700",
            alignItems: "center",
            marginBottom: 12,
            paddingTop: StatusBar.currentHeight * 3
          }}
        >
          <Text style={{ fontSize: 35, marginBottom: 20, color: "#000" }}>
            Esqueceu a senha?
          </Text>
          <View style={{ width: 250, alignItems: "center", marginTop: 10 }}>
            <Text style={{ color: "#000", fontSize: 16 }}>
              {`Digite seu endereço de e-mail 
        e enviaremos um link 
      para redefinir sua senha`}
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#63cdda00"
            // marginTop: 20
          }}
        >
          <MaterialCommunityIcons
            name="email-outline"
            size={25}
            style={{
              color: "#24292e",
              position: "absolute",
              top: 10,
              left: 7,
              zIndex: 5
            }}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#24292e"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
            autoFocus
            style={{
              width: "100%",
              height: 44,
              fontSize: 16,
              paddingHorizontal: 40,
              color: "#24292e",
              borderBottomWidth: 2,
              borderBottomColor: "#24292e"
            }}
          />

          <TouchableOpacity
            onPress={() => console.log(email)}
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              marginTop: 20
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Resetar senha
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#cf6a8700",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10
          }}
        >
          <Text style={{ color: "#eee" }}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
