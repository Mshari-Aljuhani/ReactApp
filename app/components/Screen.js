import React, { Children } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

 function Screen({ children }) {
    return(<SafeAreaView style={styles.screen}>{children}</SafeAreaView>) 
};

const styles = StyleSheet.create({
    screen:{paddingTop:Constants.statusBarHeight, 
            flex:1, 
            backgroundColor:'#FFF9F3',
            paddingHorizontal : 10,
            
        
        }
})

export default Screen;