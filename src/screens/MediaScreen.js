import React, { useContext, useState, useEffect } from 'react';
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
 *  1 luodaan state soittimelle.
 *  2 yhdistetään state buttoneihin.
 *  
 *  Siirto omaksi komponentitksi?
 * 
 * 
 * 
 * SOUND INSTANCEN LUONTI
 * 1 New expo.audio.Sound() &  playbackObject.loadAsync()
 * 
 * 2 Expo.Audio.Sound.create(source, initialStatus = {}, onPlaybackStatusUpdate = null, downloadFirst = true)
 *  >>tämän pitäisi myös ladata playbackObject suoraan..
 */

const MediaScreen = () => {
    const { state: { chosenLesson: {audio_url, kesto, nimi, image_url}, chosenCategory } } = useContext(CategoriesContext); //Contextista ulos tarvittavat tiedot.
    // console.log('****** Mediascreenin saama lesson data on: ', chosenLesson);
    // console.log(audio_url)

    //soittimen statet:
    const [isPlaying, setIsPlaying] = useState(false)
    const [playbackObject, setPlaybackObject] = useState(new Audio.Sound())
    const [currentIndex, setCurrentIndex] = useState(0)
    const [volume, setVolume] = useState(1.0)
    const [isBuffering, setIsBufferring] = useState(false)

    // console.log('playbackObjekti:', playbackObject)

    //playerin reference kun ladataan sivu ensimmäisen kerran
    useEffect(() => {      
        try {
             playbackObject.loadAsync(
                { uri: audio_url}
            )
        }catch (error){
            console.log(error)
        }
        console.log('ajettiin use effect.')
    }, [playbackObject, audio_url]);


    const startListening = async () =>{
        await playbackObject.playAsync();
        setIsPlaying(true)

    }

    //pause playbackObject
    const pauseListening = async (playbackObject) => {
        // console.log('***** playbackObjekti on:', playbackObject)
        await playbackObject.pauseAsync();
        setIsPlaying(false);
    };






    //Tää scaffold on netistä.
    return (
        <View style={styles.container}>
            <Image
                style={styles.albumCover}
                source={{ uri: image_url }}
            />
            <View style={styles.controls}>
                <TouchableOpacity style={styles.control} onPress={() => alert('')}>
                    <Ionicons name='ios-skip-backward' size={48} color='#444' />
                </TouchableOpacity>
                {isPlaying ?
                    (
                        <TouchableOpacity
                            style={styles.control}
                            onPress={() => {
                                // console.log('*** pause', playbackObject)
                                // playbackObject.setStatusAsync({ shouldPlay: false }
                                pauseListening(playbackObject)

                            }}>
                            <Ionicons name='ios-pause' size={48} color='#444' />
                        </TouchableOpacity>
                    )
                    : (<TouchableOpacity
                        style={styles.control}
                        onPress={() => {
                            // console.log('*** aloitetaan soittaminen')
                            startListening()
                        }}>
                        <Ionicons name='ios-play-circle' size={48} color='#444' />
                    </TouchableOpacity>
                    )
                }
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