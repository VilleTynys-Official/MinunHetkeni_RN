import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

/**
 * Komponentti kategorioiden muotoiluun.
 */

const CategoriesDetail = ({category}) =>{
    // console.log(category.image_url)
    // console.log('*****')
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Image source={{uri: category.image_url}}
                        style={styles.image} />
            </View>
            <View style={{flex:1}}>
                <Text style={styles.heading}>{category.nimi}</Text>
                <Text style={styles.infoText}>{category.kuvaus}</Text>
            </View>
        </View>
    )
};



// justifyContent, Flexbox
const styles = StyleSheet.create({
    image:{
        width: 150,
        height: 120,
        borderRadius: 10,


    },
    heading:{
        fontSize:20,
        textAlign: 'center'
    },

    infoText:{
        textAlign: 'center',

    },

    container:{
        margin: 10,
        flexDirection: 'row'
    }
});

export default CategoriesDetail;