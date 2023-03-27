import React from "react";

import { ImageBackground, StyleSheet, View } from "react-native";

const bgImage = require("./assets/BgImage/BGimage.jpg");

import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen.native/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={styles.image}
        >
          <RegistrationScreen />
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
