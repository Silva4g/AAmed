import React, { useState } from "react";
import { View, TouchableOpacity, Switch, StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import CustomHeader from "../../components/CustomHeader.js";

import {
  Container,
  Title,
  Wrapper,
  BoxTitle,
  Separator,
  SwitchSeparator,
  SwitchBox,
  SwitchText,
} from "./styles.js";

export default function Setting({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Container>
      <CustomHeader>
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.goBack())}
          style={styles.button}
        >
          <Ionicons name="md-arrow-back" size={30} color="#fff" />
        </TouchableOpacity>

        <Title>CONFIGURAÇÕES</Title>
      </CustomHeader>

      <Wrapper>
        <View style={styles.boxView}>
          <BoxTitle>Geral</BoxTitle>
          <Separator />
          <SwitchBox>
            <SwitchText>Compartilhamento de dados</SwitchText>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              trackColor={{ false: "#767577", true: "#1167aa" }}
              thumbColor={isEnabled ? "#004b8b" : "#f4f3f4"}
            />
          </SwitchBox>
        </View>

        <View style={styles.boxView}>
          <BoxTitle>Gerenciar notificações</BoxTitle>
          <Separator />
          <SwitchBox>
            <SwitchText>Notificações</SwitchText>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              trackColor={{ false: "#767577", true: "#1167aa" }}
              thumbColor={isEnabled ? "#004b8b" : "#f4f3f4"}
            />
          </SwitchBox>

          <SwitchSeparator />

          <SwitchBox>
            <SwitchText>E-mail</SwitchText>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              trackColor={{ false: "#767577", true: "#1167aa" }}
              thumbColor={isEnabled ? "#004b8b" : "#f4f3f4"}
            />
          </SwitchBox>

          <SwitchSeparator />

          <SwitchBox>
            <SwitchText>SMS</SwitchText>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              trackColor={{ false: "#767577", true: "#1167aa" }}
              thumbColor={isEnabled ? "#004b8b" : "#f4f3f4"}
            />
          </SwitchBox>
        </View>
      </Wrapper>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    left: 12,
  },

  boxView: {
    backgroundColor: "#e2e2e2",
    borderRadius: 5,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
});
