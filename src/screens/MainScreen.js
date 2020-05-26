import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CategoriesList from '../components/CategoriesList';
import useCategories from '../hooks/useCategories';


const MainScreen = () => {
    const categories = useCategories();
    // console.log(categories);
    // console.log('**********')



    //filtteröi sen mukaan onko voimassa true vai false.
    const filterCategoriesByAvailability = (voimassa) =>{
        // voimassa === true | false    ...tämä siis riippuu aina siitä mikä objekti on kyseessä.
        return categories.filter(category => {
            //console.log(category.voimassa)
            return category.voimassa === voimassa;
            }
        )};

    return (
        <View>
            <Text style={StyleSheet.create({ fontSize: 50})} >MainScreen</Text>
            <Text>We have found: {categories.length} categories</Text>
            <CategoriesList categories={filterCategoriesByAvailability(true)}
                            title='Voimassa' />
            <CategoriesList categories={filterCategoriesByAvailability(false)}
                            title='Ei voimassa' />
        </View>
    );
};


const styles = StyleSheet.create({});


export default MainScreen;