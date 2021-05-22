import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView,
        Button, TouchableHighlight,Alert,Separator
        ,TextInput,TouchableOpacity, ScrollView } 
       from 'react-native';


   export default  class CustomerDrawerContent extends Component{
         render() {
  return(
<SafeAreaView style={{flex:1 , backgroundColor: 'pink'}}>
<ScrollView style={{marginLeft: 20}}>
      <TouchableOpacity style={{marginTop: 20}}
         onPress={() => props.navigation.navigate('MenuTab')} >
        <Text>Menu Tab</Text>
      </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 20}}
         onPress={() => props.navigation.navigate('Notifications')} >
        <Text>Notifications</Text>
      </TouchableOpacity>
</ScrollView>
</SafeAreaView>
  );
    }
    }

     