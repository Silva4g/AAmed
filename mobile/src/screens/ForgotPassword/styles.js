import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Keyboard = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const TopContainer = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 35px;
  margin-bottom: 20px;
  color: #000;
`;

export const BoxDescription = styled.View`
  width: 250px;
  align-items: center;
  margin-top: 10px;
`;

export const Description = styled.Text`
  color: #000;
  font-size: 16px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: #24292e;
  position: absolute;
  top: 10px;
  left: 7px;
  z-index: 5;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 44px;
  font-size: 16px;
  padding-right: 40px;
  padding-left: 40px;
  margin-bottom: 20px;
  color: #24292e;
  border-bottom-width: 2px;
  border-bottom-color: #24292e;
`;

export const ButtonResetText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const BottomContainer = styled.View`
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const BottomContainerText = styled(Description)`
  color: #006bad;
`;

export const BottomContainerTextTouch = styled(ButtonResetText)`
  color: #004b8b;
  text-decoration-line: underline;
`;
