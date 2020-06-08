import Carousel from 'react-native-snap-carousel';
import React, { useState, useContext } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import useCategories from '../hooks/useCategories';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import SlideViewCategoriesDetail from '../components/SlideViewCategoriesDetail';
import {Context as CategoriesContext} from '../context/CategoriesContext';

/**
 * TAVOITE:
 * Näyttää kuvat kaikista kategorioista (halutussa muodossa), jotka annetaan sisälle. OK
 * Sisältää mahdollisuuden hyödyntää myös categorioista muitakin tietoja OK
 * 
 * TODO:
 * 1 styling kuntoon
 * 2 CategoriesContextin päivitys
 * 3 LessonsList kun CategoriesContext päivittyy.
 * 4 Aloitus CategoriesContextin avulla.
 * myöhemmin catregories vaan propsina sisälle, tai ehkä jopa suoraan vaan arrey jossa imaget?
*/

const CategoriesSlideView = () => {
    const [carousel, setCarousel] = useState(null);
    const categories = useCategories();
    const { state: {chosenCategory}, setChosenCategory} = useContext(CategoriesContext);

    // console.log(carousel);
    // console.log(chosenCategory)

    const changeCategory= () =>{
        console.log(carousel.currentIndex)
        // //päivitetään CategorieContext
        // console.log(categories[carousel.currentIndex])

    }


    return (
        <SafeAreaView
            style={styles.container}>
            <Carousel
                ref= {(c) =>{setCarousel(c)}} //ajetaan ref johonkin stateen
                onSnapToItem={()=>{changeCategory()}}
                loop={true}
                layout= 'default'
                data={categories}
                sliderWidth={400}
                itemWidth={270}
                renderItem={({ item, index }) => {
                    // console.log('****')
                    // console.log(item.image_url)
                    return (
                        <>
                            <SlideViewCategoriesDetail category={item}></SlideViewCategoriesDetail>
                        </>
                    )
                }}
            />
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});



export default CategoriesSlideView;
