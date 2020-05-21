import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, IconEye, TouchEye } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

import {EditBox, InputBox, Label, Input }from "./styles";
import CustomHeader from '../../components/CustomHeader';

import MainButton from '../../components/MainButton';

export default function EditProfile({ navigation }) {
	
	return (
        <>
		<CustomHeader>
			<TouchableOpacity
				onPress={() => navigation.dispatch(CommonActions.goBack())}
				style={{ position: 'absolute', left: 12 }}
			>
				<Ionicons name="md-arrow-back" size={30} color="#fff" />
			</TouchableOpacity>

			<Text style={{ alignSelf: 'center', color: '#fff', fontSize: 16 }}>EDITAR PERFIL</Text>

			<Image
				source={require('../../../assets/icon.png')}
				style={{ width: 45, height: 45, position: 'absolute', right: 12 }}
			/>
		</CustomHeader>
       <EditBox>
		   <InputBox>
		   		<Label>EMAIL</Label>
				<Input
                name="password"
                placeholder="viniciuspiantoni@gmail.com"
                placeholderTextColor="#00000066"
                returnKeyType="done"
                selectionColor="#006bad66"
              />		
		   </InputBox>
		   <InputBox>
		   		<Label>BIO</Label>
				<Input
                name="password"
				placeholder="Rinite e miopia"
                placeholderTextColor="#00000066"
                returnKeyType="done"
                selectionColor="#006bad66"
              />		
		   </InputBox>
		   <InputBox>
		   		<Label>SENHA</Label>
				<Input
                name="password"
                placeholder="*********"
                placeholderTextColor="#00000066"
                returnKeyType="done"
                selectionColor="#006bad66"
              />		
		   </InputBox>
		   <MainButton>
			   <Text style={{color:"#fff", fontWeight:'bold'}}>EDITAR</Text>
		   </MainButton>
	   </EditBox>
        </>
	);
}
