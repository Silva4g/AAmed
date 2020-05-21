import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet, AsyncStorage } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useAuth } from '../utils/auth';
import { Feather } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import fundoDrawer from '../assets/fundoDrawer.jpg';

//import api from "../../services/api";

export default function CustomDrawerContent(props) {
  const [ , { logout } ] = useAuth();
  

	return (
		<DrawerContentScrollView {...props}>
			<View style={styles.topDrawer}>
				<ImageBackground source={fundoDrawer} style={styles.imgTopDrawer}>
					<Avatar
						avatarStyle={styles.avatarStyle}
						containerStyle={styles.avatarContainerStyle}
						onPress={() => alert('Editar dados usuário')}
						activeOpacity={0.7}
						size="large"
						rounded
						source={{
							uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
						}}
						
					/>
					<Text style={styles.nameUser}>Gabriela Silva</Text>
					<Text style={styles.bioUser}>Rinite, Miopia e Alergia</Text>
				</ImageBackground>
			</View>

			<DrawerItemList {...props} />
			<View style={styles.separator} />
			<DrawerItem
				onPress={logout}
				label="SAIR"
				style={styles.drawerItem}
				labelStyle={styles.drawerItemLabel}
				icon={() => <Feather name="log-out" size={20} color="#E53935" />}
			/>
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
	topDrawer: {
		flex: 1,
		height: 140,
		justifyContent: 'center'
	},
	imgTopDrawer: {
		width: 280,
		height: 140,
		marginBottom:8,
	},
	avatarContainerStyle: {
		alignSelf: 'flex-start',
		marginTop: 10,
		marginLeft:20,
	},
	nameUser: {
		color: '#f7fdfc',
		fontSize: 14,
		marginTop:10,
		alignSelf: 'flex-start',
		fontWeight:'bold',
		marginLeft:15,
	},
	bioUser:{
		fontSize: 12,
		color:'#fbf9f6',
		marginLeft:15,
	},
	separator: {
		width: '100%',
		height: 1,
		backgroundColor: '#e2e2e2'
	},
	drawerItem: {
		marginTop:65,
		borderWidth: 1,
		borderColor: '#E53935',
		backgroundColor: '#fff'
	},
	drawerItemLabel: {
		fontWeight: 'bold',
		padding: 7,
		color: '#E53935'
	}
});
