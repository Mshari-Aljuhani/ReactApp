import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function ListItem({title, subTitle, image}) {
    return (
        <View style={styles.container} >
            <Image style={styles.img} source={image} />
            <View>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.subT}>{subTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection:"row", padding: 20, },
    img : {width: 60, height: 60,},
    title: {color:"dodgerblue", fontSize: 18 , fontWeight:"200"},
    subT: { }
})
