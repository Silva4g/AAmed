import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

// import ForgotPassword from './src/screens/ForgotPassword/index';
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar hidden={false} barStyle="light-content" backgroundColor="#41bb78" />
      <Routes />
      {/* <ForgotPassword /> */}
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
