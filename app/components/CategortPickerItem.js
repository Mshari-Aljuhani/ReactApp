import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from './Icon'
import AppText from './AppText'
export default function CategortPickerItem({ item, onPress }) {
    return (


        <TouchableOpacity style={styles.Button} onPress={onPress}>

            <Icon name={item.name} backgroundColor={item.backgroundColor} size={80} />
            <AppText style={styles.textPicker} > {item.label} </AppText>

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    Button: { flex: 1, alignItems: 'center', margin: 10 },
    textPicker: { textAlign: "center", fontSize: 19 }

})