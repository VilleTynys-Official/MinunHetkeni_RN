import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CategoriesSlideView from '../components/CategoriesSlideView';
import LessonsList from '../components/LessonsList';
import { Context as CategoriesContext } from '../context/CategoriesContext';
import useCategories from '../hooks/useCategories';


/**TODO
 * 1 haetaan KAIKKIEN kategorioiden tiedot useCategories avulla. OK
 * 2 Näytetään KAIKKI carousel viewssä (esim.  pelkät kategorian nimet tai kuvat) OK
 *  
 * 
 * 3 Päivitetään lessonit alle sen mukaisesti mikä kategoria on näkyvillä karusellissa. >>>NEXT
 *      eli ns. yksi totuus mikä category on valittu.
 * 
 * 4 Yhdistetään main pagen navigointiin (et sieltä valinta tuo tänne.) OK
 * 
 */

const LessonsScreenTab = (navigation) => {
    const chosenCategory = useContext(CategoriesContext);
    const categories = useCategories()

    //LESSONS PITÄÄ OLLA MUOTOA:
    // Object {
    //     "kesto": "10 minuuttia, 13 sekuntia",
    //     "nimi": "Istunto 4",
    // },
    // Object {
    //     "kesto": "10 minuuttia, 13 sekuntia",
    //     "nimi": "Istunto 4",
    // },

    //TODO: Tähän lista joka näyttää chosenCategoryyn kuuluvat lessonit.
    return (
        <  View style={styles.container}>
            <CategoriesSlideView></CategoriesSlideView>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default LessonsScreenTab;
