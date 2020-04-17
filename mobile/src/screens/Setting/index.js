import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, Switch } from "react-native";
import { CommonActions } from "@react-navigation/native";
import ToggleSwitch from "toggle-switch-react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles.js";
import CustomHeader from "../../components/CustomHeader.js";

export default function Setting({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{ flex: 1, backgroundColor: "#e2e2e2" }}>
      <CustomHeader>
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.goBack())}
          style={{ position: "absolute", left: 12 }}
        >
          <Ionicons name="md-arrow-back" size={30} color="#fff" />
        </TouchableOpacity>

        <Text style={{ alignSelf: "center", color: "#fff", fontSize: 16 }}>
          CONFIGURAÇÕES
        </Text>
      </CustomHeader>

      <View style={{ marginHorizontal: 10, flex: 1 }}>
        <View
          style={{
            backgroundColor: "#e2e2e2",
            borderRadius: 5,
            marginTop: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 10,
          }}
        >
          <Text style={{ alignSelf: "flex-start", padding: 10, fontSize: 18, fontWeight: 'bold' }}>
            Geral
          </Text>

          <View
            style={{
              width: "100%",
              alignSelf: "center",
              height: 1,
              backgroundColor: "#004b8b00",
            }}
          ></View>

          <View
            style={{
              position: "relative",
              backgroundColor: "#c3c3c300",
              justifyContent: "center",
              borderRadius: 10,
              padding: 10,
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>Compartilhamento de dados</Text>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ position: "absolute", right: 0 }}
							trackColor={{ false: "#767577", true: "#1167aa" }}
							thumbColor={isEnabled ? "#004b8b" : "#f4f3f4"}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#e2e2e2",
            borderRadius: 5,
            marginTop: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 10,
          }}
        >
          <Text style={{ alignSelf: "flex-start", padding: 10, fontSize: 18, fontWeight: 'bold' }}>
            Gerenciar notificações
          </Text>

          <View
            style={{
              width: "100%",
              alignSelf: "center",
              height: 1,
              backgroundColor: "#004b8b00",
            }}
          ></View>

          <View
            style={{
              position: "relative",
              backgroundColor: "#c3c3c300",
              justifyContent: "center",
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>Notificações</Text>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ position: "absolute", right: 0 }}
							trackColor={{ false: "#767577", true: "#1167aa" }}
							thumbColor={isEnabled ? "#004b8b" : "#f4f3f4"}
            />
          </View>

          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#bfbfbf",
            }}
          ></View>

          <View
            style={{
              position: "relative",
              backgroundColor: "#c3c3c300",
              justifyContent: "center",
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>E-mail</Text>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ position: "absolute", right: 0 }}
							trackColor={{ false: "#767577", true: "#1167aa" }}
							thumbColor={isEnabled ? "#004b8b" : "#f4f3f4"}
            />
          </View>

          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#bfbfbf",
            }}
          ></View>

          <View
            style={{
              position: "relative",
              backgroundColor: "#c3c3c300",
              justifyContent: "center",
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>SMS</Text>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ position: "absolute", right: 0 }}
							trackColor={{ false: "#767577", true: "#1167aa" }}
							thumbColor={isEnabled ? "#004b8b" : "#f4f3f4"}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
