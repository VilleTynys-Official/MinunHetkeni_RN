import Carousel from 'react-native-snap-carousel';
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import useCategories from '../hooks/useCategories';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import SlideViewCategoriesDetail from '../components/SlideViewCategoriesDetail';

/**
 * TAVOITE:
 * Näyttää kuvat kaikista kategorioista (halutussa muodossa), jotka annetaan sisälle. OK
 * Sisältää mahdollisuuden hyödyntää myös categorioista muitakin tietoja OK
 * 
 * TODO:
 * 1 styling kuntoon
 * 2 
 * myöhemmin catregories vaan propsina sisälle, tai ehkä jopa suoraan vaan arrey jossa imaget?
*/

const CategoriesSlideView = () => {
    const [carousel, setCarousel] = useState(null);
    const categories = useCategories();
    // console.log(carousel);

    const changeLesson= () =>{
        console.log(carousel.currentIndex)
        //pävitetään lessonContext


    }


    return (
        <SafeAreaView
            style={styles.container}>
            <Carousel
                ref= {(c) =>{setCarousel(c)}} //ajetaan ref johonkin stateen
                onSnapToItem={()=>{changeLesson()}}
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

