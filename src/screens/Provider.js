import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import colors from '../global/colors';
import Header from '../components/Header.js';
import InputCadastro from '../components/InputCadastro.js';
import Footer from '../components/Footer';
import BtnCadastrar from '../components/BtnCadastrar.js';

export default function Provider() {
    const [cnpj, setCnpj] = useState('');
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header title='CADASTRO DE FORNECEDORES' />
                <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
                    <View style={styles.form}>
                        <View>
                            <InputCadastro placeholder="Cnpj" icon='cnpj' onChange={setCnpj} />
                        </View>

                        <View>
                            <InputCadastro placeholder="Nome" icon='nome' onChange={setNome} />
                        </View>

                        <View>
                            <InputCadastro placeholder="Endereço" icon='endereco' onChange={setEndereco} />
                        </View>
                    </View>
                    <BtnCadastrar />
                </ScrollView>
            </SafeAreaView>
            <Footer />
        </>
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