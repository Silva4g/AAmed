import { StyleSheet, Dimensions } from 'react-native';

const Screen = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  };
  
const styles = StyleSheet.create({

    container: {
        flex: 1
      },
      mapContainer: {
        width: Screen.width,
        height: Dimensions.get("window").height
      },
      mapDrawerOverlay: {
        position: "absolute",
        left: 0,
        top: 0,
        opacity: 0.0,
        height: Dimensions.get("window").height,
        width: 10
      },
      avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#E02041"
      },
      callout: {
        width: 200
      },
      name: {
        fontWeight: "bold",
        fontSize: 16
      },
      desc: {
        color: "#666",
        marginTop: 5
      },
      data: {
        marginTop: 5
      },
});

export default styles;
