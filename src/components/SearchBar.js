import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons/Feather';

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <TextInput placeholder='Kirjoita tähän'></TextInput>
        </View>
    );
};


const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgb(240,240,240)',
        height: 50,
        borderRadius: 10,
        margin: 10
        
        

        
    }
});


export default SearchBar;