import React from 'react'
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AppTextInput({ icon, width = '100%', ...otherProps }) {
    return (


        <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={'#7B241C'}
                style={styles.ico} />}
            <TextInput style={styles.TextInput} {...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D4EFDF', borderRadius: 25,
        flexDirection: "row-reverse", padding: 15, marginVertical: 10,
        alignSelf: 'flex-end',
    },

    TextInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        flex: 1
    },
    ico: { marginLeft: 10, paddingTop: 4 }
})
