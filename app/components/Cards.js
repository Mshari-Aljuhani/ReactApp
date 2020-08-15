import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import AppText from './AppText'

export default function Cards({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.img} source={image}/>
            <AppText>{title}</AppText>
            <Text style={styles.subT}>{subTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
card :{
    backgroundColor:'#fff', 
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",},

img: {width:"100%" , height: 200},
subT:{fontSize:20, color: '#000'}


})
