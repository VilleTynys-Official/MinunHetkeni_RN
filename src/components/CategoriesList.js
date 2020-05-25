import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';





//"pidetty tyhmänä". Näyttää kaikki meditaatiot jotka annetaan sisälle.
const CategoriesList = ({title, categories}) => {
    return (
        <View>
            <Text style= {styles.title}> {title}</Text>
            <Text>kursseja:{categories.length}</Text>
            <FlatList 
                horizontal
                data={categories}
                keyExtractor={ (category) => category.nimi} //TODO: uniikit Id numerot..
                renderItem = {( {item }) => {
                    return <Text>{item.nimi}    </Text>
                }}
            />
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