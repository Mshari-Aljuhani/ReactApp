import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {

    return (
      <View style={styles.container}>
        <Text>hello world</Text>
        <StatusBar style="auto" />
        <Image source={{width:200, height:300, uri:"https://picsum.photos/200/300?grayscale"}} />
      <Button title="اضغط هنا" onPress={() => 
       Alert.alert("الزر انضغط","my massage", [
          {text: "نعم", onPress:()=> console.log("yes")},
          {text: "لا", onPress:() => console.log("No")},
        ])}/>
      
      </View>
    );
  }
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#B8C4C2',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });
