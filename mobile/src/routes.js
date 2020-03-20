import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";

import SplashScreen from './components/SplashScreen';

import Home from './screens/Home';

const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const options = {
  headerTransparent: true,
  headerTitleAlign: "center",
  headerTintColor: "#24292e",
};

// Exte arquivo está passando por uma reformulação
// Caso não consiga acessar alguma rota, retire o operador ternário

export default function Routes() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <SplashScreen />
  }

  console.log(userToken)
  return (
    <NavigationContainer>
      {userToken ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Teste" component={SplashScreen} />
        </Drawer.Navigator>
      ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login} options={options} />
            <AuthStack.Screen name="SignUp" component={SignUp} options={options} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} options={options} />
          </AuthStack.Navigator>
        )}
    </NavigationContainer>
  );
}
