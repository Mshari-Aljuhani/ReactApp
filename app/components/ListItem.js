import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
export default function ListItem({title, subTitle, image, onPress, Right}) {
    return (
        <Swipeable renderRightActions={Right} >
        <TouchableHighlight underlayColor={'#FFF0DE'} onPress={onPress} >
        <View style={styles.container} >
            <Image style={styles.img} source={image} />
            <View>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.subT}>{subTitle}</Text>
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection:"row", padding: 20, },
    img : {width: 60, height: 60,},
    title: {color:"dodgerblue", fontSize: 18 , fontWeight:"200"},
    subT: { }
})
