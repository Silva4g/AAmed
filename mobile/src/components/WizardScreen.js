import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import styled from "styled-components/native";

import Wizard from "./Wizard";
import Step from "./Step";

function WizardScreen() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // const [susCard, setSusCard] = useState("");
  const [bio, setBio] = useState("");
  const [bottomLineColor, setBottomLineColor] = useState(false);

  function changeBottomLineColor() {
    setBottomLineColor((prevState) => !prevState);
  }

  const inputs = [
    {
      key: String(Math.random()),
      value: name,
      label: "Nome",
    },
    {
      key: String(Math.random()),
      value: cpf,
      label: "CPF",
    },
    {
      key: String(Math.random()),
      value: email,
      label: "E-mail",
    },
    {
      key: String(Math.random()),
      value: senha,
      label: "Senha",
    },
    // {
    //   key: String(Math.random()),
    //   value: susCard,
    //   label: "Cartão do SUS",
    // },
    {
      key: String(Math.random()),
      value: bio,
      label: "Bio",
    },
  ];

  const args = {
    name,
    cpf,
    email,
    senha,
    // susCard,
    bio,
  };

  return (
    <Container>
      <Wizard initialValues={args}>
        <Step>
          <StepContainer>
            <InputContainer>
              <Label>Nome completo</Label>
              <Input
                autoFocus
                placeholder="ex: José da Silva"
                placeholderTextColor="#00000066"
                selectionColor="#006bad66"
                onChangeText={setName}
                value={name}
              />
            </InputContainer>
          </StepContainer>
        </Step>
        <Step>
          <StepContainer>
            <InputContainer>
              <Label>CPF</Label>
              <InputMask
                type={"cpf"}
                autoFocus
                placeholder="000.000.000-00"
                placeholderTextColor="#00000066"
                keyboardType="number-pad"
                selectionColor="#006bad66"
                onChangeText={(e) => setCpf(e)}
                value={cpf}
              />
            </InputContainer>
          </StepContainer>
        </Step>
        <Step>
          <StepContainer>
            <InputContainer>
              <Label>E-mail</Label>
              <Input
                autoFocus
                autoCapitalize="none"
                placeholder="jose.silva@mail.com"
                placeholderTextColor="#00000066"
                keyboardType="email-address"
                selectionColor="#006bad66"
                onChangeText={setEmail}
                value={email}
              />
            </InputContainer>
          </StepContainer>
        </Step>
        <Step>
          <StepContainer>
            <InputContainer>
              <Label>Senha</Label>
              <Input
                autoFocus
                placeholder="************"
                placeholderTextColor="#00000066"
                secureTextEntry
                selectionColor="#006bad66"
                onChangeText={setSenha}
                value={senha}
              />
            </InputContainer>
          </StepContainer>
        </Step>
        {/* <Step>
          <StepContainer>
            <InputContainer>
              <Label>Cartão do SUS</Label>
              <InputMask
                type={"custom"}
                options={{
                  mask: "9 99 9999 9999 9999",
                }}
                autoFocus
                placeholder="0 00 0000 0000 0000"
                placeholderTextColor="#00000066"
                keyboardType="number-pad"
                selectionColor="#006bad66"
                onChangeText={(e) => setSusCard(e)}
                value={susCard}
              />
            </InputContainer>
          </StepContainer>
        </Step> */}
        <Step>
          <StepContainer>
            <InputContainer>
              <Label>Bio</Label>
              <Input
                autoFocus
                placeholder="ex: Problemas respiratórios..."
                placeholderTextColor="#00000066"
                multiline
                selectionColor="#006bad66"
                onChangeText={setBio}
                value={bio}
                onFocus={changeBottomLineColor}
                // style={{borderBottomColor: bottomLineColor ? "#006bad" : "#00000066" }}
              />
            </InputContainer>
          </StepContainer>
        </Step>
        <Step>
          <StepContainer>
            {inputs.map((input) => (
              <InputContainerFinal key={input.key}>
                <Label>{input.label}</Label>
                <Input
                  editable={false}
                  value={input.value}
                />
              </InputContainerFinal>
            ))}
          </StepContainer>
        </Step>
      </Wizard>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const StepContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const InputContainer = styled.View`
  width: 90%;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  align-self: flex-start;
  color: #006bad;
  font-size: 14px;
`;

const Input = styled.TextInput`
  width: 100%;
  font-size: 18px;
  border-radius: 2px;
  border-bottom-width: 1px;
  border-bottom-color: #00000066;
`;

const InputMask = styled(TextInputMask)`
  width: 100%;
  font-size: 18px;
  border-radius: 2px;
  border-bottom-width: 1px;
  border-bottom-color: #00000066;
`;

const InputContainerFinal = styled(InputContainer)`
  margin-top: 10px;
`;

export default WizardScreen;
