import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity } from 'react-native'

import AppText from 'C:/Users/Mshari/Desktop/ReactNative project/AwesomeProject2/AwesomeProject2/app/components/AppText.js';
export default function WelcomeScreen() {
    return (

        
    <ImageBackground style={styles.background} source={require("C:/Users/Mshari/Desktop/ReactNative project/AwesomeProject2/AwesomeProject2/assets/stars.jpg")} >
    
    <View style={styles.logoCon}>
    <Text style={styles.WelText}>"Ready?{"\n"}let's take your size"</Text></View>
    
    <TouchableOpacity style={styles.LoginButton}><Text style={styles.LoginText} onPress={() => console.log('login')} >تسجيل الدخول </Text></TouchableOpacity>
    <TouchableOpacity style={styles.RegButton}><Text style={styles.RegText} onPress={() => console.log('Regs')}> تسجيل </Text></TouchableOpacity>
    

    </ImageBackground>
    
    )
}

const styles = StyleSheet.create({
background : {flex:1, justifyContent: "flex-end", alignItems:"center",},
WelText : { color : "gold" , fontSize: 30,top:-40, fontFamily:"Roboto", fontWeight:"bold",textTransform: 'uppercase'  },
LoginButton: {width: '100%', height : '7.5%', backgroundColor: 'gold', alignItems:"center",  borderRadius:25,},
LoginText:  {fontSize: 30, color:"tomato",fontWeight:"bold", },
RegButton: {width: '100%', height : '7.5%', backgroundColor: 'tomato',alignItems:"center", borderRadius:25, marginVertical:10,  },
RegText: {fontSize: 30, color:"gold",fontWeight:"bold" , },
logoCon: {position:'absolute', top:150, alignItems:"center", elevation:0 }, //الاخير الظل للاندرويد بس مخيس
logo: {width:300 , height: 300, shadowColor:"grey", shadowOffset:{width:10, height:10}, shadowOpacity:1,}, //الاربع خصائض الاخيرة الظل لأبل
text: {fontSize: 30, borderLeftColor:"dodgerblue", borderWidth:0,borderColor:"gold", borderRadius:0, }


})
