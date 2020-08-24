import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import AppText from './AppText'

export default function Cards({title, subTitle, image}) {
    return (

        <View style={styles.card}>
            <Image style={styles.img} source={image}/>
            <View style={styles.text} >
                <AppText>{title}</AppText>
                <Text style={{fontSize:15}}>  {subTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card :{
        backgroundColor:'#fff', 
        borderRadius: 20,
        marginBottom: 30,
        overflow: "hidden",},

    img: {width:"100%" , height: 200,},
    text:{fontSize:18, color: '#000',marginRight:20, margin: 10},
    


})
