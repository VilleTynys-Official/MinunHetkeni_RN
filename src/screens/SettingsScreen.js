import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CategoriesSlideView from '../components/CategoriesSlideView';

const SettingsScreen = () => {
    return (
       <View style={styles.container}> 
            <CategoriesSlideView></CategoriesSlideView>
    </View>
    )
};


const styles = StyleSheet.create({
    container:{
        flex:1
    }
});


export default SettingsScreen;