import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CategoriesList from '../components/CategoriesList';
import useCategories from '../hooks/useCategories';
import { ScrollView } from 'react-native-gesture-handler';






const MainScreen = () => {
    const categories = useCategories();


    //filtteröi sen mukaan onko voimassa true vai false.
    const filterCategoriesByAvailability = (voimassa) =>{
        // voimassa === true | false    ...tämä siis riippuu aina siitä mikä objekti on kyseessä.
        return categories.filter(category => {
            //console.log(category.voimassa)
            return category.voimassa === voimassa;
            }
        )};



        //huom. ScrollView:n takia CategoriesList:ssä oleva flatlist lataa kaikki suoraan.
        //jos kategorioiden lataaminen hidastuu merkittävästi, voidaan Flatlist vaihtaa horizontaaliseksi, jolloin "lazy loading" toimii jälleen.
    return (
        <ScrollView>
            <View>
                <CategoriesList categories={filterCategoriesByAvailability(true)}
                                title='Voimassa' />
                <CategoriesList categories={filterCategoriesByAvailability(false)}
                                title='Ei voimassa' />
            </View>
        </ScrollView>    
    );
};


const styles = StyleSheet.create({});
export default MainScreen;