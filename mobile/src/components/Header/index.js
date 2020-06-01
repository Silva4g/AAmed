import React from "react";
import { CommonActions } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Container,
  ButtonLeft,
  Label,
  ButtonRight,
  ImgCenter,
  ImgLeft,
} from "./styles";

export const Header = ({ flag, navigation, label }) => {

  return (
    <Container>
      {flag ? (
        <>
          <ButtonLeft onPress={() => navigation.toggleDrawer()}>
            <Ionicons name="md-menu" size={35} color="#fff" />
          </ButtonLeft>
          <ImgCenter source={require("../../../assets/icon.png")} />
          <ButtonRight onPress={() => navigation.navigate("Historic")}>
            <MaterialCommunityIcons name="hospital" size={35} color="#fff" />
          </ButtonRight>
        </>
      ) : (
        <>
          <ButtonLeft
            onPress={() => navigation.dispatch(CommonActions.goBack())}
          >
            <Ionicons name="md-arrow-back" size={30} color="#fff" />
          </ButtonLeft>
          <Label>{label}</Label>
          <ImgLeft source={require("../../../assets/icon.png")} />
        </>
      )}
    </Container>
  );
};
