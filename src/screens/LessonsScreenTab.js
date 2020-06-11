import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CategoriesSlideView from '../components/CategoriesSlideView';
import LessonsList from '../components/LessonsList';
import { Context as CategoriesContext } from '../context/CategoriesContext';
import useCategories from '../hooks/useCategories';
import { ScrollView } from 'react-native-gesture-handler';


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
    const { state: { chosenCategory } } = useContext(CategoriesContext);
    const categories = useCategories()

    //TODO: Tähän funktio joka palauttaa lessons[] jossa on chosenCategoryyn kuuluvat lessonit.
    // console.log('lessonit:', categories.filter(category => category.kategoria_id== '0001'))
    const [lessons] = categories.filter(category => category.kategoria_id == chosenCategory).map(x => x.lessons)
    // console.log('***', lessons)


    return (
        <View style={styles.container}>
            <CategoriesSlideView style={{ flex: 1 }} />
            <ScrollView style={{ flex: 1 }}>
                <LessonsList lessons={lessons} />
            </ScrollView>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },


});

export default LessonsScreenTab;
