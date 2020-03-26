import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styled from "styled-components";

export const ImageContainer = styled(View)`
  flex: 3;
  align-items: center;
  justify-content: center;
`;

export const LoginBox = styled(View)`
  flex: 2;
  padding: 16px;
  background-color: #778beb00;
`;

export const InputBox = styled(View)`
  background-color: #59627500;
`;

export const InputMask = styled(TextInputMask)`
  background-color: #e9e9e9;
  height: 30px;
  font-size: 18px;
  padding-left: 40px;
  border-width: 1px;
  border-color: #c9c9c9;
  margin-bottom: 18px;
`;

export const Input = styled(TextInput)`
  background-color: #e9e9e9;
  height: 30px;
  font-size: 18px;
  padding-left: 40px;
  border-color: #c9c9c9;
  border-width: 1px;
`;

export const Icon = styled(SimpleLineIcons)`
  font-size: 25px;
  color: #24292e;
  position: absolute;
  left: 6px;
  top: 2px;
  z-index: 5;
`;

export const TouchEye = styled(TouchableOpacity)`
  top: 2px;
  position: absolute;
  left: 290px;
  z-index: 5;
`;

export const IconEye = styled(MaterialCommunityIcons)`
  font-size: 25px;
  color: #24292e;
`;

export const Touch = styled(TouchableOpacity)`
  background-color: #29B6F6;
  padding: 12px;
  align-items: center;
  margin-top: 18px;
  border-radius: 2px;
  z-index: 10;
`;

export const ViewOptions = styled(View)`
  flex: 1;
  justify-content: flex-start;
  padding: 16px;
`;

export const Option = styled(Text)`
  align-self: center;
  font-size: 16px;
  text-decoration: underline;
`;

export const ErrorText = styled(Text)`
  align-self: center;
  color: #C62828;
  font-size: 16px;
`;
