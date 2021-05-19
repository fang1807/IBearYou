import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button, TouchableHighlight} from 'react-native';
import Header from './components/Header'

class quiz extends Component{

  constructor(props) {
    super(props)
    this.state = { };
  }

    

  render() {
    return (
          <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textHeader}>Hi Riboots!</Text>
        <Text style={styles.textContent}>Do you want to share something happens today? 
        The diary will helpfully for you goal in the future, Make your dream come true 
        and you can look back to the evolution of your self this is will support the 
        meaning of your life so let's start your dairy.</Text>
      </View>
      <View>
        <Image source={require('./assets/images/tarotCard.png')}
               style ={styles.image}/>
      </View>
      <View>
        <Button title="Let's Get Started"
                onPress={this.clickMe}
                style ={styles.button}/>
      </View>

    </SafeAreaView>
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
  textHeader: {
        color: '#E79995',
        fontSize: 36
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E79995',
        height: 41,
        width: 278,
        borderRadius: 5,
        marginTop: 14,
    }

});

export default quiz;
