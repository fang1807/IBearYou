/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import Header from './components/Header'

const home = () => {
    return (
        <View style={styles.container}>
            <Header/>
       
        </View>        
    ) ;  
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 32
    },
    text: {
        color: '#000000',
        fontSize: 18
        
    }
});

export default home;


import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
 

  render() {
    return (
      <View>
        <Text> Home </Text>
      </View>
    );
  }
}

export default Home;


