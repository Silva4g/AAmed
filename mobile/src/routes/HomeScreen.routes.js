import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
	drawerIcon
} from '@react-navigation/drawer';
import { Divider, Avatar, ListItem } from 'react-native-elements';

import SimpleIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';

import Home from '../screens/Home';
import Historic from '../screens/Historic';
import Support from '../screens/Support';
import Settings from '../screens/Settings';

import fundoDrawer from '../../assets/fundoDrawer2.png';

const Teste = () => (
	<View>
		<Text>Página Teste - Excluir depois</Text>
	</View>
);

// Os itens '<Avatar/>' e '<Divider/>' são do 'Reactnative ELEMENTS', uma lib de componentes já criados(prontos)
// você pode usar ou não usar tanto faz não muda em nada(mas facilita a customização(OBS: CONSULTAR A DOC))

function CustomDrawerContent(props) {
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
						showEditButton
					/>
					<Text style={styles.nameAvatar}>Alice Costa</Text>
				</ImageBackground>
			</View>

			{/* <Divider style={{ backgroundColor: 'black', height: 1 }} /> */}

			<DrawerItemList {...props} />
			{/* <DrawerItem
				label="Sair"
				inactiveTintColor="#656566"
				labelStyle={{ fontWeight: 'bold'}}
				onPress={() => alert('É um scroll automático então pode colocar vários itens')}
			/> */}
		</DrawerContentScrollView>
	);
}

const Drawer = createDrawerNavigator();

export default function HomeScreenRoutes() {
	return (
		// Onde customizamos o drawer em si
		<Drawer.Navigator
			drawerContentOptions={{
				labelStyle: { fontWeight: 'bold' },
				itemStyle: { padding: 22 },
				contentContainerStyle: { backgroundColor: '#fff' }
			}}
			drawerContent={(props) => <CustomDrawerContent {...props} />}
		>
			<Drawer.Screen
				name="Home"
				component={Home}
				labelStyle={{ fontSize: 20 }}
				options={{
					drawerLabel: 'Home',
					drawerIcon: ({ tintColor }) => <Feather name="user" size={16} />
				}}
			/>
			<Drawer.Screen
				name="Historic"
				component={Historic}
				options={{
					drawerLabel: 'Histórico',
					drawerIcon: ({ tintColor }) => <Feather name="calendar" size={16} />
				}}
			/>
			<Drawer.Screen
				name="Support"
				component={Support}
				options={{
					drawerLabel: 'Suporte',
					drawerIcon: ({ tintColor }) => <Feather name="book-open" size={16} />
				}}
			/>
			<Drawer.Screen
				name="Settings"
				component={Settings}
				options={{
					drawerLabel: 'Configurações',
					drawerIcon: ({ tintColor }) => <Feather name="settings" size={16} />
				}}
			/>
			<Drawer.Screen
				name="Sair"
				component={Home}
				options={{
					drawerLabel: 'Sair',
					drawerIcon: () => <Feather name="log-out" size={16} color="#ff0000" />
				}}
			/>
		</Drawer.Navigator>
	);
}

const styles = StyleSheet.create({
	topDrawer: {
		flex: 1,
		height: 125,
		justifyContent: 'center'
	},
	imgTopDrawer: {
		width: 280,
		height: 125
	},
	avatarStyle: {
		borderWidth: 3,
		borderColor: 'white',
		borderRadius: 40
	},
	avatarContainerStyle: {
		alignSelf: 'center',
		marginTop: 10
	},
	nameAvatar: {
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold',
		marginVertical: 8,
		alignSelf: 'center'
	}
});
