import React from "react";
import { View, StyleSheet, Dimensions, Text, StatusBar } from "react-native";

export default function CustomHeader({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    marginTop: StatusBar.currentHeight,
    height: 60,
    maxHeight: 60,
    justifyContent: "center",
    position: "relative",
    backgroundColor: '#006bad',
    zIndex: 5
  }
})
