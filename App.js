import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {Feather} from '@expo/vector-icons';
import { StyleSheet, Text, View, Settings } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import CourseScreen from './src/screens/CourseScreen';
import MediaScreen from './src/screens/MediaScreen';
import SplashScreen from './src/screens/SplashScreen';

//STICHING TOGETHER THE NAVIGATORS


//StackNavigatorit
const MainStack = createStackNavigator({
  MainScreen,
  CourseScreen,
  MediaScreen
})

const SearchStack = createStackNavigator({
  SearchScreen,
  MediaScreen
})




//BottomTabNavigator on ylin navigaatio täs sovelluksessa.
const BottomTabNavigator = createBottomTabNavigator({
  Etusivu: MainStack,
  Haku: SearchStack,
  Asetukset: SettingsScreen
})





  //   Etusivu: createStackNavigator({
  //     Main: {
  //       screen: MainScreen,
  //       navigationOptions:{
  //         tabBarIcon: ({activeTintColor})=>(
  //             <Feather name='search'
  //                       style={{ width: 25, height: 25 }}
  //                       size={25}
  //                       color={activeTintColor}/>
  //         )}
  //     },
  //     Course: CourseScreen,
  //     Media: MediaScreen
      
  //   }),
  //   Haku: createStackNavigator({
  //     Search: {
  //       screen: SearchScreen,
  //       navigationOptions: () =>({
  //         tabBarIcon: ({activeTintColor})=>(
  //             <Feather name='home'
  //                       style= {{ width:26-32}}
  //                       size={30}
  //                       color={activeTintColor}/>
  //         )}
  //       )


  //     },
  //     Media: MediaScreen
  //   }),
  //   Asetukset: SettingsScreen
  // }, {
  //   tabBarOptions: {
  //       activeTintColor: 'blue', 
  //       inactiveTintColor: 'grey',
  //       showIcon: true,
  //       tabStyle:{
  //         height:30,
  //         borderWidth: 0

  //       }
  //   }
  //});





//App.js on ensimmäinen renderöitävä tiedosto.
//createAppContainer luo React componentin joka pitää sisällään Navigoinnin.
export default createAppContainer(BottomTabNavigator);