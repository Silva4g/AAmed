import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar hidden={false} barStyle="light-content" backgroundColor="#41bb78" />
        <Routes />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff99',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
