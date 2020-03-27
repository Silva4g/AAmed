import React, { useState, useEffect } from "react";
import { Dimensions, View, StyleSheet, Image, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { Header } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

import api from "../../services/api";

const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height
};

// em andamento
export default function Home() {
  const [hospitals, setHospitals] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    // função que vai carregar a posição inicial do paciente no mapa
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }

    loadInitialPosition();
  }, []);

  useEffect(() => {
    async function loadHospitals() {
      const response = await api.get("/hospital");
      console.log(response.data);
      setHospitals(response.data);
    }

    loadHospitals();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          icon: "menu",
          color: "#fff",
          iconStyle: { fontSize: 35 },
          onPress: () => navigation.openDrawer()
        }}
        centerComponent={{
          text: "First help?",
          style: { color: "#fff", fontSize: 18 }
        }}
        rightComponent={{ icon: "home", color: "#fff" }}
        backgroundColor="#29B6F6"
      />
      <MapView initialRegion={currentRegion} style={styles.mapContainer}>
        <Marker coordinate={{ latitude: -22.9161093, longitude: -47.0707415 }}>
          <FontAwesome name="hospital-o" size={30} color="#E02041" />

          <Callout style={styles.callout}>
            <Text style={styles.name}>Hospital?</Text>
            <Text style={styles.desc}>Não sei.</Text>
            <Text style={styles.data}>Não lista. Tirar o '-location'?</Text>
          </Callout>
        </Marker>

        <Marker coordinate={{ latitude: -22.9442145, longitude: -47.0581135 }}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                "https://avatars1.githubusercontent.com/u/57529750?s=460&u=ecdea07170683c8188c3fda98756f90dff1978e6&v=4"
            }}
          />

          <Callout style={styles.callout}>
            <Text style={styles.name}>Nome do paciente</Text>
            <Text style={styles.desc}>Alguma descrição?</Text>
            <Text style={styles.data}>Dados?Não sei.</Text>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.mapDrawerOverlay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapContainer: {
    width: Screen.width,
    height: Dimensions.get("window").height
  },
  mapDrawerOverlay: {
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.0,
    height: Dimensions.get("window").height,
    width: 10
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#E02041"
  },
  callout: {
    width: 200
  },
  name: {
    fontWeight: "bold",
    fontSize: 16
  },
  desc: {
    color: "#666",
    marginTop: 5
  },
  data: {
    marginTop: 5
  }
});
