import { SchoolContext } from "../../Providers/SchoolProvider";
import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

export const AbsenceScreen = ({ navigation, route }) => {
  const [state, dispatch] = useContext(SchoolContext);
  const { student } = route.params;
  console.log("student", student);

  const studentState = state.students.find((s) => s.id === student.id);
  //   console.log("student", student);

  return (
    <View>
      <Text> Absence : {studentState.absence} </Text>
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            dispatch({ type: "INCREMENTE_ATTENDANCE", id: student.id })
          }
        >
          <Text style={styles.buttonText}>Ajouter une absence</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            dispatch({ type: "DECREMENT_ATTENDANCE", id: student.id })
          }
        >
          <Text style={styles.buttonText}>Retirer une absence</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Students")}
        >
          <Text style={styles.buttonText}>Retour à la liste</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#222",
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
