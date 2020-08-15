import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Separator() {
    return (
        <View style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    separator: {width:"100%", height: 1, backgroundColor: "#000" }
})
