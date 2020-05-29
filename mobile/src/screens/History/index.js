import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  FlatList,
  AsyncStorage,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

import api from "../../services/api";

import styles from "./styles.js";
import CustomHeader from "../../components/CustomHeader";
import Loading from "../../components/Loading";

export default function History({ navigation }) {
  const [user, setUser] = useState(null || "");
  const [isLoading, setIsLoading] = useState(true);
  const [hasHistory, setHasHistory] = useState(false);
  const [solicitations, setSolicitations] = useState([]);

  useEffect(() => {
    function getLoggedUser() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(AsyncStorage.getItem("store"));
        }, 1000);
      });
    }
    getLoggedUser()
      .then((data) => {
        const dataParse = JSON.parse(data);
        setUser(dataParse.auth.user);
      })
      .catch((error) => console.log(error));
  }, []);

  async function loadSolicitations() {
    try {
      const response = await api.get(`solicitations/${user._id}`);
      setSolicitations(response.data);
      setIsLoading(false);
      if (response.data.length > 0) return setHasHistory(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadSolicitations();
  }, [user]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <CustomHeader>
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.goBack())}
          style={{ position: "absolute", left: 12 }}
        >
          <Ionicons name="md-arrow-back" size={30} color="#fff" />
        </TouchableOpacity>

        <Text style={{ alignSelf: "center", color: "#fff", fontSize: 16 }}>
          HISTÓRICO
        </Text>

        <Image
          source={require("../../../assets/icon.png")}
          style={{ width: 45, height: 45, position: "absolute", right: 12 }}
        />
      </CustomHeader>
      {/* {console.log(hasHistory)} */}
      {hasHistory ? (
        <FlatList
          style={styles.historyList}
          data={solicitations}
          keyExtractor={(solicitations) => String(solicitations._id)}
          renderItem={({ item: solicitations }) => (
            <View style={styles.viewHistory}>
              <Text style={styles.historyProp}>HOSPITAL:</Text>
              <Text style={styles.infoHistory}>
                {solicitations.hospital.name}
              </Text>

              <Text style={styles.historyProp}>TELEFONE:</Text>
              <Text style={styles.infoHistory}>
                {solicitations.hospital.phone}
              </Text>

              <Text style={styles.historyProp}>DESCRIÇÃO:</Text>
              <Text style={styles.infoHistory}>
                {solicitations.description}
              </Text>

              <Text style={styles.historyProp}>DATA:</Text>
              <Text style={styles.infoHistory}>
                {moment(solicitations.createdAt).format("DD/MM/YYYY")}
              </Text>
            </View>
          )}
        />
      ) : (
        <View style={styles.hasNoHistoryView}>
          <Image
            resizeMode="contain"
            source={require("../../../assets/icon.png")}
            style={styles.img}
          />
          <Text style={styles.hasNoHistoryText}>
            {`    Você ainda não possui 
  histórico de solicitações!`}
          </Text>
        </View>
      )}
    </>
  );
}
