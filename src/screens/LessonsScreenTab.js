import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import useCategories from '../hooks/useCategories';
import CategoriesList from '../components/CategoriesList';
import { FlatList } from 'react-native-gesture-handler';
import LessonsList from '../components/LessonsList';
import useNavigation from '@react-navigation/native';
import CategoriesCarousel from '../components/CategoriesCarousel';
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
    const [lessons, setLessons] = useState([]);


    //TODO: Opettele tämä hyvin!!!!!
    // ES6 MÄPPÄÄMINEN: uusi array, jossa on kaikki funktion perusteella mäpätyt jäsenet.
    // eli siis näin voidaan filtteröidä JSON datasta "key" arvoja hyödyntämällä.
    // console.log(categories.map(JSONkey => JSONkey.nimi ))
    const images = categories.map(JSONkey => JSONkey.image_url)
    console.log(images)    





    //TODO: provider joka tuo lessonin staten?
    return (
            <View>
                {/* <CategoriesCarousel
                                isHorizontal={true}
                                setLessons ={()=>setLessons()}
                                categories={categories}/> */}
                <LessonsList lessons ={lessons}
                />
            </View>

    );
};


const styles = StyleSheet.create({});

export default LessonsScreenTab;
