import React from 'react';
import { ActivityIndicator } from 'react-native';
import { StyleSheet } from 'react-native';

export default function SpashScreen() {
  return (
    <ActivityIndicator size="large" color="#f19" style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});