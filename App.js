import {Feather} from '@expo/vector-icons';
import MainScreen from './src/screens/MainScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LessonsScreen from './src/screens/LessonsScreen';
import LessonsScreenTab from './src/screens/LessonsScreenTab';
import MediaScreen from './src/screens/MediaScreen';
import SplashScreen from './src/screens/SplashScreen';
import DownloadsScreen from './src/screens/DownloadsScreen';
import {Provider as CategoriesContext} from './src/context/CategoriesContext';


import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenContainer } from 'react-native-screens';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import LogoTitle from './src/components/LogoTitle';


/**
 * VÄRIPALETTI v.1:
 * FCBABA (iho) >> "rgb(252, 186, 186)"
 * 7C747B (harmaa) >> "rgb(124, 116, 123)"
 * 322A5C (sininen) >> "rgb(50, 42, 92)"
 * FFFFFF (valkoinen) >> "rgb(255,255,255)"
 * 
 * */


const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(50, 42, 92)',
    background: 'rgb(220, 220, 242)',
    card: 'rgb(50, 42, 92)',
    text: 'rgb(252, 186, 186)',
    border: 'rgb(200, 199, 0)',
    
  },
};


const MainStack = createStackNavigator();
// const LessonsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


 



export default App= ()=> {
  return (
    <CategoriesContext>
      <NavigationContainer theme={MyTheme}>
          <Tab.Navigator
            activeColor="rgb(252, 186, 186)"
            inactiveColor= "rgb(124, 116, 123)"
            // barStyle={{ backgroundColor: '#694fad' }}
            // initialRouteName="Home"
          >
                    <Tab.Screen name="Etusivu"
                                options={{
                                  tabBarLabel: 'Etusivu',
                                  tabBarIcon: ({ color }) => (
                                    <Feather name="home" color={color} size={23} />
                                  )
                                }}>
                      {()=> (
                                <MainStack.Navigator
                                      screenOptions= {{ headerTitle: ()=> <LogoTitle/>}}
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
                                    <Feather name="sun" color={color} size={23} />
                                  )
                                }}>

                      {()=> (
                                <MainStack.Navigator
                                      screenOptions= {{ headerTitle: ()=> <LogoTitle/>}}
                                      initialRouteName="LessonsTab">
                                <MainStack.Screen name="LessonsTab" component={LessonsScreenTab} />
                                </MainStack.Navigator>
                            )}
                    </Tab.Screen>

                    <Tab.Screen name="Asetukset"
                                options={{
                                  tabBarLabel: 'Asetukset',
                                  tabBarIcon: ({ color }) => (
                                    <Feather name="settings" color={color} size={23} />
                                  )
                                }}>


                      {()=> (
                                <MainStack.Navigator
                                      screenOptions= {{ headerTitle: ()=> <LogoTitle/>}}
                                      initialRouteName="Settings">
                                <MainStack.Screen name="Settings" component={SettingsScreen} />
                                </MainStack.Navigator>
                            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </CategoriesContext>
  );
}