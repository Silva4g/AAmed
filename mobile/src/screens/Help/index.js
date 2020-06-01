import React from "react";
import { View, ScrollView } from "react-native";

import {
  Contact,
  NumberContact,
  Legend,
  Search,
  SearchInput,
  SearchLabel,
  Img,
  WebSupport,
  WebSupportButton,
  WebSupportLabel,
  Options,
  Button,
  Label,
  MgGlass,
} from "./styles.js";
import { Header } from "../../components/Header/index.js";

export default function Help({ navigation }) {
  return (
    <>
      <Header navigation={navigation} label={"AJUDA"} />

      <Contact>
        <NumberContact>Entre em contato 0800-091-002</NumberContact>
        <Legend>Dúvidas, Incidentes, Manutenções</Legend>

        <Search>
          <MgGlass name="search" />
          <SearchInput placeholder="Posso te ajudar?" />
          <SearchLabel>BUSCAR</SearchLabel>
        </Search>
      </Contact>

      <View>
        <Img source={require("../../assets/hospital.png")} />
        <WebSupport>
          <WebSupportButton>
            <WebSupportLabel>SUPORTE WEB</WebSupportLabel>
          </WebSupportButton>
        </WebSupport>
      </View>

      <ScrollView>
        <Options>
          <Button>
            <Label>SOLICITAÇÃO DE ATENDIMENTO</Label>
          </Button>
          <Button>
            <Label>LOCALIZAÇÃO ERRADA NO MAPA</Label>
          </Button>
          <Button>
            <Label>ALTERAR MINHAS INFORMAÇÕES</Label>
          </Button>
          <Button>
            <Label>DADOS OFICIAIS DO APLICATIVO</Label>
          </Button>
          <Button>
            <Label>ENTRE EM CONTATO CONOSCO</Label>
          </Button>
          <Button>
            <Label>TERMOS E POLÍTICA DE PRIVACIDADE</Label>
          </Button>
        </Options>
      </ScrollView>
    </>
  );
}
