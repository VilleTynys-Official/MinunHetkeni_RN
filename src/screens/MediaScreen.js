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
 * 1    luodaan state playbackObjectille
 * 2    ladataan mp3 loadAsyncillä se kun sivu lataantuu ensimmäisen kerran. Toistetaan mp3.
 * 3    
 * 
 */

const MediaScreen = () => {
    const { state: { chosenLesson: { audio_url, kesto, nimi, image_url }, chosenCategory } } = useContext(CategoriesContext); //Contextista ulos tarvittavat tiedot.
    // console.log('****** Mediascreenin saama lesson data on: ', chosenLesson);
    // console.log(audio_url)

    //soittimen statet:
    const [isPlaying, setIsPlaying] = useState(true)
    const [playbackObject, setPlaybackObject] = useState(new Audio.Sound())
    const [currentIndex, setCurrentIndex] = useState(0)
    const [volume, setVolume] = useState(1.0)
    const [isBuffering, setIsBufferring] = useState(false)

    // console.log('playbackObjekti:', playbackObject)



    
    //PLAYBACK OBJECT EI TALLENNU!!! ASYNC ja USE-EFFECT eivät tykkää toisistaan!!???
    // mediaplayer soimaan heti kun ladataan sivu ensimmäisen kerran
    useEffect(() => {
        (async () => {
            try {
                console.log('asfd')
                await playbackObject.loadAsync( {uri: audio_url}, {shouldPlay: true});  //ladataan ja soitetaan heti.
                // await playbackObject.playAsync();
                // Your sound is playing!
                console.log(playbackObject)
            } catch (error) {
                console.log(error)
            };
            console.log('asdf')
        })
        console.log('ajettiin use effect.')

    }, []);



    //VANHA
    // useEffect(() => {
    //     const startingMediaPlayer = async () => {
    //         try {
    //             await playbackObject.loadAsync( {uri: audio_url});
    //             await playbackObject.playAsync();
    //             // Your sound is playing!

    //         } catch (error) {
    //             console.log(error)
    //         };
    //     }
    //     console.log('ajettiin use effect.')
    // }, []);





    // const startListening = async () => {
    //     await playbackObject.playAsync();
    //     setIsPlaying(true)

    // }


    
    //pause playbackObject
    const pauseListening = async (playbackObject) => {
        console.log(playbackObject)
        // console.log('***** playbackObjekti on:', playbackObject.AVPlaybackStatus)
        // await playbackObject.pauseAsync();
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
                                console.log('*** pause')
                                // playbackObject.setStatusAsync({ shouldPlay: false }
                                pauseListening()

                            }}>
                            <Ionicons name='ios-pause' size={48} color='#444' />
                        </TouchableOpacity>
                    )
                    : (<TouchableOpacity
                        style={styles.control}
                        onPress={() => {
                            console.log('*** aloitetaan soittaminen')
                            // startListening()
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