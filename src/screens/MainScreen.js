import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CategoriesList from '../components/CategoriesList';

const MainScreen = () => {

    //tiedot data-basesta:
    const [categories, setCategories] = useState([]);
    

    return (
        <View>
            <Text style={StyleSheet.create({ fontSize: 50})} >MainScreen</Text>
            <Text>We have found: {categories.length} categories</Text>
            <CategoriesList title='Ensimmäiset askeleet' />
            <CategoriesList title='Metta meditointi' />  
            <CategoriesList title='Hengitysharjoitukset' />  

            
        </View>
    );
};


const styles = StyleSheet.create({});


export default MainScreen;