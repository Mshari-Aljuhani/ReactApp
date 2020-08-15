import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ListItem from '../components/ListItem'


export default function ListiningDetailsScreen() {
    return (
        <View>
            <Image style={styles.img} source={ require('C:/Users/Mshari/Desktop/ReactNative project/AwesomeProject2/AwesomeProject2/assets/t30.jpg')} /> 
            <Text style={styles.title}>العنوان</Text>
            <Text style={styles.subT}>كلام كلام كلام</Text>
            <ListItem 
                image={require("C:/Users/Mshari/Desktop/ReactNative project/AwesomeProject2/AwesomeProject2/assets/logo.png")}
                title="Mshari "
                subTitle= " 5 Listing"
                />
        </View>
    )
}

const styles = StyleSheet.create({
    img: {width:'100%', height:280, },
    title: {paddingRight:10,paddingTop: 10, fontSize: 30, color: 'tomato'},
    subT: {paddingRight:20, fontSize:20, }
})
