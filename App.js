import {Feather} from '@expo/vector-icons';
import MainScreen from './src/screens/MainScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LessonsScreen from './src/screens/LessonsScreen';
import MediaScreen from './src/screens/MediaScreen';
import SplashScreen from './src/screens/SplashScreen';
import DownloadsScreen from './src/screens/DownloadsScreen';


//STICHING TOGETHER THE NAVIGATORS




import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenContainer } from 'react-native-screens';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'

import LogoTitle from './src/components/LogoTitle';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(30, 45, 85)',
    background: 'rgb(200, 200, 242)',
    card: 'rgb(30, 45, 85)',
    text: 'rgb(255,255,255)',
    border: 'rgb(200, 199, 0)',
    
  },
};

const MainStack = createStackNavigator();
// const LessonsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator>
                  <Tab.Screen name="Etusivu"
                              options={{
                                tabBarLabel: 'Etusivu',
                                tabBarIcon: ({ color }) => (
                                  <Feather name="home" color={color} size={26} />
                                )
                              }}>
                    {()=> (
                              <MainStack.Navigator
                                    screenOptions= {{ headerTitle: (props)=> <LogoTitle/>}}
                                    initialRouteName="Main">
                              <MainStack.Screen name="Main" component={MainScreen} />
                              <MainStack.Screen name="Lessons" component={LessonsScreen} />
                              </MainStack.Navigator>
                          )}
                  </Tab.Screen>

                  <Tab.Screen name="Luennot"
                              options={{
                                tabBarLabel: 'Luennot',
                                tabBarIcon: ({ color }) => (
                                  <Feather name="sun" color={color} size={26} />
                                )
                              }}>

                    {()=> (
                              <MainStack.Navigator
                                    screenOptions={{ title: 'Minun Hetkeni' }}
                                    initialRouteName="Main">
                              <MainStack.Screen name="Main" component={MainScreen} />
                              <MainStack.Screen name="Lessons" component={LessonsScreen} />
                              </MainStack.Navigator>
                          )}
                  </Tab.Screen>

                  <Tab.Screen name="Asetukset"
                              options={{
                                tabBarLabel: 'Asetukset',
                                tabBarIcon: ({ color }) => (
                                  <Feather name="settings" color={color} size={26} />
                                )
                              }}>


                    {()=> (
                              <MainStack.Navigator
                                    screenOptions={{ title: 'Minun Hetkeni' }}
                                    initialRouteName="Main">
                              <MainStack.Screen name="Main" component={MainScreen} />
                              <MainStack.Screen name="Lessons" component={LessonsScreen} />
                              </MainStack.Navigator>
                          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}