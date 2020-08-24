import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Cards from "./app/components/Cards";
import Screen from "./app/components/Screen";
import ListiningDetailsScreen from "./app/screens/ListiningDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import ListScreen from "./app/screens/ListScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import { AppPickerForm } from "./app/components/Forms";

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({});

//<ListItem title="My title" subTitle="MySub"  />
//<ListItem title="My title" subTitle="MySub"  />

/*
  /<View style={styles.container}>
      <Text>hello world</Text>
        <StatusBar style="auto" />
        <Image source={{width:200, height:300, uri:"https://picsum.photos/200/300?grayscale"}} />

        <Button title="اضغط هنا" onPress={() =>
          Alert.alert("الزر انضغط","my massage", [
             {text: "نعم", onPress:()=> console.log("yes")},
             {text: "لا", onPress:() => console.log("No")}, ])}/>
          </View>
          )}


         <View style={styles.container}>
         <Cards title="العنوان الاول" subTitle="العنوان الفرعي " image= {require("./assets/t30.jpg")}/>
         </View>  */
