import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Cards from '../components/Cards'
import Screen from '../components/Screen'

export default function ListScreen() {

    const info = [
        
        {title: "Title 1",
        sub: "SubTitle 1",
        image:require('../../assets/t30.jpg')},

        {title: "Title 2",
        sub: "SubTitle 2",
        image: require('../../assets/t20.jpg')},

        {title: "Title 3",
        sub: "SubTitle 3",
        image: require('../../assets/t10.jpg')},
    ]

    return (
        <Screen>
            <FlatList 
            data = {info}
            keyExtractor={(info) => info.title.toString()}
            renderItem = {({item}) =>
                <Cards 
                title={item.title}
                subTitle={item.sub}
                image={item.image}  />
            }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({})
