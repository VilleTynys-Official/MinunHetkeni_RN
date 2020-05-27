import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import useCategories from '../hooks/useCategories';
import CategoriesList from '../components/CategoriesList';
import { FlatList } from 'react-native-gesture-handler';
import LessonsList from '../components/LessonsList';

/**TODO
 * 1 haetaan valitun kategorian lessonien tiedot. OK
 * 2 renderöidään ne listaksi (LessonsList komponentilla.)
 * 3 lisätään navigointi mediaScreeniin (LessonsList komponenttiin?)
 */

//lessonssit saadaan propsina mainScreenistä. Sitten ku api on pystyssä nii voidaan myös hakea id:llä apista..



const LessonsScreen = ({navigation}) => {
    // const [category, setCategory] = useState(null);
    const id = navigation.getParam('kategoria_id')
    const lessons = navigation.getParam('lessons') 
    //console.log(lessons)


    return (
            <View>
                <LessonsList lessons ={lessons}
                />
            </View>

    );
};


const styles = StyleSheet.create({});

export default LessonsScreen;




    // //haetaan id avulla tiedot lessoneista (databasesta)     
    // const categories = useCategories();
    // // console.log(categories);
    // // console.log('**********')
    // //const lessons = categories.filter(category => category.kategoria_id == id)


    // //filtteröi id:n avulla
    // const filterCategoriesByid = (kategoria_id) =>{
    //     // voimassa === true | false    ...tämä siis riippuu aina siitä mikä objekti on kyseessä.
    //     return categories.filter(category => {
    //         //console.log(category.voimassa)
    //         return category.kategoria_id === id;
    //         }
    //     )};
    //     console.log(category)