import React, { useState } from "react";
import { View, TouchableOpacity, Text, Switch, StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";

import { FontAwesome } from "@expo/vector-icons";
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
import { ScrollView } from "react-native-gesture-handler";

export default function Setting({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  
  return (
    <Container>
      <ScrollView>
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
            <BoxTitle>Permissões</BoxTitle>
            <Separator />
            <SwitchBox>
              <SwitchText style={{fontWeight:'bold'}}>Aceitar todas as permissões</SwitchText>
              <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={{ false: "#767577", true: "#1167aa" }}
                thumbColor={isEnabled ? "#004b8b" : "#f4f3f4"}
              />
            </SwitchBox>
            <SwitchSeparator />
            <SwitchBox>
              <SwitchText>Localização</SwitchText>
              <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={{ false: "#767577", true: "#1167aa" }}
                thumbColor={isEnabled ? "#004b8b" : "#f4f3f4"}
              />
            </SwitchBox>

            <SwitchSeparator />

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
              <SwitchText>Email</SwitchText>
              <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={{ false: "#767577", true: "#1167aa" }}
                thumbColor={isEnabled ? "#004b8b" : "#f4f3f4"}
              />
            </SwitchBox>
          </View>
        </Wrapper>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.buttonSetings}>
            <Text style={styles.buttonText}>CONFIGURAR CONTA </Text>
            <FontAwesome style={styles.iconButton} name="angle-double-right" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSetings}>
            <Text style={styles.buttonText}>CONFIGURAR MAPA</Text>
            <FontAwesome style={styles.iconButton} name="angle-double-right" />
          </TouchableOpacity>  
          <TouchableOpacity style={styles.buttonSetings}>
            <Text style={styles.buttonText}>CONFIGURAR PRIVACIDADE</Text>
            <FontAwesome style={styles.iconButton} name="angle-double-right" />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  containerButton:{
    padding:20,
  },
  buttonSetings: {
    height: 60,
    marginTop:13,
    backgroundColor:'#e2e2e2',
    borderRadius: 2,
    borderColor:'#006bad',
    borderWidth:1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    padding:20,
    fontSize:15,
    textAlign:'center',
    color:'#006bad',
    fontWeight:'bold'
  },
  iconButton: {
    position:'absolute',
    alignSelf:'flex-end',
    padding:20,
    right:10,
    fontSize:22,
    color:'#006bad',
  }
});
