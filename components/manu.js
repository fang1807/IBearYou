import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Menu = () => {
    return (
        <View style = {styles.header}> 
            <Text style = {styles.text}>I Bear you </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
       height: 53,
       width: 414,
       padding: 15,
       backgroundColor: '#FFFFFF'
    },

    text: {
        fontSize: 18,
        color: '#000000',
        textAlign: 'center'
    }

})

export default Menu;