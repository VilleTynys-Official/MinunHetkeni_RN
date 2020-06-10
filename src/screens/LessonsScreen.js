import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import useCategories from '../hooks/useCategories';
import CategoriesList from '../components/CategoriesList';
import { FlatList } from 'react-native-gesture-handler';
import LessonsList from '../components/LessonsList';
import CategoriesCarousel from '../components/CategoriesCarousel';

/**TODO
 * 1 haetaan valitun kategorian lessonien tiedot. OK
 * 2 renderöidään ne listaksi (LessonsList komponentilla.) OK
 * 
 */

//lessonssit saadaan propsina CategoriesLististä, myöhemmin ehkä Providerilla.



const LessonsScreen = ({route, navigation}) => {
    const {lessons} =route.params;
    console.log(lessons)

    return (
            <View>
                <LessonsList lessons ={lessons}
                />
            </View>

    );
};


const styles = StyleSheet.create({});

export default LessonsScreen;