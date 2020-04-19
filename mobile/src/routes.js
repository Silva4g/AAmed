import React from "react";
import { Image } from "react-native";
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
      activeBackgroundColor: "#006bad",
      activeTintColor: "#fff",
      itemStyle: { padding: 7 },
      contentContainerStyle: { backgroundColor: "#fff" },
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <AuthDrawer.Screen
      name="Home"
      component={Home}
      labelStyle={{ fontSize: 23 }}
      options={{
        drawerLabel: "HOME",
        drawerIcon: ({ color }) => <Feather name="user" size={20} color={color} />,
      }}
    />
    <AuthDrawer.Screen
      name="Historic"
      component={History}
      options={{
        drawerLabel: "HISTÓRICO",
        drawerIcon: ({ color }) => <Feather name="calendar" size={20} color={color} />,
      }}
    />
    <AuthDrawer.Screen
      name="Help"
      component={Help}
      options={{
        drawerLabel: "AJUDA",
        drawerIcon: ({ color }) => <AntDesign name="questioncircleo" size={20} color={color} />,
      }}
    />
    <AuthDrawer.Screen
      name="Settings"
      component={Setting}
      options={{
        drawerLabel: "CONFIGURAÇÕES",
        drawerIcon: ({ color }) => <Feather name="settings" size={20} color={color} />,
      }}
    />
  </AuthDrawer.Navigator>
);

// Rota sem autenticação
const GuestStack = createStackNavigator();
export const GuestStackScreen = () => (
  <GuestStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#006bad",
        borderBottomColor: "#d9d9d9",
        borderBottomWidth: 2,
      },
      headerTintColor: "#fff",
    }}
  >
    <GuestStack.Screen name="Login" component={Login} />
    <GuestStack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerTitle: "Cadastre-se",
        headerTitleAlign: "center",
        headerRight: () => (
          <Image
            source={require("../assets/icon.png")}
            style={{ width: 45, height: 45, marginRight: 20 }}
          />
        ),
      }}
    />
    <GuestStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{
        headerTitle: () => (
          <Image
            source={require("../assets/icon.png")}
            style={{ width: 50, height: 50 }}
          />
        ),
        headerTitleAlign: "center",
      }}
    />
  </GuestStack.Navigator>
);
