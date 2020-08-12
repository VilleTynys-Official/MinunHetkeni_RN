import React from 'react';
import {View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { Value } from 'react-native-reanimated';

/**
 * Komponentti SlideViewn kategorioiden muotoiluun.
 * 
 * 
 * TODO:
 * erillinen "info" -nappula joka aukaisee lisätiedot (jotta säästetään ruututilaa)?
 * erillinen "lataa"- nappula jonka avulla kategorian harjoitukset voidaan ladata käytettäväksi offline tilassa.
 */

const SlideViewCategoriesDetail = ({category: {image_url, nimi, kestoPäivissä}}) =>{
    // console.log(image_url)
    // console.log('*****')


    //
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground
                        source={{uri: image_url}}
                        style={styles.image}
                        imageStyle={{ borderRadius: 20}}>
                    <Text style={styles.heading}>{nimi}</Text>
                </ImageBackground>
            </View>
            


        </View>
    )
};

//VANHAT ELEMENTIT:
// <View style={styles.textContainer}>
// <Text style={styles.heading}>{category.nimi}</Text>
// <Text style={styles.kestoText}>Kurssin kesto: {category.kestoPäivissä} päivää</Text>
// <Text style={styles.infoText}>{category.kuvaus}</Text>
// </View>


const styles = StyleSheet.create({
    container:{
        marginBottom: 10,
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    },
    imageContainer:{
        flex: 1
    },
    
    image:{
        width: 260,
        flexGrow: 1, ///venyttää imagen ottamaan kaiken vapaan tilan
    },

    textContainer:{
        marginTop: 10,
        alignItems: 'center' ,
        flex: 1
    },

    heading:{
        fontSize:25,
        textAlignVertical: 'bottom',
        fontWeight: "bold",
        color: 'white',
        margin: 10,
        alignSelf: 'flex-start',
        justifyContent: 'flex-end',
        flex: 1

        
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