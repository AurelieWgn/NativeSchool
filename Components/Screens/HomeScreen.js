import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Students")}
      >
        <Text style={styles.buttonText}>Students</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    backgroundColor: "#222",
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },

  buttonContainerStudent: {
    backgroundColor: "#222",
    borderRadius: 5,
    padding: 5,
    margin: 10,
  },

  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
