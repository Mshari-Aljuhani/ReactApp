import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'

function AppText({children}) {
    return (
        
            <Text style={styles.text}>{children}</Text>
    )
}


  
export default AppText;
const styles = StyleSheet.create({
text : {
    color: "tomato",
    fontWeight: "500",
    ...Platform.select({
        ios:{fontSize: 28 ,fontFamily:"Avenir", fontWeight:"bold"}, 
        android : {fontSize: 28 ,fontFamily:"Roboto",fontWeight:"bold"},  
          })
    
    }

})
