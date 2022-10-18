import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import colors from '../global/colors';
import Header from '../components/Header.js';
import InputCadastro from '../components/InputCadastro.js';
import Footer from '../components/Footer';
import BtnCadastrar from '../components/BtnCadastrar.js';

export default function PromissoryNotes() {
    const [fornecedor, setFornecedor] = useState('');
    const [valor, setValor] = useState('');
    const [dataCompra, setDataCompra] = useState('');
    const [dataPgto, setDataPgto] = useState('');

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header style={styles.container} title='CADASTRO DE NOTA PROMISSÓRIA' />
                <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
                    <View style={styles.form}>
                        <View>
                            <InputCadastro placeholder="Fornecedor" icon='cnpj' onChange={setFornecedor} />
                        </View>

                        <View>
                            <InputCadastro placeholder="Valor" icon='valor' onChange={setValor} />
                        </View>

                        <View>
                            <InputCadastro placeholder="Data da Compra" icon='data' onChange={setDataCompra} />
                        </View>
                        <View>
                            <InputCadastro placeholder="Data do Pagamento" icon='data' onChange={setDataPgto} />
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