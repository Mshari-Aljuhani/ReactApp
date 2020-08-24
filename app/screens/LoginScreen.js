import React from "react";
import { StyleSheet, Image, } from "react-native";
import Screen from "../components/Screen";
import * as Yup from 'yup';
import { AppForm, AppFormField, SubmitButton } from '../components/Forms'

export default function LoginScreen() {
  const validationSchema =
    Yup.object().shape({
      email: Yup.string().required().email().label("Email"),
      password: Yup.string().required().min(4).label("Password")
    })
  return (
    <Screen>

      <Image style={styles.Logo} source={require("../../assets/logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          icon="baby-face"
          name="email"
          placeholder=" Enter your Email "
          autoCorrect={false}
          autoCapitalize="none" />
        <AppFormField
          icon="lock"
          name="password"
          placeholder=" Enter your password "
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true} />
        <SubmitButton title="Login" />
      </AppForm>

    </Screen>
  );
}

const styles = StyleSheet.create({
  Logo: {
    width: 170, height: 170, alignSelf: "center",
    marginTop: '15%', marginBottom: '9%'
  },

});
