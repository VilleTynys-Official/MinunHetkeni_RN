import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

//luo iconin joka näytetään navigoinnin headerissä.

export default function Header(){
    return (
    <View> style={styles.header}
        <View>
            <Text style={styles.headerText}>aksdjfkkdjfk</Text>
        </View>
    
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: 10,
        height: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
    }
})