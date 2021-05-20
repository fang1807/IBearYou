import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button, TouchableHighlight} from 'react-native';
import SwitchSelector from "@jkdrangel/react-native-switch-selector";
import darkBg from './components/darkBg'

const titleOptions = [
  { label: "Quiz", value: "quiz" },
  { label: "History", value: "history" },
];

class quiz extends Component{

  constructor(props) {
    super(props)
    this.state = { 
      title:'',
    };
  }
  setTitle(title){
    this.setState({title: title});
  }
  render() {
    return (
      <View padder>
          <SwitchSelector
          textColor='#565656'
          selectedColor='#FFFFFF'
          buttonColor='#FE8150'
          fontSize= {16}
          backgroundColor='#FFE0D4'
          options={titleOptions}
          initial={0}
          onPress={value => this.setTitle({title: value})}
          />
      </View>
          <View style={styles.container}>
          
      <View style= {styles.textHeaderStyle}>
        <Text style={styles.textHeader}>Hi Riboots!</Text>
       </View> 
       <View>
        <Text style={styles.textContent}>Do you want to share something happens today? 
        The diary will helpfully for you goal in the future, Make your dream come true 
        and you can look back to the evolution of your self this is will support the 
        meaning of your life so let's start your dairy.</Text>
      </View>
      <View>
        <Image source={require('./assets/images/Card.png')}
               style ={styles.image}/>
      </View>
      
      <View style = {styles.button}>
         <TouchableHighlight onPress={this.clickMe} >
          <View style = {styles.buttonStart}>   
            <Text style = {styles.textStart}>Let's Get Started</Text>   
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
       marginTop: -20,
       marginRight: 130,
       
  },

  textHeader: {
        color: '#E79995',
        fontSize: 36,
        marginTop: 50,
        

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
        marginTop: 58,
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
        borderRadius: 5,
        marginTop: -10,
        
        
    },

    textStart: {
      color: '#FFFFFF',
      fontSize: 20,
    }

});

export default quiz;
