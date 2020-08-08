import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert,SafeAreaView, Platform, Dimensions, } from 'react-native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
    return (
      <WelcomeScreen />

          ); 
}
 


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#B8C4C2',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:Platform.OS === "android" ? StatusBar.currentHight:0 }
    }
  )




  //*<View style={styles.container}>
      //  <Text>hello world</Text>
       // <StatusBar style="auto" />
       // <Image source={{width:200, height:300, uri:"https://picsum.photos/200/300?grayscale"}} />
        
        //<Button title="اضغط هنا" onPress={() => 
         // Alert.alert("الزر انضغط","my massage", [
         //    {text: "نعم", onPress:()=> console.log("yes")},
         //    {text: "لا", onPress:() => console.log("No")}, ])}/> 
         // </View>
         // )}