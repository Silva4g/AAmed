import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./styles.js";
import CustomHeader from "../../components/CustomHeader";

export default function History({ navigation }) {
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
    <ScrollView>
      <View style={styles.containerHistory}>
        <View style={styles.viewHistory}>
          <View style={styles.containerInfo}>
            <Text style={styles.infoHistory}>
              <Text style={styles.textTittle}>HOSPITAL: </Text>
            Vicente Nunes</Text>
            <Text style={styles.infoHistory}>
               <Text style={styles.textTittle}>DESCRIÇÃO: </Text> 
              Quebrei o dedo</Text>
            <Text style={styles.infoHistory}>
              <Text style={styles.textTittle}>TELEFONE: </Text> 
            3269-4089</Text>
          </View>
          <View style={styles.containerDate}>
            <Text style={styles.dateHistory}>26/05/2020</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerHistory}>
        <View style={styles.viewHistory}>
          <View style={styles.containerInfo}>
            <Text style={styles.infoHistory}>
              <Text style={styles.textTittle}>HOSPITAL: </Text>
            Vicente Nunes</Text>
            <Text style={styles.infoHistory}>
               <Text style={styles.textTittle}>DESCRIÇÃO: </Text> 
              Quebrei o dedo</Text>
            <Text style={styles.infoHistory}>
              <Text style={styles.textTittle}>TELEFONE: </Text> 
            3269-4089</Text>
          </View>
          <View style={styles.containerDate}>
            <Text style={styles.dateHistory}>30/05/2020</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerHistory}>
        <View style={styles.viewHistory}>
          <View style={styles.containerInfo}>
            <Text style={styles.infoHistory}>
              <Text style={styles.textTittle}>HOSPITAL: </Text>
            Vicente Nunes</Text>
            <Text style={styles.infoHistory}>
               <Text style={styles.textTittle}>DESCRIÇÃO: </Text> 
              Quebrei o dedo</Text>
            <Text style={styles.infoHistory}>
              <Text style={styles.textTittle}>TELEFONE: </Text> 
            3269-4089</Text>
          </View>
          <View style={styles.containerDate}>
            <Text style={styles.dateHistory}>10/06/2020</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerHistory}>
        <View style={styles.viewHistory}>
          <View style={styles.containerInfo}>
            <Text style={styles.infoHistory}>
              <Text style={styles.textTittle}>HOSPITAL: </Text>
            Vicente Nunes</Text>
            <Text style={styles.infoHistory}>
               <Text style={styles.textTittle}>DESCRIÇÃO: </Text> 
              Quebrei o dedo</Text>
            <Text style={styles.infoHistory}>
              <Text style={styles.textTittle}>TELEFONE: </Text> 
            3269-4089</Text>
          </View>
          <View style={styles.containerDate}>
            <Text style={styles.dateHistory}>20/06/2020</Text>
          </View>
        </View>
      </View>
    </ScrollView>
    </>
  );
}
