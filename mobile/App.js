import React from "react";
import { View, StatusBar } from "react-native";

import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        <Routes />
      </View>
    </>
  );
}
