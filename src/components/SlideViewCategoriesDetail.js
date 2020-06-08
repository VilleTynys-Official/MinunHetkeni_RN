import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';
import { Value } from 'react-native-reanimated';

/**
 * Komponentti SlideViewn kategorioiden muotoiluun.
 * 
 * 
 * TODO:
 * erillinen "info" -nappula joka aukaisee lisätiedot (jotta säästetään ruututilaa)?
 * erillinen "lataa"- nappula jonka avulla kategorian harjoitukset voidaan ladata käytettäväksi offline tilassa.
 */

const SlideViewCategoriesDetail = ({category}) =>{
    // console.log(category.image_url)
    // console.log('*****')
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: category.image_url}}
                        style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.heading}>{category.nimi}</Text>
                <Text style={styles.kestoText}>Kurssin kesto: {category.kestoPäivissä} päivää</Text>
                <Text style={styles.infoText}>{category.kuvaus}</Text>
            </View>
        </View>
    )
};



// justifyContent, Flexbox
const styles = StyleSheet.create({
    container:{
        margin: 0,
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    },
    imageContainer:{
        flex: 1
    },
    
    image:{
        width: 260,
        borderRadius: 20,
        flexGrow: 1, ///venyttää imagen ottamaan kaiken vapaan tilan
    },

    textContainer:{
        marginTop: 10,
        alignItems: 'center' ,
        flex: 1
    },

    heading:{
        fontSize:20,
        // textAlign: 'left',
        fontWeight: "bold"
    },

    infoText:{
        // textAlign: 'left',
    },
    kestoText:{
        // textAlign: 'left',
        marginBottom:5
    }


});

export default SlideViewCategoriesDetail;