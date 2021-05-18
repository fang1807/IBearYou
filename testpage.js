import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';

const test = () => {
    return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.text}> I Bear You </Text>
      <Image source={require('./assets/images/teddy_bear.png')}
             style={styles.image}/>
             </View>
          
    </SafeAreaView>
  );
} 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color: 'pink',
    fontSize: 40
  },
  image:{

    width: undefined ,
    height: 150,
    borderRadius: 100/2,
    resizeMode: "center"
    
  }
});
export default test;


