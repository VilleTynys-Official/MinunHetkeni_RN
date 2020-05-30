import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';


//luo iconin joka näytetään navigoinnin headerissä.

//TODO:Päivitä oikea logo..
export default function LogoTitle() {
    return (
        <Text>Minun Hetkeni</Text>
    //   <Image
    //     style={{ width: 300, height: 50, alignSelf: 'center' }}
    //     source={require('../imgs/MinunHetkeniLogo.png')}
    //   />
    );
  }

  const style= StyleSheet.create({
      iconstyle: {
          fontSize: 20,
          fontWeight: "bold",
          fontFamily: 
      }
  })