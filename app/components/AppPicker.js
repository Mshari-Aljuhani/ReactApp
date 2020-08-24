import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Platform, Modal, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';

export default function AppPicker({ icon, numColumns, items, item, onSelectItem, PickerItemComponent = PickerItem, width, placeholder, selectedItem }) {
    const [modalVasible, setmodalVasible] = useState(false)
    return (
        <>

            <TouchableWithoutFeedback onPress={() => setmodalVasible(true)}>

                <View style={[styles.container, width = { width }]}>
                    {icon && <MaterialCommunityIcons
                        name={icon}
                        size={25}
                        color={'#7B241C'}
                        style={styles.ico} />}
                    <AppText style={{ flex: 1, color: 'tomato' }}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={28}
                        color={'#7B241C'} />
                </View>

            </TouchableWithoutFeedback>

            <Modal visible={modalVasible} animationType="slide">

                <Button title="closed" color='tomato' onPress={() => setmodalVasible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.value.toString()}
                    numColumns={numColumns}
                    renderItem={({ item }) =>
                        <PickerItemComponent
                            item={item}
                            label={item.label}
                            onPress={() => {
                                setmodalVasible(false)
                                onSelectItem(item)
                            }
                            } />
                    } />
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D4EFDF', borderRadius: 25,
        flexDirection: "row-reverse", padding: 15, marginVertical: 10,
        alignSelf: "flex-end"
    },

    TextInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        flex: 1
    },
    ico: { marginLeft: 10, paddingTop: 4 },
    text: { flex: 1, }
})
