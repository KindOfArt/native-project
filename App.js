import React from "react";

import { StyleSheet, View } from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen.native/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});