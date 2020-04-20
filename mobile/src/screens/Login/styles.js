import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2f900000;
`;

export const LoginBox = styled.View`
  flex: 1.35;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #778beb00;
  justify-content: flex-start;
`;

export const InputBox = styled.View`
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

export const Input = styled.TextInput`
  background-color: #e9e9e9;
  height: 30px;
  font-size: 18px;
  padding-left: 40px;
  border-color: #c9c9c9;
  border-width: 1px;
  margin-bottom: 18px;
`;

export const Icon = styled(SimpleLineIcons)`
  font-size: 25px;
  color: #24292e;
  position: absolute;
  left: 6px;
  top: 2px;
  z-index: 5;
`;

export const TouchEye = styled.TouchableOpacity`
  top: 2px;
  position: absolute;
  left: 290px;
  z-index: 5;
`;

export const IconEye = styled(MaterialCommunityIcons)`
  font-size: 25px;
  color: #24292e;
`;

export const TouchText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const ViewOptions = styled.View`
  flex: 1;
  justify-content: center;
  /* padding: 16px; */
  /* margin-top: 38px; */
  background-color: #f29;
`;

export const Option = styled.Text`
  color: #004b8b;
  font-weight: bold;
  align-self: center;
  font-size: 16px;
  margin-top: 18px;
  text-decoration: underline;
`;

export const ErrorText = styled.Text`
  align-self: center;
  color: #c62828;
  font-size: 16px;
`;
