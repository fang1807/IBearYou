import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView,
        Button, TouchableHighlight,Alert,Separator
        ,TextInput,TouchableOpacity, ScrollView } 
        from 'react-native';
import {CustomerHeader} from './App';

 export default class HomeScreenDetial extends Component{
    render() {
 return (
    
    <SafeAreaView style={{ flex: 1 }}>
    <CustomerHeader title='I Bear You' navigation={navigation} /> 
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text title='HomeDetial'>Detial</Text>
    </View>
    </SafeAreaView>
  );
    
}

}

