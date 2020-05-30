import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import CategoriesDetail from './CategoriesDetail';
import { ScrollView } from 'react-native-gesture-handler';
import LessonsDetail from './LessonsDetail';
import CategoriesList from './CategoriesList';
import useCategories from '../hooks/useCategories';


//komponentti "pidetty tyhmänä" >>> Näyttää kaikki lessonit jotka annetaan sisälle.


const LessonsList = ({lessons}) => {
    // console.log(lesson)
    return (
        <View style={styles.container}>
            <FlatList
                //CAROUSELLIN TESTAILUA ListHeaderComponenttia hyöydyntämällä:
                // ListHeaderComponent={<CategoriesList isHorizontal={true}
                //                                     categories={useCategories}
                //                                     ></CategoriesList>}

                data={lessons}
                keyExtractor={ (lesson) => lesson.nimi}
                renderItem = {( {item }) => {
                    return (
                            <LessonsDetail lesson ={item}></LessonsDetail>
                    )
                }}    
            />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        margin:10,
    }

});


export default LessonsList;