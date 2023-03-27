import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import React from "react";

import AddPhoto from "../../../assets/add.svg";

const RegistrationScreen = () => {
  return (
    <View style={styles.formThunk}>
      <View style={styles.photoThunc}>
        <Image source={{ uri: "#" }} style={styles.photo} />
        <TouchableOpacity style={styles.addPhotoBtn}>
          <AddPhoto width={25} height={25} />
        </TouchableOpacity>
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
      <TouchableOpacity style={styles.registrationBtn}>
        <Text style={styles.registrationBtnText}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <View style={styles.checkBtnThunc}>
        <Text style={styles.checkBtnDescription}>Уже есть аккаунт?</Text>
        <TouchableOpacity>
          <Text style={styles.checkBtn}>Войти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  title: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.16,

    marginBottom: 33,
  },

  photoThunc: {
    position: "relative",
    top: -60,

    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignSelf: "center",

    width: 120,
    height: 120,

    backgroundColor: "#f6f6f6",

    borderRadius: 16,

    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  addPhotoBtn: {
    position: "absolute",
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,

    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  photo: {},
  formThunk: {
    position: "relative",
    justifyContent: "center",

    backgroundColor: "#ffffff",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
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

    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  registrationBtn: {
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 16,
  },
  registrationBtnText: {
    textAlign: "center",
    paddingVertical: 16,
    marginHorizontal: 16,
    borderRadius: 25,
    backgroundColor: "#ff6c00",

    overflow: "hidden",
  },
  checkBtnThunc: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 5,

    marginBottom: 80,
  },
  checkBtnDescription: {},
  checkBtn: {
    color: "#1B4371",
  },
});
