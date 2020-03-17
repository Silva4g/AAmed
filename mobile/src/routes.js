import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";

import HomeUserRoutes from "./routes/homeUser.routes";

const Stack = createStackNavigator();

const options = {
  headerTransparent: true,
  headerTitleAlign: "center",
  headerTintColor: "#24292e"
};

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Register" component={Register} options={options} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerTransparent: true,
          headerTitleAlign: 'center',
          title: '',
          headerTintColor: "#24292e",
        }}
      />
      <Stack.Screen
        name="HomeUser"
        options={{ headerShown: false }}
        component={HomeUserRoutes}
      />
    </Stack.Navigator>
  );
}
