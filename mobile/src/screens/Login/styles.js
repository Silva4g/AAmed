import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({

  
  containerBlue:{
    flex: 2, 
    backgroundColor: '#3498db', 
  },

  content: {
    paddingHorizontal: 30,
  },

  textoLogin: {
    color: '#fff',
    fontSize: 50,
    alignSelf: 'center',
    marginTop: 15
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    height: 44,
    marginTop: 20,
    fontSize: 16,
    paddingHorizontal: 40,
  },

  iconUser: {
    color: 'black',
    fontSize: 30,
    position: 'absolute',
    top: 25,
    left: 7,
    zIndex: 5,
  },

  iconLock: {
    color: 'black',
    fontSize: 30,
    position: 'absolute',
    top: 25,
    left: 7,
    zIndex: 5
  },

  iconEye: {
    color: 'black',
    fontSize: 30,
    position: 'absolute',
    top: 25,
    right: 10,
    zIndex: 5
  },

  botaoEntrar: {
    backgroundColor: '#fff',
    marginTop: 30,
    width: 140,
    height: 60,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

  txtBtEntrar: {
    fontSize: 15,
    textAlign: 'center',
  },

  esqueceuSenha:{
    color:'#fff',
    textAlign:'center',
    marginTop:30,
    fontSize:15,
  },

  containerWhite:{
    flex: 1,
    display:'flex',
    backgroundColor:'#fff',
    alignItems:'center'
  },

  textCadastre:{
    color:'black',
    textAlign:'center',
    marginTop:30,
    fontSize:15,
  },

  textEntreCom:{
    color:'black',
    textAlign:'center',
    marginTop:10,
    fontSize:15,
  },

  contentIcons:{
    display:'flex',
    flexDirection:'row',
    marginTop:20,
  },

  iconGoogle: {
    color: '#ff7171',
    fontSize: 50,
  },

  iconFacebook: {
    color: '#495d9e',
    fontSize: 50,
    marginLeft:40,
  },

});

export default styles;
