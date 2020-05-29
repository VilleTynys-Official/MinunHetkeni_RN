import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';


//luo iconin joka näytetään navigoinnin headerissä.

//TODO:Päivitä oikea logo..
export default function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50, alignSelf: 'flex-end' }}
        source={require('../imgs/kategoria1.png')}
      />
    );
  }