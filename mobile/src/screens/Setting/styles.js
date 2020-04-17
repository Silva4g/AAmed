import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #e2e2e2;
`;

export const Title = styled.Text`
  align-self: center;
  color: #fff;
  font-size: 16px;
`;

export const Wrapper = styled.View`
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
  /* marginHorizontal: 10; */
`;

export const BoxTitle = styled.Text`
  align-self: flex-start;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #00000000;
`;

export const SwitchSeparator = styled(Separator)`
  background-color: #bfbfbf;
`;

export const SwitchBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
`;

export const SwitchText = styled.Text`
  font-size: 16px;
`;
