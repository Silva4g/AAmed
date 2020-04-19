import "react-native-gesture-handler";
import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, ImageBackground, Image} from "react-native";
import { CommonActions } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont()
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles.js";
import CustomHeader from "../../components/CustomHeader.js";

import helpHospital from '../../assets/hospital.png';
import { ScrollView } from "react-native-gesture-handler";

export default function Help({ navigation }) {
  return (
    <>
      <CustomHeader>
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.goBack())}
          style={{ position: "absolute", left: 12 }}
        >
          <Ionicons name="md-arrow-back" size={30} color="#fff" />
        </TouchableOpacity>

        <Text style={{ alignSelf: "center", color: "#fff", fontSize: 16 }}>
          AJUDA
        </Text>
      </CustomHeader>
      
        <View style={styles.containerContact}>
          <Text style={styles.number}>Entre em contato 0800-091-002</Text>
          <Text style={styles.optionsContact}>Dúvidas, Incidentes, Manutenções</Text>
  
          <View style={styles.viewInput}>
            <Icon style={styles.iconSearch} name="search" />
            <TextInput style={styles.inputSearch}
              placeholder="Posso te ajudar?"
            />     
            <Text style={styles.textSearch}>BUSCAR</Text>
          </View>
        </View>

        <View>
          <Image  source={helpHospital} style={{ width: '100%',height: 150 }}  />
           <View style={styles.viewGreen}>
             <TouchableOpacity style={styles.buttonSuporte}>
               <Text style={styles.textSuporte}>SUPORTE WEB</Text>
             </TouchableOpacity>
           </View>
        </View>

        <ScrollView>
          <View style={styles.containerOptions}>
            <TouchableOpacity style={styles.buttonOpcoes}>
                  <Text style={styles.textOptions}>SOLICITAÇÃO DE ATENDIMENTO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOptions}>
                  <Text style={styles.textOptions}>LOCALIZAÇÃO ERRADA NO MAPA</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.buttonOptions}>
                  <Text style={styles.textOptions}>ALTERAR MINHAS INFORMAÇÕES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOptions}>
                  <Text style={styles.textOptions}>DADOS OFICIAIS DO APLICATIVO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOptions}>
                  <Text style={styles.textOptions}>ENTRE EM CONTATO CONOSCO</Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.buttonOptions}>
                  <Text style={styles.textOptions}>TERMOS E POLÍTICA DE PRIVACIDADE</Text>
            </TouchableOpacity>    
          </View>
        </ScrollView>   
    </>
  );
}
