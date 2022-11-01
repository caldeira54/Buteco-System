import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../global/colors';

export default function Provider() {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors("verdeescuro"),
        width: 200,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 20,
        color: colors("branco"),
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});