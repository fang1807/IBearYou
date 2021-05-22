import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView,
        Button, TouchableHighlight,Alert,Separator
        ,TextInput,TouchableOpacity, ScrollView } 
        from 'react-native';
import {IMAGE} from './constants/Image';        

       export default class CustomerHeader extends Component{
            render() {
                return (
    <View style={{flexDirection: 'row', height: 50}}>
      <View style={{flex: 1 , justifyContent: 'center'}} >
        {
       isHome? 
       <TouchableOpacity onPress ={() => navigation.openDrawer()}>
          <Image style={{width: 30, height: 30, marginLeft: 19.84}}
          source = {IMAGE.ICON_MENU}
          resizeMode = "contain"
      />
      </TouchableOpacity>
      :
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
      onPress ={() => navigation.goBack()}
      >
        <Image style={{width: 14.32,height: 26, marginLeft: 19.84}}
        source = {IMAGE.ICON_BACK)}
        resizeMode="contain"
        />
        </TouchableOpacity>
        }
      </View>
    
      <View style={{flex: 1, justifyContent: 'center'}}>
         <Text style={{textAlign: 'center', fontSize: 18}}>{title}</Text>
      </View>

</View>
   );
            }
 }

