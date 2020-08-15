import React, { Children } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'

export default function Screen({Children}) {
    return (

       <SafeAreaView style={styles.screen}>
       {Children}
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{paddingTop :Constants.statusBarHeight}
})
