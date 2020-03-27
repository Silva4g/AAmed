import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
import { useAuth } from "../utils/auth";
import { Feather } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import fundoDrawer from "../assets/fundoDrawer2.png";

export default function CustomDrawerContent(props) {
  const [, { logout }] = useAuth();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.topDrawer}>
        <ImageBackground source={fundoDrawer} style={styles.imgTopDrawer}>
          <Avatar
            avatarStyle={styles.avatarStyle}
            containerStyle={styles.avatarContainerStyle}
            onPress={() => alert("Editar dados usuário")}
            activeOpacity={0.7}
            size="large"
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
            }}
            showEditButton
          />
          <Text style={styles.nameAvatar}>Alice Costa</Text>
        </ImageBackground>
      </View>

      <DrawerItemList {...props} />
      <DrawerItem
        onPress={logout}
        label="Sair"
        inactiveTintColor="#656566"
        labelStyle={{ fontWeight: "bold" }}
        icon={() => <Feather name="log-out" size={20} color="#E53935" />}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  topDrawer: {
    flex: 1,
    height: 125,
    justifyContent: "center"
  },
  imgTopDrawer: {
    width: 280,
    height: 125
  },
  avatarStyle: {
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 40
  },
  avatarContainerStyle: {
    alignSelf: "center",
    marginTop: 10
  },
  nameAvatar: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
    alignSelf: "center"
  }
});
