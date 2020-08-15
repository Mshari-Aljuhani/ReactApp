import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'

const message = [
    {
        id: 1,
        title: 'T1', 
        description : 'D1',
        image: require('C:/Users/Mshari/Desktop/ReactNative project/AwesomeProject2/AwesomeProject2/assets/logo.png')
    },
    {
        id: 2,
        title: 'T2', 
        description : 'D2',
        image: require('C:/Users/Mshari/Desktop/ReactNative project/AwesomeProject2/AwesomeProject2/assets/logo.png')
    }
]

export default function MessagesScreen() {
    return (
<Screen>
        <FlatList
            data={message}
            keyExtractor={message => message.id.toString()}
            renderItem = {({item}) => 
            <ListItem
            title={item.title}
            subTitle={item.description} 
            image={item.image}/> } />
    </Screen>
    )
}

const styles = StyleSheet.create({})
