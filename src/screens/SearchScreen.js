import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SearchScreen = ({ navigation }) => {
    return(
        <>
            <Text style={StyleSheet.create({ fontSize: 50})} >SearchScreen</Text>
            <Button title='Go to signin'
                onPress={() => navigation.navigate('Signin')}/>
            <Button title='Go to MainFlow'
                onPress={() => navigation.navigate('mainFlow')}/>
        </>
    )
    };


const styles = StyleSheet.create({});


export default SearchScreen;