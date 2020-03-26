import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "./screens/Login";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";
import HomeScreenRoutes from './routes/HomeScreen.routes';

// Rota autenticada
const AuthStack = createStackNavigator();
export const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="HomeScreenRoutes" component={HomeScreenRoutes} />
  </AuthStack.Navigator>
);

// Rota sem autenticação
const GuestStack = createStackNavigator();
export const GuestStackScreen = () => (
  <GuestStack.Navigator>
     <GuestStack.Screen name="HomeScreenRoutes" component={HomeScreenRoutes} options={{ headerShown: false }}/>
    <GuestStack.Screen name="Login" component={Login} />
    <GuestStack.Screen name="SignUp" component={SignUp} />
    <GuestStack.Screen name="ForgotPassword" component={ForgotPassword} />
  </GuestStack.Navigator>
);
