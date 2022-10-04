import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../global/colors';
import Header from '../components/Header.js';
import InputCadastro from '../components/InputCadastro.js';

export default function Sale() {
    return (
        <SafeAreaView style={styles.container}>
            <Header style={styles.container} title='CADASTRO DE VENDA' />
            <View style={styles.form}>
                <View>
                    <InputCadastro placeholder="Funcionário" icon='funcionario' />
                </View>

                <View>
                    <InputCadastro placeholder="Valor" icon='valor' />
                </View>

                <View>
                    <InputCadastro placeholder="Data" icon='data' />
                </View>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors("verdeclaro"),
        alignItems: 'center',
    },
    form: {
        flex: 0.5,
        width: "75%",
        justifyContent: 'center',
        marginTop: 50,
    }

});