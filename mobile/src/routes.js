import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather, AntDesign } from "@expo/vector-icons";

import { Login } from "./screens/Login";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";

import Home from "./screens/Home";
import History from "./screens/History";
import Help from "./screens/Help";
import Setting from "./screens/Setting";

import CustomDrawerContent from "./components/CustomDrawerContent";

// Rota autenticada
const AuthDrawer = createDrawerNavigator();
export const AuthDrawerScreen = () => (
  <AuthDrawer.Navigator
    drawerType="slide"
    drawerContentOptions={{
      labelStyle: { fontWeight: "bold" },
      itemStyle: { padding: 2 },
      contentContainerStyle: { backgroundColor: "#fff" }
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}
  >
    <AuthDrawer.Screen
      name="Home"
      component={Home}
      labelStyle={{ fontSize: 23 }}
      options={{
        drawerLabel: "HOME",
        drawerIcon: () => <Feather name="user" size={20} />
      }}
    />
    <AuthDrawer.Screen
      name="Historic"
      component={History}
      options={{
        drawerLabel: "HISTÓRICO",
        drawerIcon: () => <Feather name="calendar" size={20} />
      }}
    />
    <AuthDrawer.Screen
      name="Help"
      component={Help}
      options={{
        drawerLabel: "AJUDA",
        drawerIcon: () => <AntDesign name="questioncircleo" size={20} />
      }}
    />
    <AuthDrawer.Screen
      name="Settings"
      component={Setting}
      options={{
        drawerLabel: "CONFIGURAÇÕES",
        drawerIcon: () => <Feather name="settings" size={20} />
      }}
    />
  </AuthDrawer.Navigator>
);

// Rota sem autenticação
const GuestStack = createStackNavigator();
export const GuestStackScreen = () => (
  <GuestStack.Navigator
    screenOptions={{ headerStyle: { backgroundColor: "#29B6F6" } }}
  >
    <GuestStack.Screen name="Home" component={Home} />
    <GuestStack.Screen name="SignUp" component={SignUp} />
    <GuestStack.Screen name="ForgotPassword" component={ForgotPassword} />
  </GuestStack.Navigator>
);
