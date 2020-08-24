import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import AppText from './AppText';
export default function ListItem({ title, subTitle, image, onPress, Right, ImageComponent }) {
    return (

        <Swipeable renderRightActions={Right} >
            <TouchableHighlight underlayColor={'#FFF0DE'} onPress={onPress} >

                <View style={styles.container} >
                    {ImageComponent}
                    {image && <Image style={styles.img} source={image} />}
                    <View style={styles.TextCon}>

                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subT} numberOfLines={2} >{subTitle}</AppText>}

                    </View>
                    < MaterialCommunityIcons style={styles.icon} name='chevron-right' size={30} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: { flexDirection: "row-reverse", padding: 10, alignItems: 'center', justifyContent: 'flex-start', },
    img: { width: 60, height: 60, borderRadius: 10 },
    title: { color: "dodgerblue", fontSize: 18, fontWeight: "bold" },
    TextCon: { margin: 15, flex: 1 },
    icon: { color: 'tomato' },
    subT: { color: 'black', fontSize: 15, fontWeight: 'normal' }
})
