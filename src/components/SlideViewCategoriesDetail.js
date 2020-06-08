import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';
import { Value } from 'react-native-reanimated';

/**
 * Komponentti SlideViewn kategorioiden muotoiluun.
 */

const SlideViewCategoriesDetail = ({category}) =>{
    console.log(category.image_url)
    // console.log('*****')
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
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
        flex: 1
    },
    
    image:{
        width: 250,
        height: 100,
        borderRadius: 20,
        flexGrow: 1, ///venyttää imagen koko flexiin.
    },

    textContainer:{
        marginTop: 10,
        flex: 1,
        alignItems: 'center'
        // justifyContent: 'center',
        
        

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