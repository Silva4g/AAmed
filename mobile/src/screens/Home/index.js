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
  watchPositionAsync,
  Accuracy,
  reverseGeocodeAsync,
} from "expo-location";

// import CustomHeader from "../../components/CustomHeader";
import styles from "./styles.js";
import api from "../../services/api";
import { Header } from "../../components/Header/index";
import axios from "axios";

const GOOGLE_MAPS_APIKEY = "AIzaSyBAJxkbJDUINqKFwXs-WGy-S7W-yD2ueJ4";

export default function Home() {
  const navigation = useNavigation();

  const [hospitals, setHospitals] = useState([]);
  const [user, setUser] = useState(null || "");
  const [currentRegion, setCurrentRegion] = useState(null);
  const [regionChange, setRegionChange] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [description, setDescription] = useState("");
  const [connection, setConnection] = useState(null);
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [modal, setModal] = useState(false);
  const [approved, setApproved] = useState(false);
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalDest, setHospitalDest] = useState({});
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const [destination, setDestination] = useState({ latitude: 0, longitude: 0 });
  // let conn;

  useEffect(() => {
<<<<<<< HEAD
    const conn = io("http://192.168.0.53:3333", {
=======
    const conn = io("http://10.0.0.200:3333", {
>>>>>>> 6175107537f9f2662388c6a5bb9b7cbc2556b257
      query: { user_id: user._id },
    });
    setConnection(conn);
    conn.on("solicitation_response", (data) => {
      setHospitalDest(data);
      setHospitalName(data.hospital.name);
      data.approved ? setApproved(true) : setApproved(false);
      setDestination({
        latitude: data.hospital.location.coordinates[1],
        longitude: data.hospital.location.coordinates[0],
      });
    });
  }, []);

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
      currentLocation,
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
    }, 1000);
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

        fetch(
          "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            latitude +
            "," +
            longitude +
            "&key=" +
            GOOGLE_MAPS_APIKEY
        )
          .then((response) => response.json())
          .then((responseJson) => {
            setCurrentLocation(responseJson.results[0].formatted_address);
            console.log(currentLocation);
          });
      }
    }

    loadInitialPosition();
  }, []);

  watchPositionAsync(
    {
      accuracy: Accuracy.High,
      timeInterval: 1000,
      enableHighAccuracy: true,
    },
    (data) => {
      if (approved) {
        if (
          calculateDistance(data.coords, destination) == 0.01 ||
          calculateDistance(data.coords, destination) == 0.02
        ) {
          connection.emit("arrived", {
            hospital_id: hospitalDest.hospital._id,
            user,
            arrived: true,
          });
          setApproved(false);
          setDestination({ latitude: 0, longitude: 0 });
          setModal(!modal);
          setDuration(null);
          setDistance(null);
        }
      }
    }
  );

  function rad(x) {
    return (x * Math.PI) / 180;
  }

  function calculateDistance(pointA, pointB) {
    let R = 6378137;
    let dLat = rad(pointB.latitude - pointA.latitude);
    let dLong = rad(pointB.longitude - pointA.longitude);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(pointA.latitude)) *
        Math.cos(rad(pointB.latitude)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = (R * c) / 1000;
    return d.toFixed(2);
  }

  useEffect(() => {
    async function loadHospitals() {
      const { latitude, longitude } = currentRegion || 1;
      if (latitude && longitude) {
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
        showsUserLocation
        style={styles.mapContainer}
      >
        {approved && !!destination.latitude && !!destination.longitude && (
          <MapViewDirections
            origin={currentRegion}
            onReady={(result) => {
              setDistance(result.distance);
              setDuration(result.duration);
            }}
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
                Sua solicitação foi aprovada em {hospitalName}.{"\n"}
                Tempo estimado: {`${Math.round(duration)} min \n`}
                Distância: {`${Number(distance).toFixed(2)} km`}
              </Text>
            </>
          )}
        </Animatable.View>
      ) : null}
      {!approved && (
        <View style={styles.searchForm}>
          <TextInput
            style={styles.searchInput}
            placeholder="Descrição..."
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            multiline
            value={description}
            onChangeText={setDescription}
          />

          <TouchableOpacity
            onPress={handleSolicitation}
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
      )}
      <View style={styles.mapDrawerOverlay} />
    </View>
  );
}
