import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView,Button, TouchableHighlight } from 'react-native';


//export default class welcome extends component{}

//render

const welcome = () => {
    return (
  
    <SafeAreaView style={[styles.container, containerStyle]}>
   
    <TouchableHighlight onPress={this.LoginCheck}>
        <View style = {styles.buttonLogin}>   
            <Text style = {styles.textLogin}>Login</Text>   
        </View>
    </TouchableHighlight>
  
  <TouchableHighlight onPress={this.LoginCheck}>
   <View style = {styles.buttonRegister}>   
            <Text style = {styles.textRegister}>Register</Text>   
        </View>
    </TouchableHighlight>


    </SafeAreaView>        
       
    );   
    
}


const containerStyle = {
        backgroundColor: '#E79995',
        width: '100%',
        height: '100%'
            
}

const styles = StyleSheet.create({
    
   container: {   
        alignItems: 'center',
        justifyContent: 'center'    
   },
 

    buttonLogin: {
      
        
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },

      buttonRegister: {
        
        alignItems: 'center',
        justifyContent: 'center',
    
    },

    textLogin: {
        color: '#000000',
        fontSize: 20,
    },

    textRegister: {
        color: '#FFFFFF',
        fontSize: 20,
    }



});

export default welcome;






