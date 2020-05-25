import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import CategoriesList from '../components/CategoriesList';
import DataBaseInformation from '../data/DataBaseInformation.json';



const MainScreen = () => {
    const [categories, setCategories] = useState([]);

    //haetaan kategoriat
    const searchCategories = ()=>{
        const response = DataBaseInformation;
        setCategories(response)
        console.log(response)
    };


    return (
        <View>
            <Text style={StyleSheet.create({ fontSize: 50})} >MainScreen</Text>
            <Text>We have found: {categories.length} categories</Text>
            <Button title='Hae kategoriat'
                    onPress= {searchCategories}
                    />
            <CategoriesList title='Ensimmäiset askeleet' />
            <CategoriesList title='Metta meditointi' />  
            <CategoriesList title='Hengitysharjoitukset' />  

            
        </View>
    );
};


const styles = StyleSheet.create({});


export default MainScreen;