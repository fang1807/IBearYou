import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView,
        Button, TouchableHighlight,Alert,Separator
        ,TextInput} 
        from 'react-native';


 class login extends Component{

  constructor(props) {
    super(props)
    this.state = { 
      Username: '',
      Password: ''
     }; 
  }

    
    

 render() {
    return (
    <View >
      <View style ={styles.form}></View>
        <View style={[styles.container, containerStyle]}>


         <View style={styles.Input}>
        
          <TextInput 
            placeholder="Username"
            style = {[styles.TextInput,TextInputStyle]}
            autoCapitalize='none'
            />

              <View style= {styles.image}>
          <Image source={require('./assets/images/People.png')}
               style ={{width: 19.61, height: 23 }}/>
 </View>

            <TextInput 
            placeholder="Password"
            secureTextEntry={true}
            style = {[styles.TextInput,TextInputStyle]}
            autoCapitalize='none'
            />

         <View style= {styles.image}>
          <Image source={require('./assets/images/Lock.png')}
               style ={{width: 19.61, height: 23 }}/>
 </View>
            </View>

            
   </View>
   
 
  
        <View style = {styles.forget}>   
            <Text style = {styles.textForget}>Forget Password ?</Text>   
   </View>
        

   <View style = {styles.button}>
    <TouchableHighlight onPress={this.clickMe} underlayCoror='#FDF5F5'>
        <View style = {styles.buttonLogin}>   
            <Text style = {styles.textLogin}>Login</Text>   
        </View>
    </TouchableHighlight>

   <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{width: 150, height: 1, backgroundColor: '#E79995',marginTop: 12}} />
    <View>
      <Text style = {styles.textOr}> or </Text>
    </View>
    <View style={{width: 150, height: 1 ,backgroundColor: '#E79995',marginTop: 12}} />    
 </View>

  <TouchableHighlight onPress={this.clickMe} underlayCoror='#FDF5F5'>
   <View style = {styles.buttonRegister}>   
            <Text style = {styles.textRegister}>Register</Text>   
        </View>
    </TouchableHighlight>
   
 </View>
    </View>   
      
    );
  }
}

const containerStyle = {

        flex: 1 ,
        flexDirection: 'column' ,  
}

const formStyle = {

 flex: 1,
  flexDirection: 'column' ,        
            
}

const TextInputStyle = {
paddingLeft: 40,
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
        marginTop: 58,
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
        marginTop: 14,
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
       height: 390,
        width: 420,
        marginBottom: -130,
        alignItems: 'center',
        justifyContent: 'center',
       
},

    textOr: {
      color: '#E79995',
      fontSize: 12,
      marginTop: 10,
    },

    textForget: {
      color:'#E79995',
      fontSize: 16,
      
    
    },

    forget: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      paddingRight: 30,
      marginTop: 335,

    },

    TextInput: {
      margin: 15,
      height: 40,
      width: 327,
      padding: 20,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      
    },

    Input: {
      marginTop: 390,
    },

    image: {
      alignItems: 'flex-start',
      marginTop: -51 ,
      paddingLeft: 14,
      
    },

   

});

export default login;



