import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";

const Teste = () => (
  <View>
    <Text>Página Teste - Excluir depois</Text>
  </View>
);

const Drawer = createDrawerNavigator();

export default function HomeScreenRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Teste" component={Teste} />
    </Drawer.Navigator>
  );
}
