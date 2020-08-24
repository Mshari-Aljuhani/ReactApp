import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AppButton({ title, style, onPress }) {
    return (
        <View style={styles.container}  >
            <Text style={[styles.title, style]} onPress={onPress} > {title} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        backgroundColor: 'tomato',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25

    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: '#fff'
    }

})
