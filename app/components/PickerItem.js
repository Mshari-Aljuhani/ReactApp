import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AppText from './AppText'


export default function PickerItem({ item, onPress, }) {
    return (

        <TouchableOpacity style={styles.Button} onPress={onPress}>
            <AppText style={styles.textPicker} > {item.label} </AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button: { flex: 1, alignItems: 'center', },
    textPicker: { paddingVertical: '5%', paddingHorizontal: 30, }

})
