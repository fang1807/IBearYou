import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
        , TouchableHighlight,TouchableOpacity, Dementions} 
        from 'react-native';
//import SwitchSelector from "react-native-switch-selector";
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';
import {CompositeNavigationProp} from '@react-navigation/native' ;

interface WelcomeProps {
  navigation: CompositeNavigationProp<
  >
}

class quiz extends Component{

  constructor(props) {
    super(props)
    this.state = { 
      title:'',
    };

  }
  render() {
    return (


<View>
 <Bg1/>

 <View style={{flexDirection: 'row' ,justifyContent: 'space-around', alignItems: 'center'}}>

      <TouchableOpacity 
        style={{marginTop:80, borderRadius: 50,
        backgroundColor: '#FE8150',
        height: 40,
        width: 167,
        alignItems: 'center',
        justifyContent: 'center',}}>
      <Text style={{color:'#FFFFFF',frontSize: 16}}>
      Quiz
      </Text>
      </TouchableOpacity>

       <TouchableOpacity style={{marginTop:80, borderRadius: 50,
        backgroundColor: '#FFE0D4',
        height: 40,
        width: 167,
        alignItems: 'center',
        justifyContent: 'center',}}>
      <Text style={{color:'#565656',frontSize: 16}}>
      History
      </Text>
      </TouchableOpacity>

      </View>

       <View style={styles.textHeaderStyle}>
      
        <Text style={styles.textHeader}>Hi Riboots !</Text>
       </View> 

       <View>
        <Text style={styles.textContent}>Do you want to share something happens today? 
        The diary will helpfully for you goal in the future, Make your dream come true 
        and you can look back to the evolution of your self this is will support the 
        meaning of your life so let's start your dairy.</Text>
      </View>

   

<View style={{flexDirection: 'row', height: 50}}>
      <View style={{flex: 1, alignItems: 'center'}}>
         <Image source={require('./assets/images/Card.png')}
      style={styles.image} />  
   </View>
   </View>
      
      
      <View style = {styles.button}>
         <TouchableHighlight onPress={() => {

         }} >
          <View style = {styles.buttonStart}>   
            <Text  style = {styles.textStart}>Let's Get Started</Text>   
          </View>
         </TouchableHighlight>
      </View>   

  
    </View>
   
    );
  }
}


const styles = StyleSheet.create({
  container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center', 
        width: '100%',
        height: '100%'
    },

  textHeaderStyle: {
    
    alignItems: 'flex-start',
    
    marginLeft: 40,
       
  },

  textHeader: {
        color: '#E79995',
        fontSize: 36,
        marginTop: 35,
        paddingBottom: 20 ,
        

    },
  textContent: {
        color: '#000000',
        fontSize: 18
    },
  image: {
        width: 206,
        height: 263,
        resizeMode: 'center'
    },

        button: {
          flex: 1,
        marginTop: 250,
        alignItems: 'center',
        justifyContent: 'center',
        
         
    },

    buttonStart: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E79995',
        height: 41,
        width: 278,
        marginTop: -10,
        
        
    },

    textStart: {
      color: '#FFFFFF',
      fontSize: 20,
    }

});

export default quiz;
