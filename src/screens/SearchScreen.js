import React, { useState } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SearchBar from '../components/SearchBar';

//Tämä on scaffold sivulle, johon voidaan virittää kätevästi search toiminto.

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');

    return(
        <>
            <SearchBar term= {term}
                        onTermChange={newTerm =>setTerm(newTerm)}
                        onTermSubmit={()=>console.log('term submitted')}
                        />
            <Text style={StyleSheet.create({ fontSize: 50})} >{term}+testiteksti ☟ ✍✌</Text>
        </>
    )
    };

const styles = StyleSheet.create({});


export default SearchScreen;