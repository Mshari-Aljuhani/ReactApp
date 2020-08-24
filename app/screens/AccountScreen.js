import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Screen from '../components/Screen';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';
import Separator from '../components/Separator';
import Icon from '../components/Icon';



export default function accountScreen() {

const userLists = [
    {
        icon :  <Icon name="format-list-bulleted" backgroundColor='#E74C3C'/>,
        bar1 : "My Lists",
    },
    {
        bar1 : 'My Account',
        icon : <Icon name="email" backgroundColor='#7FB3D5' />
    }
]


    return (

        
        <Screen>

        <View style={styles.Profile1}>
        <Image style={styles.logo} source={ require('../../assets/logo.png')}/> 
        <Text style={styles.main} >Mshari Al-juhani {"\n"} <Text style={styles.Sub}>information about me</Text> </Text>
        </View>
        
        <View style={styles.Profile2} >
        <FlatList            
        data={userLists}
        keyExtractor={(userLists) => userLists.bar1.toString()}
        renderItem = {({item}) => 
            <ListItem  title={item.bar1} ImageComponent={item.icon} />
                     }
           ItemSeparatorComponent={Separator}               
        /> 
        
        </View> 
        
        
        <View style={styles.Profile1}>
        <Icon name="logout" backgroundColor="#117864" />
        <Text style={{color:'red', fontSize:23, fontWeight:'bold'}}> Logout </Text>
       
        </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    logo: { width: 80 , height: 80 , marginLeft:20 },
    Profile1: {backgroundColor:'#FFF', width:'98%', padding:15, marginVertical:40, borderRadius:15, flexDirection:'row-reverse', justifyContent:"flex-start", alignItems:"center" },
    Profile2 : {backgroundColor:'#FFF',},
    Sub : {fontSize:15, color:'#000'},
    main : {fontSize: 23 ,color:'tomato',fontWeight:"bold",  }


})
