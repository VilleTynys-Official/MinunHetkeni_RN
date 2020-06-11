import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import LessonsDetail from './LessonsDetail';
import { useNavigation } from '@react-navigation/native';
import { Context as CategoriesContext } from '../context/CategoriesContext'


/**
 * 
 * @param {*} lessons [] joka sisältää tiedot lessoneista, jotka halutaan esittää.
 */


const LessonsList = ({ lessons }) => {
    const { state: { chosenLesson }, setChosenLesson } = useContext(CategoriesContext)
    const navigation = useNavigation();
    // console.log(setChosenLesson)


    return (
        <View style={styles.container}>
            <FlatList
                data={lessons}
                keyExtractor={(lesson) => lesson.nimi}
                renderItem={({ item }) => {
                    return (

                        <TouchableOpacity
                            onPress={() => {
                                // console.log('Lessoniksi valittu: ', item, 'päivitetään se Contextiin.')
                                setChosenLesson(item)
                                navigation.navigate('MediaScreen')
                            }}>
                            <LessonsDetail lesson={item}></LessonsDetail>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        margin: 10,
    }

});


export default LessonsList;