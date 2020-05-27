import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import CategoriesDetail from './CategoriesDetail';
import { ScrollView } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation'; //tää tuo navigoinnnin (otetaan käyttöön exportissa)
//komponentti "pidetty tyhmänä" >>> Näyttää kaikki meditaatiot jotka annetaan sisälle.


const CategoriesList = ({title, categories, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style= {styles.title}> {title}</Text>
            <FlatList 
                //horizontal
                nestedScrollEnabled={false}
                data={categories}
                keyExtractor={ (category) => category.kategoria_id}
                renderItem = {( {item }) => {
                    return (
                    <TouchableOpacity onPress={()=> navigation.navigate('Lessons', { kategoria_id: item.kategoria_id})}>
                        <CategoriesDetail category={item} />
                    </TouchableOpacity>
                        

                    )
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
        marginBottom: 30,
    }

});


export default withNavigation(CategoriesList);