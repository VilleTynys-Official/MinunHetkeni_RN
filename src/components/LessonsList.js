import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import CategoriesDetail from './CategoriesDetail';
import { ScrollView } from 'react-native-gesture-handler';
import LessonsDetail from './LessonsDetail';
import CategoriesList from './CategoriesList';
import useCategories from '../hooks/useCategories';
import CategoriesCarousel from './CategoriesCarousel';
import CategoriesSlideView from './CategoriesSlideView';


/**
 * 
 * @param {*} lessons [] joka sisältää tiedot lessoneista, jotka halutaan esittää.
 */


const LessonsList = ({ lessons }) => {
    const categories = useCategories()
    // console.log(lessons)
    return (
        <View style={styles.container}>
            <FlatList
                // //CAROUSELLIN TESTAILUA ListHeaderComponenttia hyödyntämällä.
                // //Toimii periaatteessa, mutta jotenkin täytyisi silti luoda "sivunvaihto".
                // //Kokeillaan karusellia omana erillisena komponenttina (joka otetaan ehkä sit täs käyttöön)
                // //
                // ListHeaderComponent={()=>{
                //                             return(
                //                                     <CategoriesSlideView/>
                //                                 )
                //                         }}
                ListHeaderComponentStyle={{ height: 300 }}

                data={lessons}
                keyExtractor={(lesson) => lesson.nimi}
                renderItem={({ item }) => {
                    return (
                        <LessonsDetail lesson={item}></LessonsDetail>
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