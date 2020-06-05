import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import CategoriesDetail from './CategoriesDetail';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
//komponentti "pidetty tyhmänä" >>> Näyttää kaikki kategoriat jotka annetaan sisälle.

const CategoriesList = ({title, categories, navigation, isHorizontal}) => {
    navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style= {styles.title}> {title}</Text>
            <FlatList 
                horizontal={isHorizontal}   //voidaan säätää propsilla suunta.
                nestedScrollEnabled={false}
                data={categories}
                keyExtractor={ (category) => category.kategoria_id}
                renderItem = {( {item }) => {
                    return (
                    <TouchableOpacity onPress={()=> {
                        console.log('esim täs kohtaa voi päivittää lessons staten provideriin (luento sivu saa tiedon mistä aloittaa carousel..)');
                        // nyt tieto viedään propseina, mut provider vois toimia paremmin:
                            navigation.navigate('Lessons', {kategoria_id: item.kategoria_id, lessons: item.lessons})}}>
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


export default CategoriesList;