import React from 'react';
import { Dimensions, View, StyleSheet, Button, AsyncStorage } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

// em andamento

export default function Home({ navigation }) {

  // async function handleLogout() {
  //   // await AsyncStorage.removeItem('isLoggedin');
  //   navigation.push('SignIn');
  // }

  return (
    <View style={styles.container}>
      {/* <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.mapContainer}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
      </MapView> */}
      <Button title="Logout" onPress={() => signOut()} />
      <View style={styles.mapDrawerOverlay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  mapContainer: {
    width: Screen.width,
    height: Dimensions.get('window').height,
  },
  mapDrawerOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.0,
    height: Dimensions.get('window').height,
    width: 10,
  },
});