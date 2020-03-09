import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({

  /* image:{
    flex: 1,
    width: Dimensions.get('window').width,
    height:450,
    position:'relative'
  }*/

  textoLogin: {
    //fontFamily:'helvetica',
    color: '#dbfeff',
    fontSize: 40,
    alignSelf: 'center',
    marginTop: 15
  },

  div: {
    paddingHorizontal: 30
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

  botaoEntrar: {
    backgroundColor: '#ffffff',
    marginTop: 20,
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



  iconUser: {
    color: 'black',
    fontSize: 30,
    position: 'absolute',
    top: 15,
    left: 7,
    zIndex: 5,
  },

  iconLock: {
    color: 'black',
    fontSize: 30,
    position: 'absolute',
    top: 15,
    left: 7,
    zIndex: 5
  },

  iconEye: {
    color: 'black',
    fontSize: 30,
    position: 'absolute',
    top: 15,
    right: 10,
    zIndex: 5
  },

});

export default styles;
