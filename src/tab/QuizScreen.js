import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView,
        Button, TouchableHighlight,Alert,Separator
        ,TextInput,TouchableOpacity, ScrollView } 
        from 'react-native';
import {CustomerHeader} from '../App';

 export default class QuizScreen extends Component{
    render() {
 return (
    
    <SafeAreaView style={{ flex: 1 }}>
    <CustomerHeader title='Quiz' isHome={true} navigation={navigation} /> 
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text >Let'get Start</Text>
      <TouchableOpacity style={{marginTop: 20}}
      onPress={() => navigation.navigate('QuizDetial')} >
      <Text> Go to hell</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
    
}

}
