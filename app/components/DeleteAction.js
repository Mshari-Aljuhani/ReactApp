import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function DeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>

            <View style={styles.Right}>
                <MaterialCommunityIcons 
                name="trash-can" 
                size={40} 
                color={"black"}/> 
            </View>

        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({ 
    Right : {backgroundColor: "#F26450", width:70, height:'100%', justifyContent:"center", alignItems:"center"}
 })
