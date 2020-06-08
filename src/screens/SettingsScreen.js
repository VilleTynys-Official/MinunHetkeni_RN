import React, { useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CategoriesSlideView from '../components/CategoriesSlideView';
import LessonsList from '../components/LessonsList';
import { Context as CategoriesContext} from '../context/CategoriesContext';
import useCategories from '../hooks/useCategories';

const SettingsScreen = () => {
    const chosenCategory = useContext(CategoriesContext);
    const categories= useCategories()
    

//LESSONS PITÄÄ OLLA MUOTOA:
// Object {
//     "kesto": "10 minuuttia, 13 sekuntia",
//     "nimi": "Istunto 4",
// },
// Object {
//     "kesto": "10 minuuttia, 13 sekuntia",
//     "nimi": "Istunto 4",
// },






    return (
       <View style={styles.container}> 
            <CategoriesSlideView></CategoriesSlideView>


    </View>
    )
};


const styles = StyleSheet.create({
    container:{
        flex:1
    }
});


export default SettingsScreen;