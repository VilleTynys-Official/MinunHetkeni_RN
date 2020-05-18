import React, { useState } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');

    return(
        <>
            <SearchBar term= {term}
                        onTermChange={newTerm =>setTerm(newTerm)}
                        onTermSubmit={()=>console.log('term submitted')}
                        />
            <Text style={StyleSheet.create({ fontSize: 50})} >{term}</Text>
        </>
    )
    };

const styles = StyleSheet.create({});


export default SearchScreen;