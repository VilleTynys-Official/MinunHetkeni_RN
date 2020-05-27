import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

/**
 * Komponentti lessoneiden muotoiluun.
 */

const LessonsDetail = ({lesson}) =>{
    console.log(lesson)
    console.log('*****')
    
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Text style={styles.heading}>{lesson.nimi}</Text>
                <Text style={styles.kestoText}>{lesson.kesto}</Text>
            </View>
        </View>
    )
};



// justifyContent, Flexbox
const styles = StyleSheet.create({
    image:{
        width: 150,
        height: 150,
        borderRadius: 10,
        flexGrow: 1, ///venyttää imagen tekstiä mukaillen.

    },
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
        margin: 15,
    }
});

export default LessonsDetail;