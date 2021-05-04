/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

const App = () => {
    return (
        <View style={styles.container}>
        <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
                style={styles.image}
        />
        <Text style={styles.text}>Hello World.</Text>
        </View>        
    )   
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'blue',
        fontSize: 30
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    }
})

export default App;
