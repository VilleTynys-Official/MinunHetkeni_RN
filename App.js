import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import CourseScreen from './src/screens/CourseScreen';
import MediaScreen from './src/screens/MediaScreen';
import SplashScreen from './src/screens/SplashScreen';

//STICHING TOGETHER THE NAVIGATORS
//BottomTabNavigator on ylin navigaatio täs sovelluksessa.
const BottomTabNavigator = createBottomTabNavigator({
    Etusivu: createStackNavigator({
      Main: MainScreen,
      Course: CourseScreen,
      Media: MediaScreen
    }),
    Haku: createStackNavigator({
      Search: SearchScreen,
      Media: MediaScreen
    }),
    Asetukset: SettingsScreen

});

export default createAppContainer(BottomTabNavigator);