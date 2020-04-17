import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  AsyncStorage,
  TouchableOpacity,
  Alert,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import io from "socket.io-client";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import CustomHeader from "../../components/CustomHeader";
import styles from "./styles.js";
import api from "../../services/api";
import LoadingCustom from "../../components/LoadingCustom";

export default function Home() {
  const [hospitals, setHospitals] = useState([]);
  const [user, setUser] = useState(null);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [regionChange, setRegionChange] = useState(null);
  const [description, setDescription] = useState("Descrição padrão!");
  const navigation = useNavigation();
  const [connection, setConnection] = useState(null);
  // let connection = null;

  useEffect(() => {
    setConnection(io("http://192.168.15.4:3333"));
    // socket.on("connect", () => console.log("[IO] Connect => connected on mobile"));
  }, []);

  // essa funcção não pode ficar em um botão (pelo menos a conexão do socket)
  // depois retirar
  // function getIds() {
  //   const allIds = [];
  //   hospitals.map((hospital) => {
  //     allIds.push(hospital._id);
  //   });

  //   const user_id = user._id;
  //   const user_email = user.email;
  //   console.debug("[ID: user] => ", user_id);
  //   console.debug("[EMAIL: user] => ", user_email);

  //   socket.emit("hospitals_id", {
  //     ids: { allIds }, //ids de hospitais perto de mim
  //     user_id, //id do user logado
  //     email: user_email, //email do user logado
  //   });
  // }

  async function handleSolicitation() {
    const user_data = await AsyncStorage.getItem("store");
    const parsed_user = JSON.parse(user_data);
    const user_id = parsed_user.auth.user._id;
    const hospital_ids = [];

    hospitals.map((hospital) => {
      hospital_ids.push(hospital._id);
    });

    connection.emit("user_solicitation", {
      hospital_ids,
      user,
      description,
    });
    Alert.alert("Solicitação enviada");
    // try {
    //   await api.post(`/hospital/${'5e829725a3525ef2988b818b'}/solicitation`,{
    //       description,
    //     },{
    //       headers: { user_id },
    //     }
    //   );

    //   Alert.alert("Solicitação enviada");
    // } catch (err) {
    //   console.og("[ERROR: solicitation] => ", err);
    // }
    // socket.emit("ola", { id: user_id, description });
  }

  // função que vai carregar a posição inicial do paciente no mapa
  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        const data = await AsyncStorage.getItem("store");
        const dataParse = JSON.parse(data);
        setUser(dataParse.auth.user);

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

  // problemas aqui

  useEffect(() => {
    async function loadHospitals() {
      const { latitude, longitude } = currentRegion || 1;
      try {
        const response = await api.get("search", {
          params: {
            latitude,
            longitude,
          },
        });

        setHospitals(response.data.hospitais);
        // console.log("[API] => ", response.data.hospitais);
      } catch (err) {
        console.debug("[ERROR: loadHospitals] => ", err);
      }
    }

    loadHospitals();
  }, [currentRegion]);

  async function handleRegionChanged(region) {
    // console.log(region);
    setRegionChange(region);
  }

  if (!currentRegion) {
    return <LoadingCustom />;
  }

  return (
    <View style={styles.container}>
      <CustomHeader>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{ position: "absolute", left: 12 }}
        >
          <Ionicons name="md-menu" size={35} color="#fff" />
        </TouchableOpacity>

        <Text style={{ alignSelf: "center", color: "#fff" }}>Icone, nome?</Text>

        <TouchableOpacity
          onPress={() => handleSolicitation()}
          style={{ position: "absolute", right: 12 }}
        >
          <MaterialCommunityIcons name="hospital" size={35} color="#fff" />
        </TouchableOpacity>
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
                {hospital.address.cep}/
                {hospital._id}
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
