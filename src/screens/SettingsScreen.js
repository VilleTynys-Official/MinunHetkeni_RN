import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CategoriesCarouselCustom from '../components/CategoriesCarouselCustom';

const SettingsScreen = () => {
    return (
       <View> 
        <Text style={StyleSheet.create({ fontSize: 10})} >SettingsScreen</Text>
        <CategoriesCarouselCustom></CategoriesCarouselCustom>
        </View>
    )
};


const styles = StyleSheet.create({});


export default SettingsScreen;