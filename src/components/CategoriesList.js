import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';





//"pidetty tyhmänä". Näyttää kaikki meditaatiot jotka annetaan sisälle.
const CategoriesList = ({title, categories}) => {

    return (
        <View>
            <Text style= {styles.title}> {title}</Text>
            <Text>kursseja:{categories.length}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});


export default CategoriesList;