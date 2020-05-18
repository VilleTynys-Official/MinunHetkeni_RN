import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons/';


const SearchBar = ({ term, onTermChange}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle}
                    name='search'
                    size={30}/>
            <TextInput style={styles.inputStyle}
                        autoCorrect={false}
                        autoCapitalize= 'none'
                        value={term}
                        onChangeText={onTermChange}
                        onEndEditig= {()=>{console.log('enter')}}
                        placeholder='Kirjoita tähän'></TextInput>
        </View>
    );
};


const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'rgb(230,230,230)',
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10,
        flexDirection: 'row'      
    },
    inputStyle: {
        fontSize: 20,
        // borderColor:'black',
        // borderWidth: 1,
        flex: 1
        

    },

    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginRight: 10,
        marginLeft: 10
    
        
    }

});


export default SearchBar;