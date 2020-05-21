import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import io from "socket.io-client";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import CustomHeader from "../../components/CustomHeader";
import styles from "./styles.js";
import api from "../../services/api";

export default function Home() {
  const [hospitals, setHospitals] = useState([]);
  const [user, setUser] = useState(null);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [regionChange, setRegionChange] = useState(null);
  const [description, setDescription] = useState("");
  const navigation = useNavigation();
  const [connection, setConnection] = useState(null);
  // let connection = null;

  useEffect(() => {
    setConnection(io("http://192.168.0.53:3333"));
    // socket.on("connect", () => console.log("[IO] Connect => connected on mobile"));
  }, []);

  async function handleSolicitation() {
    // const user_data = await AsyncStorage.getItem("store");
    // const parsed_user = JSON.parse(user_data);
    // const user_id = parsed_user.auth.user._id;
    const hospital_ids = [];

    hospitals.map((hospital) => {
      hospital_ids.push(hospital._id);
    });

    if (description === "") return Alert.alert("AVISO", "Preencha o campo.");

    connection.emit("user_solicitation", {
      hospital_ids,
      user,
      description,
    });
    Alert.alert("Solicitação enviada");
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

        // deu ruim
        const data = await AsyncStorage.getItem("store");
        const dataParse = JSON.parse(data);
        setUser(dataParse.auth.user || 1);

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
    return null;
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

        <Image
          source={require("../../../assets/icon.png")}
          style={{ width: 45, height: 45, alignSelf: "center" }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Historic")}
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

            <Callout style={styles.calloutHospital}>
              <Text style={styles.name}>{hospital.name}
              </Text>
              <Text style={styles.desc}>
                <Text style={styles.tittles}>RUA:</Text> {hospital.address.street}
              </Text>
              <Text>
                <Text style={styles.tittles}>BAIRRO:</Text> {hospital.address.neighborhood}
              </Text>
              <Text>
                <Text style={styles.tittles}>CEP:</Text> {hospital.address.cep} 
              </Text>
              <Text>
                <Text style={styles.tittles}>TELEFONE: </Text>{hospital.phone}
              </Text>
            </Callout>
          </Marker>
        ))}

        <Marker coordinate={currentRegion}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            }}
          />

          <Callout
            onPress={() => console.log("hospitais", hospitals)}
            style={styles.calloutUser}
          >
            <Text  style={styles.name}>{user.name}</Text>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder="Descrição..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={description}
          onChangeText={setDescription}
        />

        <TouchableOpacity
          onPress={() => handleSolicitation()}
          style={styles.loadButton}
        >
          <MaterialIcons name="send" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.mapDrawerOverlay} />
    </View>
  );
}
