import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="transparent"
          />
          <Routes />
        </View>
      </NavigationContainer>
    </>
  );
}
