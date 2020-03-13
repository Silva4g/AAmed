import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Register from './screens/Register';
import ForgotPassword from './screens/ForgotPassword';
// import HomeUser from './screens/HomeUser';

import HomeUserRoutes from './routes/homeUser.routes';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="HomeUser" component={HomeUserRoutes} />
    </Stack.Navigator>
  );
}
