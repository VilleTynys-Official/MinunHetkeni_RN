import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import CategoriesDetail from './CategoriesDetail';

//komponentti "pidetty tyhmänä" >>> Näyttää kaikki meditaatiot jotka annetaan sisälle.
const CategoriesList = ({title, categories}) => {
    return (
        <View style={styles.container}>
            <Text style= {styles.title}> {title}</Text>
            <FlatList 
                // horizontal
                data={categories}
                keyExtractor={ (category) => category.nimi} //TODO: uniikit Id numerot..
                renderItem = {( {item }) => {
                    return <CategoriesDetail category={item}/>
                }}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
    },
    container: {
        marginBottom: 30
    }

});


export default CategoriesList;