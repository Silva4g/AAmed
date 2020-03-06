import { StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({

    loginPrincipal: {
      height: 380,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#52c8fa'
    },
  
    /* image:{
      flex: 1,
      width: Dimensions.get('window').width,
      height:450,
      position:'relative'
    }*/
  
    formulario:{
      width:300,
      height: 200,
      //backgroundColor: 'yellow',
      bottom:180,
      position:'absolute'
    },
  
    textoLogin:{
      //fontFamily:'helvetica',
      color:'#dbfeff',
      fontSize:60,
      textAlign:'center',
      marginTop:25,
    },
  
    inputEmail:{
      flex:1,
      width:300,
      height:50,
      marginTop:20,
      textAlign:'center',
      fontSize: 15,
    },
  
    inputPassword:{
      flex:1,
      width:300,
      height:50,
      marginTop:30,
      textAlign:'center',
      fontSize: 15,
    },

    botaoEntrar:{
      backgroundColor:'#ffffff',
      marginTop:20,
      width:140,
      height:60,
      alignItems:'center',
      alignSelf: 'center', 
      justifyContent: 'center',
      borderRadius:7,
    },

    txtBtEntrar:{
      fontSize: 15,
      textAlign:'center',
    },

    containerEmail:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    containerPassword:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    iconUser:{
      color:'black',
      fontSize:30,
      position: 'absolute',
      paddingTop:20,
      paddingLeft: 15,
    },

    iconLock:{
      color:'black',
      fontSize:30,
      position: 'absolute',
      paddingTop:30,
      paddingLeft: 15,
    },

    iconEye:{
      color:'black',
      fontSize:30,
      position: 'absolute',
      paddingTop:30,
      paddingLeft: 250,
    },

});

export default styles;
    