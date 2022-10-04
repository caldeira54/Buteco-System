import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../global/colors';
import Header from '../components/Header.js';
import InputCadastro from '../components/InputCadastro.js';
// import Footer from '../components/Footer.js';

export default function Provider() {
    return (
        <SafeAreaView style={styles.container}>
            <Header style={styles.container} title='CADASTRO DE FORNECEDORES' />
            <View style={styles.form}>
                <View>
                    <InputCadastro placeholder="CNPJ" icon='cnpj' />
                </View>

                <View>
                    <InputCadastro placeholder="NOME" icon='nome' />
                </View>

                <View>
                    <InputCadastro placeholder="ENDEREÇO" icon='endereco' />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>
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
    },
    button: {
        backgroundColor: colors("verdeescuro"),
        padding: 10,
        width: '100%',
        borderRadius: 12,
        top: 15
    },
    textButton: {
        fontSize: 20,
        color: colors("branco"),
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});