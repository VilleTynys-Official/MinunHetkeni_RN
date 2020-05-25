import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CategoriesList from '../components/CategoriesList';
import useCategories from '../hooks/useCategories';


const MainScreen = () => {
    const categories = useCategories();
    console.log(categories);
    console.log('**********')


    return (
        <View>
            <Text style={StyleSheet.create({ fontSize: 50})} >MainScreen</Text>
            <Text>We have found: {categories.length} categories</Text>
            <Text></Text>
            <CategoriesList title='Ensimmäiset askeleet' />
            <CategoriesList title='Metta meditointi' />  
            <CategoriesList title='Hengitysharjoitukset' />  
        </View>
    );
};


const styles = StyleSheet.create({});


export default MainScreen;