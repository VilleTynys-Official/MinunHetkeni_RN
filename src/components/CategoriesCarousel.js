import React from 'react';
import GallerySwiper from 'react-native-gallery-swiper';
import {View, Button, Text, StyleSheet, ScrollView} from 'react-native';

const categoriesCarousel = () =>{

    return (
            <>
                <GallerySwiper
                style={styles.carouselStyle}
                enableScale={false}
                pageMargin={40}                
                images={[
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
                    
                    ]}>

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



export default categoriesCarousel;

