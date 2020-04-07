import React, { useState, useEffect } from "react";
import { Dimensions, View, StyleSheet, Image, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import CustomHeader from "../../components/CustomHeader";
import styles from "./styles.js";
import api from "../../services/api";

// em andamento
export default function Home() {
  const [hospitals, setHospitals] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [regionChange, setRegionChange] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    // função que vai carregar a posição inicial do paciente no mapa
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();
  }, []);

  async function loadHospitals() {
    const { latitude, longitude } = currentRegion;

    try {
      const response = await api.get("search", {
        params: {
          latitude,
          longitude,
        },
      });
      // console.log(response.data.hospitais);
      setHospitals(response.data.hospitais);
    } catch (error) {
      console.log("que tal? ", error);
    }
  }

  function handleRegionChanged(region) {
    console.log(region);
    setRegionChange(region);
  }

  if (!currentRegion) {
    return null;
  }

  // caso ainda não esteja funcionando tente:
  // importa o DrawerActions do @react-navigation/native
  // no onPress -> navigation.dispatch(DrawerActions.openDrawer());
  return (
    <View style={styles.container}>
      <CustomHeader>
        <Ionicons
          name="md-menu"
          size={35}
          color="#fff"
          style={{ position: "absolute", left: 12 }}
          onPress={() => navigation.toggleDrawer()}
        />

        <Text style={{ alignSelf: "center", color: "#fff" }}>
          Nome ou logo do app?
        </Text>

        <MaterialCommunityIcons
          name="hospital"
          size={35}
          color="#fff"
          style={{ position: "absolute", right: 12 }}
          onPress={() => loadHospitals()}
        />
      </CustomHeader>

      <MapView
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={styles.mapContainer}
      >
        {hospitals.map((hospital) => (
          <Marker
            key={hospital._id}
            coordinate={{
              latitude: hospital.location.coordinates[1],
              longitude: hospital.location.coordinates[0],
            }}
          >
            <MaterialCommunityIcons
              name="hospital-marker"
              size={40}
              color="#0984e3"
            />

            <Callout style={styles.callout}>
              <Text style={styles.name}>{hospital.name}</Text>
              <Text style={styles.desc}>
                {hospital.address.street}/{hospital.address.neighborhood}/
                {hospital.address.cep}
              </Text>
              <Text style={styles.data}>
                {hospital.address.city}/{hospital.address.state}
              </Text>
            </Callout>
          </Marker>
        ))}

        <Marker coordinate={currentRegion}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                "https://avatars1.githubusercontent.com/u/57529750?s=460&u=ecdea07170683c8188c3fda98756f90dff1978e6&v=4",
            }}
          />

          <Callout
            onPress={() => console.log("hospitais", hospitals)}
            style={styles.callout}
          >
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

// { latitude: -22.9442145, longitude: -47.0581135 }
