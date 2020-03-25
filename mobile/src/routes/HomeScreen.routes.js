import React from "react";
import { View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
import SimpleIcons from "@expo/vector-icons/SimpleLineIcons";
import { Divider, Avatar } from 'react-native-elements';

import Home from "../screens/Home";

const Teste = () => (
  <View>
    <Text>Página Teste - Excluir depois</Text>
  </View>
);

// EXCLUIR ESSES COMENTÁRIOS DEPOIS
// Este componente(CustomDrawerContent) é o 'novo drawer'
// ele recebe as props que seriam as configurações passadas no 'Drawer.Navigator' além das opções de rotas
// as rotas, ou seja, os '<Drawer.Screen />' são passadas nesse '<DrawerItemList />' através das props
// OBS. A CUSTOMIZAÇÃO DE UM 'ITEM DE ROTA' E FEITO NA ROTA OU SEJA NO '<Drawer.Screen />' DESEJADO

// no 'drawerContentOptions' passa configurações gerais para o '<CustomDrawerContent />'
// no 'options' da '<Drawer.Screen />' a customização do item daquela rota em especifico.

// Você pode inserir componetes do react-native dentro do return do componente '<CustomDrawerContent />'
// ex. <View/>,<Text/>, etc.

// Os itens '<Avatar/>' e '<Divider/>' são do 'Reactnative ELEMENTS', uma lib de componentes já criados(prontos)
// você pode usar ou não usar tanto faz não muda em nada(mas facilita a customização(OBS: CONSULTAR A DOC))

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          height: 200,
          backgroundColor: "#ff229c66",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Avatar rounded title="UI" size="large" />
      </View>
      <Divider style={{ backgroundColor: "#f50", height: 2 }} />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Clique aqui"
        onPress={() =>
          alert(
            "Faz qualquer coisa, a não ser renderizar outro componente de rota"
          )
        }
      />
      <DrawerItem
        label="Veja as props na doc"
        inactiveTintColor="#f29"
        inactiveBackgroundColor="#df9"
        labelStyle={{ fontSize: 20, padding: 5 }}
        style={{ borderWidth: 2 }}
        onPress={() =>
          alert("É um scroll automático então pode colocar vários itens")
        }
      />
      <DrawerItem
        label="Olha lá que bonito!!"
        icon={() => <SimpleIcons name="lock" size={25} color="#f29" />}
        onPress={() => alert("Têm várias funcionalidades e tals")}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function HomeScreenRoutes() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { borderColor: "#c1c1c1" },
        contentContainerStyle: { backgroundColor: "#4287f599" }
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Home Drawer Screen",
          drawerIcon: () => (
            <SimpleIcons name="user" size={25} color="#7cff36" />
          )
        }}
      />
      <Drawer.Screen name="Teste" component={Teste} />
    </Drawer.Navigator>
  );
}
