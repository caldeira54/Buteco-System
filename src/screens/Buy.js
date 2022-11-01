import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../global/colors';
import Header from '../components/Header.js';
import InputCadastro from '../components/InputCadastro.js';
import Footer from '../components/Footer';
import BtnCadastrar from '../components/BtnCadastrar.js';

export default function Buy() {
    const [funcionario, setFuncionario] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState('');

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header style={styles.container} title='CADASTRO DE COMPRAS' />
                <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
                    <View style={styles.form}>
                        <View>
                            <InputCadastro placeholder="Funcionário" icon='funcionario' onChange={setFuncionario} />
                        </View>

                        <View>
                            <InputCadastro placeholder="Valor" icon='valor' onChange={setValor} />
                        </View>

                        <View>
                            <InputCadastro placeholder="Data" icon='data' onChange={setData} />
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
    },
});