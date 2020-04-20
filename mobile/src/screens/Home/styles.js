import { StyleSheet, Dimensions } from "react-native";

const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    width: Screen.width,
    height: Dimensions.get("window").height,
  },
  mapDrawerOverlay: {
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.0,
    height: Dimensions.get("window").height,
    width: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#E02041",
  },
  callout: {
    width: 200,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  desc: {
    color: "#666",
    marginTop: 5,
  },
  data: {
    marginTop: 5,
  },
  searchForm: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: "row",
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#f9f9f9",
    color: "#333",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#006bad',
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },
  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: "#006bad",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
});

export default styles;
