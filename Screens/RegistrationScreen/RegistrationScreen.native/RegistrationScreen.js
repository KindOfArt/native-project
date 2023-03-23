import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const bgImage = require("../../../assets/BgImage/BGimage.jpg");

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.formThunk}>
          <View style={styles.photoThunc}>
            <Image source={{ uri: "#" }} style={styles.photo} />
          </View>
          <Text style={styles.title}>Регистрация</Text>
          <View style={styles.form}>
            <View style={styles.listInputFields}>
              <TextInput style={styles.inputField} placeholder="Логин" />
              <TextInput
                style={styles.inputField}
                placeholder="Адресс электронной почты"
              />
              <TextInput style={styles.inputField} placeholder="Пароль" />
            </View>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <Text style={styles.check}>Уже есть аккаунт? Войти</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.16,

    marginBottom: 33,
  },
  formThunk: {
    position: "relative",
    justifyContent: "center",

    backgroundColor: "#ffffff",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  photoThunc: {
    position: "relative",
    top: -60,

    alignSelf: "center",

    width: 120,
    height: 120,

    backgroundColor: "#f6f6f6",

    borderRadius: 16,
  },
  photo: {},
  form: {},
  listInputFields: {
    rowGap: 16,
    marginBottom: 43,
  },
  inputField: {
    height: 50,

    marginHorizontal: 16,

    paddingLeft: 16,

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderRadius: 8,

    backgroundColor: "#f6f6f6",
  },
  btn: {
    marginHorizontal: 16,
    backgroundColor: "#ff6c00",
    borderRadius: 100,
    alignItems: "center",

    marginBottom: 16,
  },
  btnText: {
    paddingVertical: 16,
    fontSize: 16,
    lineHeight: 19,
  },
  check: {
    textAlign: "center",

    marginBottom: 45,
  },
});
