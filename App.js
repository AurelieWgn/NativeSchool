import React, { useContext } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./Components/Screens/HomeScreen";
import { StudentsScreen } from "./Components/Screens/StudentsScreen";
import { AbsenceScreen } from "./Components/Screens/AbsenceScreen";
import { SchoolProvider } from "./Providers/SchoolProvider";

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Absence" component={AbsenceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <SchoolProvider>
      <Nav />
    </SchoolProvider>
  );
}

const styles = StyleSheet.create({});
