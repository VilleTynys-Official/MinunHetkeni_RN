import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MeditationsList from '../components/MeditationsList';

const MainScreen = () => {
    return (
        <View>
            <Text style={StyleSheet.create({ fontSize: 50})} >MainScreen</Text>
            <MeditationsList title='Ensimmäiset askeleet' />
            <MeditationsList title='Metta meditointi' />  
            <MeditationsList title='Hengitysharjoitukset' />  

            
        </View>
    );
};


const styles = StyleSheet.create({});


export default MainScreen;