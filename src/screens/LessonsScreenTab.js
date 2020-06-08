import React, {useState, useContext} from 'react';
import {View, Button, Text, StyleSheet, ScrollView} from 'react-native';
import useCategories from '../hooks/useCategories';
import CategoriesList from '../components/CategoriesList';
import { FlatList } from 'react-native-gesture-handler';
import LessonsList from '../components/LessonsList';
import useNavigation from '@react-navigation/native';
import CategoriesCarousel from '../components/CategoriesCarousel';
import { Context as CategoriesContext} from '../context/CategoriesContext';



/**TODO
 * 1 haetaan KAIKKIEN kategorioiden tiedot useCategories avulla. OK!
 * 2 Näytetään KAIKKI carousel viewssä (esim.  pelkät kategorian nimet tai kuvat)
 * 3 Päivitetään lessonit alle sen mukaisesti mikä kategoria on näkyvillä karusellissa.
 * 4 Yhdistetään main pagen navigointiin (et sieltä valinta tuo tänne.)
 * 
 */

const LessonsScreenTab = (navigation) => {
    // const [category, setCategory] = useState(null);
    const categories = useCategories();
    const { state: {chosenCategory}, setChosenCategory} = useContext(CategoriesContext);

    //TODO: Opettele tämä hyvin!!!!!
    // ES6 MÄPPÄÄMINEN: uusi array, jossa on kaikki funktion perusteella mäpätyt jäsenet.
    // eli siis näin voidaan filtteröidä JSON datasta "key" arvoja hyödyntämällä.
    // console.log(categories.map(JSONkey => JSONkey.nimi ))
    const images = categories.filter(JSONkey => JSONkey.image_url)
    console.log('LessonsScreenTab')
    console.log(chosenCategory)


    return (
            <>
                <Text>{chosenCategory}</Text>
                <Button title='vaihda lesson'
                        onPress={()=>setChosenCategory('lkj')}></Button>
            </>
    );
};


const styles = StyleSheet.create({
});

export default LessonsScreenTab;
