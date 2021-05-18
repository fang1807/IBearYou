import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView,
        Button, TouchableHighlight,Alert,Separator
        TextInput} 
        from 'react-native';


 class login extends Component{

  constructor(props) {
    super(props)
    this.state = { 
      username: '',
      password: ''
     };
  }

    
    

 render() {
    return (
          <View >
          <View style ={styles.form}></View>
          <View style={[styles.container, containerStyle]}>
   
   <View style={styles.inputs}>
   <View style={styles.inputContainer}>
   <TextInput
   style={[styles.input, styles.whiteFont]}
    placeholder=”Username”
    placeholderTextColor=”#FFF”
       onChangeText={onChangeText}
        value={text}
   />
   
   </View>
    </View>
   <View style = {styles.button}>
    <TouchableHighlight onPress={this.clickMe} underlayCoror='#FDF5F5'>
        <View style = {styles.buttonLogin}>   
            <Text style = {styles.textLogin}>Login</Text>   
        </View>
    </TouchableHighlight>
  
  <TouchableHighlight onPress={this.clickMe} underlayCoror='#FDF5F5'>
   <View style = {styles.buttonRegister}>   
            <Text style = {styles.textRegister}>Register</Text>   
        </View>
    </TouchableHighlight>
   
 </View>
    </View>   
      </View >  
    );
  }
}

const containerStyle = {

        flex:1 ,
        flexDirection: 'column' ,  
}

const formStyle = {

 flex: 1,
  flexDirection: 'column' ,        
            
}

const styles = StyleSheet.create({
    
   container: {   
       backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center', 
        width: '100%',
        height: '100%',
        
          
   },
 
    button: {
        marginTop: 5,
        alignItems: 'center',
         
    },

    buttonLogin: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E79995',
        height: 39,
        width: 327,
        borderWidth: 1,
        borderColor: '#FFFFFF', 
           
        
    },

      buttonRegister: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        height: 39,
        width: 327,
        borderRadius: 5,
        marginTop: 55,
        borderWidth: 1,
        borderColor: '#E79995'

    
    },

    textLogin: {
        color: '#FFFFFF',
        fontSize: 20,
    },

    textRegister: {
        color: '#E79995',
        fontSize: 20,
    },

    form: {
        backgroundColor: '#E79995',
       height: 410,
        width: 420,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
       
}

});

export default login;



