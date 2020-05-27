import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**TODO
 * 0 Luodaan lessonien tiedot.
 * 1 haetaan valitun kategorian lessonien tiedot.
 * 2 renderöidään ne listaksi (LessonsList komponentilla.)
 * 3 lisätään navigointi mediaScreeniin.
 */


const LessonsScreen = ({navigation}) => {
    //console.log(navigation)
    //console.log(navigation.getParam('kategoria_id'))
    const id = navigation.getParam('kategoria_id')

    return (
        <Text style={StyleSheet.create({ fontSize: 50})} >{id}</Text>
    )
};


const styles = StyleSheet.create({});


export default LessonsScreen;