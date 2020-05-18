import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = ({ navigation }) => {
    return(
        <>
            <SearchBar/>
            <Text style={StyleSheet.create({ fontSize: 50})} >SearchScreen</Text>
        </>
    )
    };
    
const styles = StyleSheet.create({});


export default SearchScreen;