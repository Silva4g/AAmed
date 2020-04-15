import React from "react";
import { Text, View } from "react-native";

export default function LoadingCustom() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f1f1f1",
      }}
    >
      <Text style={{ fontSize: 16, color: "#24292e" }}>Carregando o mapa...</Text>
    </View>
  );
}
