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
                <Text style={styles.kestoText}>Kurssin kesto: {category.kestoPäivissä} päivää</Text>
                <Text style={styles.infoText}>{category.kuvaus}</Text>
            </View>
        </View>
    )
};



// justifyContent, Flexbox
const styles = StyleSheet.create({
    image:{
        width: 150,
        height: 150,
        borderRadius: 10,
        flexGrow: 1, ///venyttää imagen tekstiä mukaillen.



    },
    heading:{
        fontSize:20,
        textAlign: 'left',
        fontWeight: "bold"
    },

    infoText:{
        textAlign: 'left',
    },
    kestoText:{
        textAlign: 'left',
        marginBottom:5
    },

    container:{
        margin: 15,
        flexDirection: 'row'
    }
});

export default CategoriesDetail;