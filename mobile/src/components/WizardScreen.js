import React, { useState, useEffect } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';

import Wizard from './Wizard';
import Step from './Step';

function WizardScreen() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [bio, setBio] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isRitine, setIsRinite] = useState(false);
  const [isSinusite, setIsSinusite] = useState(false);
  const [isD1, setIsD1] = useState(false);
  const [isD2, setIsD2] = useState(false);
  const [isD3, setIsD3] = useState(false);
  const [isD4, setIsD4] = useState(false);

  const inputs = [
    {
      key: String(Math.random()),
      value: name,
      label: 'Nome completo',
    },
    {
      key: String(Math.random()),
      value: cpf,
      label: 'CPF',
    },
    {
      key: String(Math.random()),
      value: email,
      label: 'E-email',
    },
    {
      key: String(Math.random()),
      value: senha,
      label: 'Senha',
    },
    // {
    //   key: String(Math.random()),
    //   value: susCard,
    //   label: "Cartão do SUS",
    // },
    {
      key: String(Math.random()),
      value: bio,
      label: 'Bio',
    },
  ];

  let arr = [];
  useEffect(() => {
    isRitine ? arr.push("Rinite") : arr.filter(item => item !== "Rinite");
    isSinusite ? arr.push(" Sinusite") : arr.filter(item => item !== "Sinusite");
    isD1 ? arr.push(" D1") : arr.filter(item => item !== "D1");
    isD2 ? arr.push(" D2") : arr.filter(item => item !== "D2");
    isD3 ? arr.push(" D3") : arr.filter(item => item !== "D3");
    isD4 ? arr.push(" D4") : arr.filter(item => item !== "D4");
    // arr.forEach(item => setBio(prev=>prev+item))
    setBio(arr.toString())

    // console.log(arr)
  }, [isRitine, isSinusite, isD1, isD2, isD3, isD4]);

  const args = {
    name,
    cpf,
    email,
    senha,
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
                type={'cpf'}
                autoFocus
                placeholder="000.000.000-00"
                placeholderTextColor="#00000066"
                keyboardType="number-pad"
                selectionColor="#006bad66"
                onChangeText={e => setCpf(e)}
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
        <Step>
          <StepContainer>
            <TitleLabel>Bio</TitleLabel>
            <CheckBoxWrapper>
              <CheckBoxContainer>
                <CheckBoxC
                  tintColors={{ true: '#006bad', false: '#00000066' }}
                  value={isRitine}
                  onValueChange={() => setIsRinite(!isRitine)}
                />
                <CheckLabel>Rinite</CheckLabel>
              </CheckBoxContainer>
              <CheckBoxContainer>
                <CheckBoxC
                  tintColors={{ true: '#006bad', false: '#00000066' }}
                  value={isSinusite}
                  onValueChange={() => setIsSinusite(!isSinusite)}
                />
                <CheckLabel>Sinusite</CheckLabel>
              </CheckBoxContainer>
              <CheckBoxContainer>
                <CheckBoxC
                  tintColors={{ true: '#006bad', false: '#00000066' }}
                  value={isD1}
                  onValueChange={() => setIsD1(!isD1)}
                />
                <CheckLabel>D1</CheckLabel>
              </CheckBoxContainer>
              <CheckBoxContainer>
                <CheckBoxC
                  tintColors={{ true: '#006bad', false: '#00000066' }}
                  value={isD2}
                  onValueChange={() => setIsD2(!isD2)}
                />
                <CheckLabel>D2</CheckLabel>
              </CheckBoxContainer>
              <CheckBoxContainer>
                <CheckBoxC
                  tintColors={{ true: '#006bad', false: '#00000066' }}
                  value={isD3}
                  onValueChange={() => setIsD3(!isD3)}
                />
                <CheckLabel>D3</CheckLabel>
              </CheckBoxContainer>
              <CheckBoxContainer>
                <CheckBoxC
                  tintColors={{ true: '#006bad', false: '#00000066' }}
                  value={isD4}
                  onValueChange={() => setIsD4(!isD4)}
                />
                <CheckLabel>D4</CheckLabel>
              </CheckBoxContainer>
            </CheckBoxWrapper>
            <InputContainer>
              <Input
                autoFocus
                placeholder="Outro..."
                placeholderTextColor="#00000066"
                multiline
                selectionColor="#006bad66"
                onChangeText={setBio}
                value={bio}
              />
            </InputContainer>
          </StepContainer>
        </Step>
        <Step>
          <StepContainer>
            {inputs.map(input => (
              <InputContainerFinal key={input.key}>
                <Label>{input.label}</Label>
                <Input editable={false} value={input.value} />
              </InputContainerFinal>
            ))}
          </StepContainer>
          <PrivacyPolicy>
            Ao se cadastar você concorda com os nossos{' '}
            <Span>Termos de Uso </Span>e <Span>Política de Privacidade</Span>.
          </PrivacyPolicy>
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

const CheckBoxWrapper = styled.View`
  width: 93%;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 0;
  /* align-items: center; */
  justify-content: space-between;
`;

const CheckBoxContainer = styled.View`
  flex-direction: row;
  /* max-height: 100px; */
  /* align-items: baseline; */
  /* justify-content: flex-start; */
  width: 30%;
  background: #95a5a600;
`;

const CheckBoxC = styled(CheckBox)``;

const InputContainer = styled.View`
  width: 90%;
  align-items: center;
  background: #9b59b600;
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

const PrivacyPolicy = styled.Text`
  align-self: center;
  background-color: #f5f5f5;
  font-size: 12px;
  margin-bottom: 5px;
`;

const Span = styled.Text`
  color: #006bad;
`;

const CheckLabel = styled(Label)`
  align-self: center;
`;

const TitleLabel = styled(Label)`
  align-self: flex-start;
  margin-left: 18px;
`;

export default WizardScreen;
