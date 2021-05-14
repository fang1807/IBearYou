import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView,Button, TouchableHighlight } from 'react-native';


//export default class welcome extends component{}

//render

const welcome = () => {
    return (
  
    <SafeAreaView style={[styles.container, containerStyle]}>
   
        <View style = {styles.buttonLogin}>   
            <Text>Login</Text>   
        </View>
  
   <View style = {styles.buttonRegister}>   
            <Text>Register</Text>   
        </View>



    </SafeAreaView>        
       
    );   
    
}

const containerStyle = {
        backgroundColor: '#E79995',
        width: '100%',
        height: '100%'
            
}

const styles = StyleSheet.create({
    
   //container: {   
       // alignItems: 'center',
       // justifyContent: 'center'
      
     
       
  // },
 
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






