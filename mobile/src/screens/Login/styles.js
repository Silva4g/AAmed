import { StyleSheet } from 'react-native';
//import { Dimensions } from 'react-native';

const styles = StyleSheet.create({

  
  containerBlue:{
    flex: 2, 
    backgroundColor: '#52c8fa', 
  },

  content: {
    paddingHorizontal: 30,
  },

  textoLogin: {
    color: '#fff',
    fontSize: 45,
    alignSelf: 'center',
    marginTop: 50
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
    color:'#000'
  },

  iconUser: {
    color: '#333333',
    fontSize: 25,
    position: 'absolute',
    top: 25,
    left: 7,
    zIndex: 5,
  },

  iconLock: {
    color: '#333333',
    fontSize: 25,
    position: 'absolute',
    top: 25,
    left: 7,
    zIndex: 5
  },

  iconEye: {
    color: '#333333',
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
    fontWeight:'700',
    color:'#595959',
  },

  esqueceuSenha:{
    color:'#fff',
    textAlign:'center',
    padding: 15,
    fontSize:15,
    textDecorationLine:'underline',
  },

  containerWhite:{
    flex: 1,
    display:'flex',
    backgroundColor:'#fff',
    alignItems:'center'
  },

  textCadastre:{
    color: '#939393',
    textAlign:'center',
    marginTop:30,
    fontSize:15,
  },

  textEntreCom:{
    color: '#939393',
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
    fontSize: 42
    ,
  },

  iconFacebook: {
    color: '#495d9e',
    fontSize: 42,
    marginLeft:40,
  },

});

export default styles;
