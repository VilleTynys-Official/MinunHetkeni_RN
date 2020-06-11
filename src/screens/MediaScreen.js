import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Context as CategoriesContext } from '../context/CategoriesContext';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo';

/**
 * TODO:
 * - get information of chosenLesson and category (used in the player) OK.
 * - Choose player (expo backed).
 * - Visual stuff
 * - Setup player to work
 * 
 * 
 */

const MediaScreen = () => {
    const { state: { chosenLesson, chosenCategory } } = useContext(CategoriesContext);
    // console.log('****** Mediascreenin saama state on: ', state);
    const isPlaying = true;


    return (
        <View style={styles.container}>
            <Image
                style={styles.albumCover}
                source={{ uri: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg' }}
            />
            <View style={styles.controls}>
                <TouchableOpacity style={styles.control} onPress={() => alert('')}>
                    <Ionicons name='ios-skip-backward' size={48} color='#444' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.control} onPress={() => alert('')}>
                    {isPlaying ? (
                        <Ionicons name='ios-pause' size={48} color='#444' />
                    ) : (
                            <Ionicons name='ios-play-circle' size={48} color='#444' />
                        )}
                </TouchableOpacity>
                <TouchableOpacity style={styles.control} onPress={() => alert('')}>
                    <Ionicons name='ios-skip-forward' size={48} color='#444' />
                </TouchableOpacity>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    albumCover: {
        width: 250,
        height: 250
    },
    controls: {
        flexDirection: 'row'
    },
    control: {
        margin: 20
    }
})


export default MediaScreen;