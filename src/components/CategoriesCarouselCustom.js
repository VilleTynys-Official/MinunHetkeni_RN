import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import useCategories from '../hooks/useCategories';

/**
 * TAVOITE:
 * 
 * Näyttää kuvat kaikista kategorioista (halutussa muodossa), jotka annetaan sisälle.
 * Sisältää mahdollisuuden hyödyntää myös categorioista muitakin tietoja
 * 
 * NOTES:
 * 
 * 
 * 
 * 
*/

const CategoriesCarouselCustom = () => {
    //myöhemmin categories vaan propsina sisälle?
    //tai ehkä jopa suoraan vaan arrey jossa imaget?
    const [bulletNumber, setBulletNumber] = useState(0);
    const categories = useCategories();
    const images = categories.map(image => image.image_url);
    // console.log(images);
    const width = useWindowDimensions().width;
    // console.log(width)
    const height = width * 0.60
    // console.log(height)


    return (
        <View style={styles.container}>
            <ScrollView
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                    width,
                    height,
                    }}>
                {
                    images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={{ width: width,
                                        height,
                                        resizeMode: 'center',
                                        borderRadius: 30}}
                            />
                        
                    ))
                }
            </ScrollView>
        </View>
    )
};



const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 40
    },
    // scroll: { width, height },
    // image: { width, height, resizeMode: 'cover'},
    pagination: {
        color: 'purple',
        flexDirection: 'row',
        position: 'absolute',
        bottom: -30,
        alignSelf: 'center'
    },

});



export default CategoriesCarouselCustom;

