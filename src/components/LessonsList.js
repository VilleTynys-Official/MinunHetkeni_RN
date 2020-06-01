import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import CategoriesDetail from './CategoriesDetail';
import { ScrollView } from 'react-native-gesture-handler';
import LessonsDetail from './LessonsDetail';
import CategoriesList from './CategoriesList';
import useCategories from '../hooks/useCategories';


//komponentti "pidetty tyhmänä" >>> Näyttää kaikki lessonit jotka annetaan sisälle.


const LessonsList = ({lessons}) => {
    const categories= useCategories()
    // console.log(lesson)
    return (
        <View style={styles.container}>
            <FlatList
                // //CAROUSELLIN TESTAILUA ListHeaderComponenttia hyödyntämällä.
                // //
                // ListHeaderComponent={()=>{
                //                             return(                                             
                //                                     <CategoriesList isHorizontal={true}
                //                                         categories={categories}/>
                //                                 )
                //                         }}
                // ListHeaderComponentStyle= {{height: 300}}

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