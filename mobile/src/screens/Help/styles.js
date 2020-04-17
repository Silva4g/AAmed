import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	containerContact: {
		flex: 1,
		justifyContent: 'flex-start',
		alignSelf: 'center',
		padding: 25
	},
	number: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#1e1e24'
	},
	optionsContact: {
		color: '#b3b5b9',
		fontSize: 18,
		height: 100
	},
	viewInput: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputSearch: {
        flex:1,
        height: 50,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderRadius: 5,
		backgroundColor: '#eff1f3',
		borderBottomColor: '#d3d3d7',
		elevation: 2
	}
});

export default styles;
