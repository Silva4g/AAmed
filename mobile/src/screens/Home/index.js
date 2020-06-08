import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  Alert,
  Keyboard,
} from "react-native";
import MapViewDirections from "react-native-maps-directions";
import * as Animatable from "react-native-animatable";
import MapView, { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import io from "socket.io-client";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

// import CustomHeader from "../../components/CustomHeader";
import styles from "./styles.js";
import api from "../../services/api";
import { Header } from "../../components/Header/index";
import Directions from "../../components/Direction/index.js";
const GOOGLE_MAPS_APIKEY = "AIzaSyBAJxkbJDUINqKFwXs-WGy-S7W-yD2ueJ4";

export default function Home() {
  const [hospitals, setHospitals] = useState([]);
  const [user, setUser] = useState(null || "");
  const [currentRegion, setCurrentRegion] = useState(null);
  const [regionChange, setRegionChange] = useState(null);
  const [description, setDescription] = useState("");
  const navigation = useNavigation();
  const [connection, setConnection] = useState(null);
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [modal, setModal] = useState(false);
  const [approved, setApproved] = useState(false);
  const [hospitalName, setHospitalName] = useState("");

  const [destination, setDestination] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    const conn = io("http://192.168.15.6:3333", {
      query: { user_id: user._id },
    });
    setConnection(conn);
    conn.on("solicitation_response", (data) => {
      setHospitalName(data.hospital.name);
      data.approved ? setApproved(true) : setApproved(false);
      setDestination({
        latitude: data.hospital.location.coordinates[1],
        longitude: data.hospital.location.coordinates[0],
      });
    });
  }, [user]);

  useEffect(() => {
    function getUserLogged() {
      return new Promise((resolve, result) => {
        setTimeout(() => {
          resolve(AsyncStorage.getItem("store"));
        }, 1000);
      });
    }
    getUserLogged()
      .then((data) => {
        const dataParse = JSON.parse(data);
        setUser(dataParse.auth.user);
      })
      .catch((error) => console.log(error));
  }, []);

  async function handleSolicitation() {
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
    Alert.alert(
      "Solicitação enviada",
      "Sua solicitação de atendimento foi enviada aos hospitais próximos à sua localização."
    );
    Keyboard.dismiss();
    setDescription("");
    setIsActiveButton(true);
    setModal(true);
    setTimeout(() => {
      setIsActiveButton(false);
    }, 60000);
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
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.014,
          longitudeDelta: 0.014,
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
            longitude,
            latitude,
          },
        });
        setHospitals(response.data.hospitais);
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
      <Header flag={true} navigation={navigation} />

      <MapView
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        loadingEnabled
        style={styles.mapContainer}
      >
        {approved && !!destination.latitude && !!destination.longitude && (
          <MapViewDirections
            origin={currentRegion}
            onReady={() => {}}
            onError={(err) => console.log(err)}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor={"#222"}
          />
        )}
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
              <Text style={styles.name}>{hospital.name}</Text>
              <Text style={styles.desc}>
                <Text style={styles.tittles}>RUA:</Text>{" "}
                {hospital.address.street}
              </Text>
              <Text>
                <Text style={styles.tittles}>BAIRRO:</Text>{" "}
                {hospital.address.neighborhood}
              </Text>
              <Text>
                <Text style={styles.tittles}>CEP:</Text> {hospital.address.cep}
              </Text>
              <Text>
                <Text style={styles.tittles}>TELEFONE: </Text>
                {hospital.phone}
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
            <Text style={styles.name}>{user.name}</Text>
          </Callout>
        </Marker>
      </MapView>
      {modal ? (
        <Animatable.View
          style={styles.modal}
          animation="fadeInDown"
          duration={1000}
          useNativeDriver
        >
          {!approved ? (
            <>
              <FontAwesome name="circle" size={15} color="#ff9f1a" />
              <Text>Solicitação aguardando aprovação do hospital.</Text>
            </>
          ) : (
            <>
              <FontAwesome name="circle" size={15} color="#0ec445" />
              <Text>
                Sua solicitação foi aprovada no hospital: {hospitalName}.
              </Text>
            </>
          )}
        </Animatable.View>
      ) : null}
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
          onPress={()=>handleSolicitation()}
          style={
            isActiveButton
              ? [styles.loadButton, { backgroundColor: "#006bad55" }]
              : styles.loadButton
          }
          disabled={isActiveButton}
        >
          <MaterialIcons name="send" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.mapDrawerOverlay} />
    </View>
  );
}
