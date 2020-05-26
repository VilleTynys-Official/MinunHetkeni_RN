import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

/**
 * Kategorioiden muotoilu tapahtuu täällä.
 */

const CategoriesDetail = ({category}) =>{
    return (
        <View>

            <Text>{category.nimi}     </Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default CategoriesDetail;