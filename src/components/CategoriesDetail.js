import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

/**
 * Kategorioiden muotoilu tapahtuu täällä.
 * 
 * kuvan sourcena käytetty random kuvaa internetistä. (myöhemmin omat kuvat backendistä)
 */

const CategoriesDetail = ({category}) =>{
    return (
        <View>
            <Image source={{uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557258847-chinese-evergreen-houseplant-1557258690.jpg?crop=0.883xw:0.887xh;0.0849xw,0.0821xh&resize=480:*'}}
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