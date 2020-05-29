import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  historyList: {
    marginTop: 16,
  },
  viewHistory: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
    elevation: 2,
  },
  containerInfo: {
    padding: 10,
  },
  historyProp: {
    fontWeight: "bold",
    color: "#004b8b",
    fontSize: 15,
  },
  infoHistory: {
    color: "#00000086",
    fontSize: 15,
    marginBottom: 5,
  },
  hasNoHistoryView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#f4f4f4",
    // paddingHorizontal: 10
  },
  hasNoHistoryText: {
    fontSize: 16,
    color: "#00000086",
    fontWeight: "bold",
  },
  img: {
    width: 145,
    opacity: 0.5,
  },
});

export default styles;
