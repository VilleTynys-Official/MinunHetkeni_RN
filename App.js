import { Feather } from '@expo/vector-icons';
import MainScreen from './src/screens/MainScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LessonsScreen from './src/screens/LessonsScreen';
import LessonsScreenTab from './src/screens/LessonsScreenTab';
import MediaScreen from './src/screens/MediaScreen';
import SplashScreen from './src/screens/SplashScreen';
import DownloadsScreen from './src/screens/DownloadsScreen';
import { Provider as CategoriesContext } from './src/context/CategoriesContext';


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenContainer } from 'react-native-screens';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import LogoTitle from './src/components/LogoTitle';


/**
 * VÄRIPALETTI v.1:
 * FCBABA (iho) >> "rgb(252, 186, 186)"
 * 7C747B (harmaa) >> "rgb(124, 116, 123)"
 * 322A5C (sininen) >> "rgb(50, 42, 92)"
 * FFFFFF (valkoinen) >> "rgb(255,255,255)"
 * 
 * 
 * TODO:
 * 1 Kaikki samaan tabNavigatoriin. OK
 * 2 Setup navigointi harjoitukset tabiin ja testaa et kaikki toimii. OK
 * 
 * 
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
const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ headerTitle: () => <LogoTitle /> }}
      initialRouteName="Main">
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="Lessons" component={LessonsScreen} />
    </MainStack.Navigator>
  )
}



const LessonsStack = createStackNavigator();
const LessonsStackScreen = () => {
  return (
    <LessonsStack.Navigator
      screenOptions={{ headerTitle: () => <LogoTitle /> }}
      initialRouteName="LessonsTab">
      <LessonsStack.Screen name="LessonsTab" component={LessonsScreenTab} />
      <LessonsStack.Screen name="MediaScreen" component={MediaScreen} />
    </LessonsStack.Navigator>
  )
}

const SettingsStack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{ headerTitle: () => <LogoTitle /> }}
      initialRouteName="Settings">
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  )
}




const Tab = createMaterialBottomTabNavigator();

export default App = () => {
  return (
    <CategoriesContext>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          activeColor="rgb(252, 186, 186)"
          inactiveColor="rgb(124, 116, 123)"
        // barStyle={{ backgroundColor: '#694fad' }}
        // initialRouteName="Home"
        >
          <Tab.Screen name="Etusivu"
            component={MainStackScreen}
            options={{
              tabBarLabel: 'Etusivu',
              tabBarIcon: ({ color }) => (
                <Feather name="home" color={color} size={23} />
              )
            }}>
          </Tab.Screen>

          <Tab.Screen name="Luennot"
            component={LessonsStackScreen}
            options={{
              tabBarLabel: 'Luennot',
              tabBarIcon: ({ color }) => (
                <Feather name="sun" color={color} size={23} />
              )
            }}>
          </Tab.Screen>

          <Tab.Screen name="Asetukset"
            component={SettingsStackScreen}
            options={{
              tabBarLabel: 'Asetukset',
              tabBarIcon: ({ color }) => (
                <Feather name="settings" color={color} size={23} />
              )
            }}>
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </CategoriesContext>
  );
}