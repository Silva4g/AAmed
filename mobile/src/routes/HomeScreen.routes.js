import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

export default function HomeScreenRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Teste" component={() => <Text>TESTE</Text>} />
    </Drawer.Navigator>
  );
}
