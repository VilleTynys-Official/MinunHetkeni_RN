import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const MeditationsList = ({title}) => {
    return (
        <>
            <Text style= {styles.title}> {title}</Text>
        </>
    )
};


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});


export default MeditationsList;