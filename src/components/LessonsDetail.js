import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

/**
 * Komponentti lessoneiden muotoiluun.
 */

const LessonsDetail = ({lesson}) =>{
    // console.log(lesson)
    // console.log('*****')
    
    return (
        

        <View style={styles.container}>
                <Text style={styles.heading}>{lesson.nimi}</Text>
                <Text style={styles.kestoText}>{lesson.kesto}</Text>
        </View>
    )
};



// justifyContent, Flexbox
const styles = StyleSheet.create({

    heading:{
        fontSize:20,
        textAlign: 'left',
        fontWeight: "bold"
    },

    infoText:{
        textAlign: 'left',
    },
    kestoText:{
        textAlign: 'left',
        marginBottom:5
    },

    container:{
        marginHorizontal: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'rgb(150,170,220)'

    }
});

export default LessonsDetail;