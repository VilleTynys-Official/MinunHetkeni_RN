import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const MediaScreen = ({ navigation}) => {
    return (
        <>
        <Text style={StyleSheet.create({ fontSize: 50})} >MediaScreen</Text>
        <Button title='Go to TrackDetail'
                onPress={() => navigation.navigate('TrackDetail')}/>
        </>
    )
};


const styles = StyleSheet.create({});


export default MediaScreen;