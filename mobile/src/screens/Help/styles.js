import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	containerContact: {
		justifyContent: 'flex-start',
		alignSelf: 'center',
		padding: 25,
	},
	number: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#1e1e24'
	},
	optionsContact: {
		textAlign:'center',
		color: '#b3b5b9',
		fontSize: 18,
		height: 45,
	},
	viewInput: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	inputSearch: {
		width:'100%',
		paddingRight:70,
		height: 50,
		textAlign:"center",
		fontSize:14,

		borderStyle: 'solid',
		borderWidth:1,
		borderBottomWidth: 3,
		borderRadius: 5,
		backgroundColor: '#eff1f3',
		borderColor:'#EAEBEF',
		borderBottomColor: '#d3d3d7',
	},
	iconSearch:{
		position: 'absolute',
		top: 10,
		left: 20,
		zIndex: 5,
		color: '#006bad',
		fontSize: 30,
	},
	textSearch:{
		position: 'absolute',
		height:100,
		top: 15,
		left: 220,
		zIndex: 4,
		color: '#006bad',
		fontSize: 15,
		fontWeight:'bold'
	},
    viewGreen: {
		height:80,
		width:'100%',
		backgroundColor:'#04C07C',
	},
	buttonSuporte:{
		height:40,
		width:200,
		marginTop:18,
		alignSelf:'center',
		borderRadius: 5,
		borderWidth:2,
		borderColor:'#fff',
	},
	textSuporte:{
		fontSize:15,
		color:'#fff',
		textAlign:'center',
		padding:6,
		fontWeight:'bold',
	},
	containerOptions:{
		height: 'auto',
		backgroundColor:'#006bad',
		paddingTop:20
	},
	buttonOptions:{
		width:'100%',
		height:45,
		padding:20
	},
	textOptions:{
		fontSize:15,
		color:'#fff',
		textAlign:'center',
		fontWeight:'bold',
	}

});

export default styles;
