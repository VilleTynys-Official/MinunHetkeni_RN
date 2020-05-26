import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

/**
 * Kategorioiden muotoilu tapahtuu täällä.
 */

const CategoriesDetail = ({category}) =>{
    return (
        <View>
            <Image source={ require('../imgs/kategoria1.png')}
                    style={styles.image} />
            <Text>{category.nimi}     </Text>
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