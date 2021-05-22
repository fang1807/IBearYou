import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView,
        Button, TouchableHighlight,Alert,Separator
        ,TextInput,TouchableOpacity, ScrollView } 
        from 'react-native';
import {CustomerHeader} from './App';

 export default class HomeScreen extends Component{
    render() {
        return (
    
    <SafeAreaView style={{ flex: 1 }}>
    <CustomerHeader title='Home' isHome={true} navigation={navigation} /> 
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text >keep fighting!!</Text>
      <TouchableOpacity style={{marginTop: 20}}
      onPress={() => navigation.navigate('HomeDetial')} >
      <Text> Go to detail</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
    
}

}

