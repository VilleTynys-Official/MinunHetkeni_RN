import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import CategoriesDetail from './CategoriesDetail';
import { ScrollView } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation'; //tää tuo navigoinnnin (otetaan käyttöön exportissa)


//komponentti "pidetty tyhmänä" >>> Näyttää kaikki lessonit jotka annetaan sisälle.


const LessonsList = ({lessons}) => {
    // console.log(lesson)



    return (
        <View style={styles.container}>
            <FlatList
                data={lessons}
                keyExtractor={ (lesson) => lesson.nimi}
                renderItem = {( {item }) => {
                    return (
                        <Text>{item.nimi}</Text>
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


export default withNavigation(LessonsList);