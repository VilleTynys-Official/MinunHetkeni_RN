import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';


//"pidetty tyhmänä". Näyttää kaikki meditaatiot jotka annetaan sisälle.
const CategoriesList = ({title}) => {
    return (
        <View>
            <Text style= {styles.title}> {title}</Text>
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