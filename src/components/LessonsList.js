import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import LessonsDetail from './LessonsDetail';
import { useNavigation } from '@react-navigation/native';
import { Context as CategoriesContext } from '../context/CategoriesContext'


/**
 * TODO:
 *  Minor: Lessons list ei päivity jos käyttäjä vaihtaa categorian main screenissä (edellisen lessonit jäävät ruutuun kunnes carousellia pyöritetään)
 * 
 * 
 * 
 * @param {*} lessons [] joka sisältää tiedot lessoneista, jotka halutaan esittää.
 */


const LessonsList = ({ lessons }) => {
    const { setChosenLesson } = useContext(CategoriesContext) //TODO poista chosenLesson jos turha..
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