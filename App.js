import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Cards from './app/components/Cards';

export default function App() {
    return (
      <View style={styles.container}>
      <Cards title="العنوان الاول" subTitle="العنوان الفرعي " image= {require("./assets/t30.jpg")}/>
      </View> 
      
      ); 
}
 


  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#f8f4ff",
      padding: 20,
      paddingTop:100 }

    }
  )



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
          */        