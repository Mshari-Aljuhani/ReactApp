import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen';
import Separator from '../components/Separator';
import DeleteAction from '../components/DeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'This is my first message List ',
        description: 'This is my first message List and im so proud of it lo lo',
        image: require('../../assets/t10.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../../assets/t20.jpg')
    }

]

export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const handleDelete = (message) => {
        setMessages(messages.filter(m => m.id !== message.id))
    }

    const [refreshing, setRefreshing] = useState(false);

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message Selcted", item)}
                        Right={() =>
                            <DeleteAction onPress={() => handleDelete(item)} />}
                    />}
                ItemSeparatorComponent={Separator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../../assets/logo.png')
                        }

                    ])


                }

                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({})
