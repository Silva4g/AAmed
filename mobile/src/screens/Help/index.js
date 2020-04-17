import "react-native-gesture-handler";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CommonActions } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles.js";
import CustomHeader from "../../components/CustomHeader.js";

export default function Help({ navigation }) {
  return (
    <>
      <CustomHeader>
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.goBack())}
          style={{ position: "absolute", left: 12 }}
        >
          <Ionicons name="md-arrow-back" size={30} color="#fff" />
        </TouchableOpacity>

        <Text style={{ alignSelf: "center", color: "#fff", fontSize: 16 }}>
          AJUDA
        </Text>
      </CustomHeader>
    </>
  );
}
