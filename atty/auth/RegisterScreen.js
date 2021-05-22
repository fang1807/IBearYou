import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView,
        Button, TouchableHighlight,Alert,Separator
        ,TextInput,TouchableOpacity, ScrollView } 
        from 'react-native';


 export default class RegisterScreen extends Component{
    render() {
return (
    <SafeAreaView style={{ flex: 1 }}>
     <CustomerHeader title='Register'navigation={navigation} /> 
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
      Register
      </Text>
    
      </View>
  </SafeAreaView>
  );
    
}

}

