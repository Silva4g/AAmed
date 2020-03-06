import { StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
    loginPrincipal: {
      height: 550,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
     image:{
      flex: 1,
      width: Dimensions.get('window').width,
      height:450,
      position:'relative'
    },
  
    formulario:{
      width:300,
      height: 200,
      //backgroundColor: 'yellow',
      marginBottom:100,
      position:'absolute'
    },
  
    textoLogin:{
      //fontFamily:'helvetica',
      color:'#dbfeff',
      fontSize:60,
      textAlign:'center',
    },
  
    inputEmail:{
      width:200,
      height:60,
      marginTop:100,
    },
  
    inputSenha:{
      width:200,
      height:60,
      marginTop:40,
    }
});

export default styles;
    