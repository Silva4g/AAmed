import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles.js";
import CustomHeader from "../../components/CustomHeader";

export default function History({ navigation }) {
  return (
    <CustomHeader>
      <TouchableOpacity
        onPress={() => navigation.dispatch(CommonActions.goBack())}
        style={{ position: "absolute", left: 12 }}
      >
        <Ionicons name="md-arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <Text style={{ alignSelf: "center", color: "#fff", fontSize: 16 }}>
        HISTÓRICO
      </Text>

      <Image
        source={require("../../../assets/icon.png")}
        style={{ width: 45, height: 45, position: "absolute", right: 12 }}
      />
    </CustomHeader>
  );
}
