import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import CategoriesDetail from './CategoriesDetail';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-anchor-carousel';

/**komponentti "pidetty tyhmänä" >>> Näyttää kaikki kategoriat jotka annetaan sisälle.
 * 
 * TODO
 *  1 Carousel jossa on kaikki kategoriat (joita voidaan rullata ruudulla)
 *      1.1. kuvat karusellille propsina kategorioista.
 *      1.2
 *      1.3
 *  2 kun carousellia rullaa nii lessonit päivittyvät setLessons funktiolla parenttiin.
 *  3 siirretään logiikkaa Provideriin?
 */

const CategoriesCarousel = ({categories, navigation, isHorizontal, setLessons}) => {
    //console.log(categories);

    return (
        <View style={styles.container}>
            <FlatList 
                horizontal={isHorizontal}   //voidaan säätää propsilla suunta.
                nestedScrollEnabled={false}
                data={categories}
                keyExtractor={ (category) => category.kategoria_id}
                renderItem = {( {item }) => {
                    return (
                    <TouchableOpacity onPress={()=>{
                        // console.log('esim täs kohtaa voi päivittää lessons staten provideriin (luento sivu saa tiedon mistä aloittaa carousel..)');
                        // nyt viedään parametrinä, mut provider vois toimia paremmin:
                        navigation.navigate('Lessons', {kategoria_id: item.kategoria_id, lessons: item.lessons})}}>
                        <CategoriesDetail category={item} />
                    </TouchableOpacity>
                    )
                }}
            />
            <Text>tähä karuselli</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
    },
    container: {
        marginBottom: 30,
    },


});


export default CategoriesCarousel;