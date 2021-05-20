/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'


class Home  extends Component{

  constructor(props) {
    super(props)
    this.state = {  };
  }

    

  render() {
     return (
        <View style={styles.container}>
           
       <Text>rr</Text>
       
        </View>      
    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 32
    },

    text: {
        color: '#000000',
        fontSize: 18
        
    }


});

export default Home ;

