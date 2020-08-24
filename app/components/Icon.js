import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons, } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function ico({
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor = "#fff",
    ...otherprops

}) {
    return (
        <View style={{
            width: size,
            height: size,
            backgroundColor,
            borderRadius: size / 2,
            justifyContent: 'center',
            alignItems: "center"
        }}>
            <MaterialCommunityIcons backgroundColor={backgroundColor} name={name} color={iconColor} size={size * 0.5} {...otherprops} />



        </View>
    )
}

const styles = StyleSheet.create({})
