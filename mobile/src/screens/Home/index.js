import React from 'react';
import { Dimensions, View, StyleSheet, Button, TouchableOpacity, AsyncStorage } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { DrawerActions } from '@react-navigation/native';

import {FontAwesome5} from '@expo/vector-icons/';

import { useAuth } from '../../utils/auth';

const Screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height
};

// em andamento
export default function Home({ navigation }) {
	const [ , { logout } ] = useAuth();

	return (
		<View style={styles.container}>
			<TouchableOpacity 
				style={{alignItems:"flex-start", margin:16}}
				onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
			>
			  <FontAwesome5 name="bars" size={24}/>
			</TouchableOpacity>
			 <MapView
				provider={PROVIDER_GOOGLE} // remove if not using Google Maps
				style={styles.mapContainer}
				region={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.015,
					longitudeDelta: 0.0121
				}}
			/>
			{/* <Button title="Logout" onPress={logout} /> */}
			<View style={styles.mapDrawerOverlay} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	mapContainer: {
		width: Screen.width,
		height: Dimensions.get('window').height
	},
	mapDrawerOverlay: {
		position: 'absolute',
		left: 0,
		top: 0,
		opacity: 0.0,
		height: Dimensions.get('window').height,
		width: 10
	}
});
