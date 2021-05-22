import * as React from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import {} from '../atty/tab' ;
import {n} from '../atty/drawer' ;
import {} from '../atty/auth' ;

import { CustomerHeader, CustomerDrawerContent} from './atty' ;
import { HomeScreen, HomeScreenDetial, QuizScreen, QuizScreenDetial} from './atty/tab' ;
import { NotificationsScree} from './atty/drawer' ;
import { RegisterScreen,LoginScreen} from './atty/auth' ;


const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown : false
})

const StackHome = createStackNavigator();

function HomeStack() {
  return(
  <StackHome.Navigator initialRouteName='Home'>
  <StackHome.Screen name = 'Home' component={HomeScreen} options = {navOptionHandler}/> 
  <StackHome.Screen name = 'HomeDetial' component={HomeScreenDetial} options = {navOptionHandler}/> 
  </StackHome.Navigator>
  )
}

const StackQuiz = createStackNavigator();

function QuizStack() {
  return(
  <StackQuiz.Navigator initialRouteName='Quiz'>
  <StackQuiz.Screen name = 'Check-up' component={QuizScreen} options = {navOptionHandler}/> 
  <StackQuiz.Screen name = 'QuizDetial' component={QuizScreenDetial} options = {navOptionHandler}/> 
  </StackQuiz.Navigator>
  )
}



function TabNavigator() {
  return(
  <Tab.Navigator 
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./assets/images/Home-Black.png')
                : require('./assets/images/Home.png') ;
            } else if (route.name === 'Quiz') {
              iconName = focused 
              ? require('./assets/images/quiz.png')
              : require('./assets/images/quiz-pink.png') ;
            }

            
            return <Image source={iconName} style={{width: 25 , height: 25}} 
            resizeMode= "contain"/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name= "Home" component={HomeStack} />
        <Tab.Screen name= "Quiz" component={QuizStack} />
      </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return(
     <Drawer.Navigator initialRouteName="MenuTab" drawerContent = {props => CustomerDrawerContent(props)}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
     </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator();

export default function navigation() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName='Login'>
      <StackApp.Screen name = 'HomeApp' component={DrawerNavigator} options = {navOptionHandler}/> 
      <StackApp.Screen name = 'Login' component={LoginScreen} options = {navOptionHandler}/> 
      <StackApp.Screen name = 'Register' component={RegisterScreen} options = {navOptionHandler}/> 
    </StackApp.Navigator>
    </NavigationContainer>
  );
}