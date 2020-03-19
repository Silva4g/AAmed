import { StyleSheet, Dimensions, StatusBar } from "react-native";
//import { Dimensions } from 'react-native';@import url('https://fonts.googleapis.com/css?family=Titan+One&display=swap')

const styles = StyleSheet.create({
  containerKeyboard: {
    padding: StatusBar.currentHeight,
    flex: 1
  },

  wrapperContent: {
    justifyContent: "space-between",
    flex: 1
  },

  containerInput: {
    justifyContent: "center",
    width: "100%"
  },

  input: {
    width: "100%",
    height: 44,
    marginTop: 40,
    fontSize: 16,
    paddingHorizontal: 40,
    color: "#000",
    borderBottomWidth: 2,
    borderBottomColor: "#24292e"
  },

  icon: {
    color: "#333333",
    fontSize: 25,
    position: "absolute",
    top: 45,
    left: 7,
    zIndex: 5
  },

  iconEye: {
    color: "#333333",
    fontSize: 25,
    position: "absolute",
    top: 45,
    right: 10,
    zIndex: 5
  },

  botaoEntrar: {
    backgroundColor: "#52c8fa",
    marginTop: 15,
    width: "100%",
    height: 60,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 2
  },

  txtBtEntrar: {
    textAlign: "center",
    color: "#595959",
    fontSize: 16,
    fontWeight: "bold"
  },

  viewTextSenha: {
    width: 200,
    alignSelf: "center"
  },

  textEsqueceuSenha: {
    color: "#000",
    textAlign: "center",
    padding: 15,
    fontSize: 15,
    textDecorationLine: "underline"
  },

  viewTextCadastro: {
    alignItems: "center",
    marginBottom: 30
  },

  textLogin: {
    color: "#000",
    textAlign: "center",
    fontSize: 15
  },

  textCadastre: {
    color: "#000",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  }
});

export default styles;
