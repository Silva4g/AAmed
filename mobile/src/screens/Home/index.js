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

import styles from './styles.js';
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
      // const { latitude, longitude } = currentRegion;

      try {
        const response = await api.get("search");
        // console.log(response.data.hospitais);
        setHospitals(response.data.hospitais);
      } catch (error) {
        console.log("que tal? ", error);
      }
    }

    loadHospitals();
  }, []);

  function handleRegionChanged(region) {
    console.log(region);
    setRegionChange(region);
  }

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
      <MapView
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={styles.mapContainer}
      >
        {hospitals.map(hospital => (
          <Marker
            key={hospital._id}
            coordinate={{
              latitude: hospital.location.coordinates[1],
              longitude: hospital.location.coordinates[0]
            }}
          >
            <FontAwesome name="hospital-o" size={30} color="#E02041" />

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
                "https://avatars1.githubusercontent.com/u/57529750?s=460&u=ecdea07170683c8188c3fda98756f90dff1978e6&v=4"
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
