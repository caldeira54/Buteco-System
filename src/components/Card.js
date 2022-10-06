import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../global/colors';

export default function Card({ title, type, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.cards}>
                <Text style={styles.title}>{title}</Text>
                {type === 'provider' && (
                    <Image style={styles.icon}
                        source={require('../assets/img/iconCnpj.png')}
                        resizeMode="contain"
                    />
                )}
                {type === 'sale' && (
                    <Image style={styles.icon}
                        source={require('../assets/img/iconValor.png')}
                        resizeMode="contain"
                    />
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '90%',
        margin: 15
    },
    cards: {
        height: 80,
        width: 250,
        paddingHorizontal: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors('branco'),
        borderRadius: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: colors('cinzaescuro'),
    }
})