import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CategoriesSlideView from '../components/CategoriesSlideView';
import LessonsList from '../components/LessonsList';
import { Context as CategoriesContext } from '../context/CategoriesContext';
import useCategories from '../hooks/useCategories';
import { ScrollView } from 'react-native-gesture-handler';

const LessonsScreenTab = (navigation) => {
    const { state: { chosenCategory } } = useContext(CategoriesContext);
    const categories = useCategories() //haetaan KAIKKIEN kategorioiden tiedot useCategories avulla.

    // ladataan lessons[] chosenCategoryyn kuuluvilla lessoneilla.
    // console.log('lessonit:', categories.filter(category => category.kategoria_id== '0001'))
    const [lessons] = categories.filter(category => category.kategoria_id == chosenCategory).map(x => x.lessons)


    return (
        <View style={styles.container}>
            <CategoriesSlideView style={{ flex: 1 }} />
            <ScrollView style={{ flex: 1 }}>
                <LessonsList lessons={lessons} />
            </ScrollView>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },


});

export default LessonsScreenTab;
