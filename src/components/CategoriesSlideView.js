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
 * TODO:myöhemmin catregories vaan propsina sisälle, tai ehkä jopa suoraan vaan arrey jossa imaget?
*/

const CategoriesSlideView = () => {

    const categories = useCategories();
    const images = categories.map(image => image.image_url);
    // console.log(images);



    const _renderItem = ({ item }) => {
        console.log(item)
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#fff' }} >{item.nimi}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={styles.container}>
            <Carousel
                loop
                layout= 'default'
                data={categories}
                sliderWidth={300}
                itemWidth={250}
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
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});



export default CategoriesSlideView;

