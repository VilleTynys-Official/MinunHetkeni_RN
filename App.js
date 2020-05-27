import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Feather} from '@expo/vector-icons';
import MainScreen from './src/screens/MainScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LessonsScreen from './src/screens/LessonsScreen';
import MediaScreen from './src/screens/MediaScreen';
import SplashScreen from './src/screens/SplashScreen';
import DownloadsScreen from './src/screens/DownloadsScreen';

//STICHING TOGETHER THE NAVIGATORS


//StackNavigatorit
const MainStack = createStackNavigator({
    Main: MainScreen,
    Lessons: LessonsScreen,
    Media: MediaScreen
  },
  {
    headerMode: "screen",
    initialRouteName: "Main"
  })

const SearchStack = createStackNavigator({
    Search: SearchScreen,
    Media: MediaScreen
  },
  {
    headerMode: "screen",
    initialRouteName: "Search"
  })


const DownloadsStack = createStackNavigator({
    Downloads: DownloadsScreen,
    Media: MediaScreen
  },
  {
    headerMode: "screen",
    initialRouteName: "Downloads"
  })





//BottomTabNavigator, joka on ylin navigaatio täs sovelluksessa.
const BottomTabNavigator = createBottomTabNavigator(
  {
    Etusivu: MainStack,
    OmatLataukset: DownloadsStack,
    Haku: SearchStack,
    Asetukset: SettingsScreen
  },
  {
    initialRouteName: "Haku",
    navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === "Etusivu") {
        iconName = `search`
      } else if (routeName === "Haku") {
        iconName = `search`
      }
      console.log(iconName)
      return <Feather name={iconName} size={25} color={tintColor} />
    }
   }),
   tabBarOptions: {
     activeTintColor: 'blue',
     inactiveTintColor: "gray",
     showIcon: 'true'
   }
 }
)





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
  //     Lesson: LessonsScreen,
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