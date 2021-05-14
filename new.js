import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';

const new = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> I Bear You </Text>
      <Image source={require('./assets/images/teddy bear.png')}
             style={styles.image}/>
    </SafeAreaView>
  )
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
    width: 100
    height: 100
    borderradius: 100/2
  }
})
export default new;


