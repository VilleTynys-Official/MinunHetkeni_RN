import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Context as CategoriesContext } from '../context/CategoriesContext';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

/**
 * TODO:
 * - get information of chosenLesson and category (used in the player) OK.
 * - Choose player (that has expo backed).
 * - Visual stuff   >>semi OK
 * - Setup player to work
 * 
 * 
 * 
 * MEDIA-PLAYER
 *  Sovelletaan siitä mitä tehty Tracker projektissa.
 * 
 *  Siirto omaksi komponentitksi?
 * 
 */

const MediaScreen = () => {
    const { state: { chosenLesson, chosenCategory } } = useContext(CategoriesContext);
    // console.log('****** Mediascreenin saama state on: ', state);
    const isPlaying = true;



    const audioBookPlaylist = [
        {
            title: 'Hamlet - Act I',
            author: 'William Shakespeare',
            source: 'Librivox',
            uri:
                'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3',
            imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
        },
        {
            title: 'Hamlet - Act II',
            author: 'William Shakespeare',
            source: 'Librivox',
            uri:
                'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3',
            imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
        }]



    const startListening = async () => {
        try {
            const { sound: soundObject, status } = await Audio.Sound.createAsync(
                { uri: 'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3' },
                { shouldPlay: true }
            );
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        };
    };

    const stopListening = async () =>{};






    //Tää scaffold on netistä.
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
                <TouchableOpacity
                    style={styles.control}
                    onPress={() => {
                        console.log('*** aloitetaan soittaminen')
                        startListening()
                    }}>

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