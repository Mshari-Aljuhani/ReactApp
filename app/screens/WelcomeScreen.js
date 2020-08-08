import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native'

export default function WelcomeScreen() {
    return (
    <ImageBackground style={styles.background} source={require("C:/Users/Mshari/Desktop/ReactNative project/AwesomeProject2/AwesomeProject2/assets/stars.jpg")} >
    
    <View style={styles.logoCon}>
    <Image style={styles.logo} source={require("C:/Users/Mshari/Desktop/ReactNative project/AwesomeProject2/AwesomeProject2/assets/logo.png")}/> 
    <Text style={styles.text}>HelloWorld</Text>
    </View>
    <View style={styles.LoginButton}></View>
    <View style={styles.RegButton}></View>

    </ImageBackground>
    )
}

const styles = StyleSheet.create({
background : {flex:1, justifyContent: "flex-end", alignItems:"center" },
LoginButton: {width: '100%', height : '7%', backgroundColor: 'gold', },
RegButton: {width: '100%', height : '7%', backgroundColor: 'tomato', },
logoCon: {position:'absolute', top:150, alignItems:"center" },
logo: {width:300 , height: 300},
text: {fontSize: 30, borderLeftColor:"dodgerblue" }


})
