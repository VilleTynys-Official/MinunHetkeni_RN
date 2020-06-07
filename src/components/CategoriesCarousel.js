import React, { useEffect } from 'react';
import GallerySwiper from 'react-native-gallery-swiper';
import {View, Button, Text, StyleSheet, ScrollView} from 'react-native';


/**
 * Näyttää kuvat kaikista kategorioista (halutussa muodossa), jotka annetaan sisälle.
 * Sisältää mahdollisuuden hyödyntää myös categorioista muitakin tietoja
 * TODO
 * 1. Otetaan kaikki kategoriat kuvineen käyttöön.
 * 2. Detailssit kuntoon
 * 3. lessonContextin muuttaminen kun käyttäjä swipee kategorioita. (ehkä johonkin muualle?)
 * 
 * .
*/

const CategoriesCarousel = ({categories}) =>{
    // useEffect(()=>{
    //     const image_url = categories.map(JSONKEY => JSONKEY.image_url)
    // })
    
    const images = categories.map(JSONKEY => JSONKEY.image_url)
    console.log(images)


    return (
            <>
                <GallerySwiper
                style={styles.carouselStyle}
                enableScale={false}
                pageMargin={40}                
                images={

                    [
                    { source: require("../imgs/kategoria1.png"),
                    // Version *1.5.0 update (or greater versions):
                    // An alternative to the dimensions field.
                    // This will also be acceptable.
                    width: 1080,
                    height: 1920 },

                    { source: require("../imgs/kategoria2.png"),
                    // Version *1.5.0 update (or greater versions):
                    // An alternative to the dimensions field.
                    // This will also be acceptable.
                    width: 1080,
                    height: 1920 },
                    ]
                    
                    }>

                </GallerySwiper>
            </>
        );
    };

    const styles = StyleSheet.create({
        carouselStyle: {
            backgroundColor: 'white',
            flex: 1
        }
    });



export default CategoriesCarousel;

