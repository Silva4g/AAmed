import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    containerHistory:{
        paddingLeft: 15,
        paddingRight:15,
        marginTop: 10,
        height:'auto',
    },
    viewHistory:{
        flexDirection:'row',
        height:80,
        backgroundColor:'#f7f7f7',
        borderBottomWidth:1,
        borderColor:'black',  
        borderRadius: 2,
    },
    containerInfo:{
        padding:10,
    },
    textTittle:{
        fontWeight:'bold',
        color:'black',
    },
    infoHistory:{
        color:'black',
    },
    containerDate:{
        padding:10,
        alignSelf:'center',
    },
    dateHistory:{
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
    }
});

export default styles;
