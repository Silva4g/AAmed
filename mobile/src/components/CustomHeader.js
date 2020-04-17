import React from "react";
import { View, StyleSheet, Dimensions, Text, StatusBar } from "react-native";

export default function CustomHeader({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    marginTop: StatusBar.currentHeight,
    height: 58,
    maxHeight: 58,
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#006bad",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
    zIndex: 5,
  },
});
