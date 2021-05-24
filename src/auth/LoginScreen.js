import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView,
        Button, TouchableHighlight,Alert,Separator
        ,TextInput,TouchableOpacity, ScrollView } 
        from 'react-native';

import {CustomerHeader} from '../App';

  class LoginScreen extends Component{
    render() {
return (
    
    <SafeAreaView style={{ flex: 1 }}>
      
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     <Text>Login</Text>

       <TouchableOpacity style={{marginTop: 20}}
      onPress={() => navigation.navigate('HomeApp')} >
      <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{marginTop: 20}}
      onPress={() => navigation.navigate('Register')} >
      <Text>Register</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
    
}

}

export default LoginScreen;

