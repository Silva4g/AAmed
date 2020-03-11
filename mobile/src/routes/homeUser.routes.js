import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeUser from '../screens/HomeUser';

const Drawer = createDrawerNavigator();

export default function HomeUserRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeUser" component={HomeUser} />
      <Drawer.Screen name="Teste" component={() => <Text>TESTE</Text>} />
    </Drawer.Navigator>
  );
}
