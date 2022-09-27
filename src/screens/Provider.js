import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../global/colors';
import Header from '../components/Header.js';
import Input from '../components/Input';

export default function Provider() {
    return (
        <SafeAreaView style={styles.container}>
            <Header style={styles.container} title='CADSTRO DE FORNECEDORES' />
            <View style={styles.form}>
                <View>
                    <Input placeholder="CNPJ" icon='cnpj'/>
                </View>
                <View>

                </View>
                <View>

                </View>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors("verdeclaro"),
        alignItems: 'center'
    },
    form: {
        flex: 0.5,
        width: "75%",
        justifyContent: 'center',
    },
});