import React, { useState } from 'react';
import { TextInput, StyleSheet, KeyboardAvoidingView, Platform, View, TouchableOpacity, Image } from 'react-native';

import colors from '../global/colors';

export default function Input({ placeholder, icon = null }) {

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.inputArea}>
                {icon === 'cnpj' && (
                    <Image
                        source={require('../assets/img/iconCnpj.png')}
                        resizeMode="contain"
                        style={{ width: '80%', height: '60%' }}
                    />
                )}
                {icon === 'nome' && (
                    <Image
                        source={require('../assets/img/iconNome.png')}
                        resizeMode="contain"
                        style={{ width: '80%', height: '60%' }}
                    />
                )}
                {icon === 'endereco' && (
                    <Image
                        source={require('../assets/img/iconLocal.png')}
                        resizeMode="contain"
                        style={{ width: '80%', height: '60%' }}
                    />
                )}
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={colors("branco")}
                    style={styles.input}
                />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    inputArea: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        padding: 4,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 110,
    },
    input: {
        width: '80%',
        fontSize: 17,
        color: colors("branco"),
    },
});