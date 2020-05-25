import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CategoriesList from '../components/CategoriesList';
import DataBaseInformation from '../data/DataBaseInformation.json';



const MainScreen = () => {
    const [categories, setCategories] = useState([]);
    
    //haetaan kategoriat
    const categoriesApi =  ()=> {
            const response =  DataBaseInformation;
            setCategories(response.kategoriat)
            console.log(response.kategoriat)
            console.log('**********')

    };

    //default haku.
    useEffect(()=>{
        categoriesApi()
    }, [])


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