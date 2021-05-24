import React, {useEffect} from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import login from './login';

const StackApp = createStackNavigator();

export default function navigation() {

const [isLoading, setIsLoading] = React.useState(true);
const [userToken, setUserToken] = React.useState(null);

const authContext = React.userMemo(() =>({

  Login: () => {
    setUserToken('fgkj');
    setIsLoading(false);
  },
  Logout: () => {
    setUserToken('null');
    setIsLoading(false);
  },
  Register: () => {
    setUserToken('fgkj');
    setIsLoading(false);
  }
}));

useEffect(() => {
 setTimeout(() => {
   setIsLoading(false);
 }, 1000);
}, []);

if( isLoading) {

  return( <View style = {{flex: 1 ,justifyContent: 'center', alignItems: 'center'}}>
  <ActivityIndicator size="large"/>
  </View>
  )
}
  return (
    <NavigationContainer>
     
    </NavigationContainer>
  );
}