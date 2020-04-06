import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import { Login } from "./screens/Login";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";

import Home from "./screens/Home";
import History from "./screens/History";
import Support from "./screens/Support";
import Setting from "./screens/Setting";

import CustomDrawerContent from "./components/CustomDrawerContent";

// Rota autenticada
const AuthDrawer = createDrawerNavigator();
export const AuthDrawerScreen = () => (
  <AuthDrawer.Navigator
    drawerType="slide"
    drawerContentOptions={{
      labelStyle: { fontWeight: "bold" },
      itemStyle: { padding: 16 },
      contentContainerStyle: { backgroundColor: "#fff" }
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}
  >
    <AuthDrawer.Screen
      name="Home"
      component={Home}
      labelStyle={{ fontSize: 23 }}
      options={{
        drawerLabel: "Home",
        drawerIcon: () => <Feather name="user" size={16} />
      }}
    />
    <AuthDrawer.Screen
      name="Historic"
      component={History}
      options={{
        drawerLabel: "Histórico",
        drawerIcon: () => <Feather name="calendar" size={16} />
      }}
    />
    <AuthDrawer.Screen
      name="Support"
      component={Support}
      options={{
        drawerLabel: "Suporte",
        drawerIcon: () => <Feather name="book-open" size={16} />
      }}
    />
    <AuthDrawer.Screen
      name="Settings"
      component={Setting}
      options={{
        drawerLabel: "Configurações",
        drawerIcon: () => <Feather name="settings" size={16} />
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
    <GuestStack.Screen name="Support" component={Support} />
    <GuestStack.Screen name="Login" component={Login} />
    <GuestStack.Screen name="SignUp" component={SignUp} />
    <GuestStack.Screen name="ForgotPassword" component={ForgotPassword} />
  </GuestStack.Navigator>
);
