import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

/**
 * Kategorioiden muotoilu tapahtuu täällä.
 * 
 * kuvan sourcena käytetty random kuvaa internetistä. (myöhemmin omat kuvat backendistä)
 */

const CategoriesDetail = ({category}) =>{
    // console.log(category.image_url)
    // console.log('*****')
    return (
        <View>
            <Image source={{uri: category.image_url}}
                    style={styles.image} />
            <Text>{category.nimi}   </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    image:{
        width: 150,
        height: 120,
        borderRadius: 4
    }
});

export default CategoriesDetail;