import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView,Button, TouchableHighlight } from 'react-native';
import login from './login';
import register from './register';
import home from './home';

//export default class welcome extends component{}

//render

const welcome = () => {
    return (
  
    <SafeAreaView style={styles.container, containerStyle]}>
      <TouchableHighlight onPress={this.}>
        <View style = {styles.buttonLogin}>   
            <Text>Login</Text>   
        </View>
     </TouchableHighlight>  

     <TouchableHighlight OnPress={this.}>  
        <View style = {styles.buttonRegister}>   
            <Text>Register</Text>
        </View>
    </TouchableHighlight>


    </SafeAreaView>        
       
    );   

  
    
}

const containerStyle = {
        backgroundColor: '#E79995',
        width: '100%',
        height: '100%',
            
}

const styles = StyleSheet.create({
    
   container: {   
       // alignItems: 'center',
       // justifyContent: 'center'
     
       
   },
 
    text: {
        
        color: 'black',
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    buttonLogin: {

        backgroundColor: '#FFFFFF'
    }

});

export default welcome;






