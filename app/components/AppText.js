import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'

function AppText({ children, style, ...otherProps }) {
    return (

        <Text style={[styles.text, style]} {...otherProps} >{children} </Text>
    )
}



export default AppText;
const styles = StyleSheet.create({
    text: {
        color: "tomato",
        fontWeight: "500",
        ...Platform.select({
            ios: { fontSize: 23, fontFamily: "Avenir", fontWeight: "bold" },
            android: { fontSize: 23, fontFamily: "Roboto", fontWeight: "bold" },
        })

    }

})
