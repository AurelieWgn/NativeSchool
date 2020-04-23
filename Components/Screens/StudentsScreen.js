import { SchoolContext, average } from "../../Providers/SchoolProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useContext } from "react";

const Student = ({ data, navigation }) => {
  console.log("data student", data);
  //   console.log("navigation", navigation);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Absence", { student: data })}
    >
      <View styles={styles.studentElem}>
        <Image
          source={{
            uri: "http://lorempixel.com/100/100/cats/" + data.id,
          }}
          style={{ width: 100, height: 100, marginRight: 10 }}
        />
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text>{data.name}</Text>
          <Text>Nombre d'abscence(s) : {data.absence} </Text>
          <Text>Nombre de cours: {data.lessons.length}</Text>
          <Text>Moyen : {average(data.notes)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const StudentsScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(SchoolContext);
  const { students } = state;
  return (
    <View style={{ width: "90%", margin: "auto" }}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={students}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Student data={item} navigation={navigation} />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
    color: "white",
    borderRadius: 5,
    padding: 5,
    margin: 10,
  },

  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  studentElem: {
    backgroundColor: "Pink",
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
});
