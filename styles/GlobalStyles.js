import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 0,
    backgroundColor: "#f4f0f0",
    padding: 10,
  },
  renderItem: {
    padding: 30,
    textAlign: "center",
  },
  imageContainer: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
    padding: 20,
    marginBottom: 0,
    marginTop: -50,
  },
  homeText: {
    fontFamily: "Roboto",
    fontSize: 100,
    color: "#333",
    textAlign: "center",
    top: "86%",
    fontWeight: "bold",
  },
  titleText: {
    fontSize: 24,
    color: "#333",
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto",
    elevation: 3,
    backgroundColor: "#038f93",
    borderRadius: 10,
    height: "40%",
  },
  pickerButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto",
    elevation: 3,
    backgroundColor: "#038f93",
    borderRadius: 10,
    height: "20%",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  listItem: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    margin: 5,
    padding: 5,
    width: "45%",
    minHeight: 60,
    backgroundColor: "#e9e1e1",
  },
  listButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto",
    elevation: 3,
    backgroundColor: "blue",
    borderRadius: 10,
    height: "50%",
  },
  section: {
    flexDirection: "row",
  },
  menuOptions: {
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      backgroundColor: "#e9e1e1",
      width: "92%",
      marginLeft: "auto",
      marginRight: "auto",
  },
  userTitleText: {
      fontFamily: "Roboto",
      fontSize: 80,
      color: "#333",
      textAlign: "center",
      fontWeight: "bold",
      top: -60,
  },
  userUnderTitleText: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#333",
    textAlign: "center",
    fontWeight: "bold",
    top: -60,
  },
});

export default GlobalStyles;
