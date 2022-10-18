import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import colors from '../global/colors';
import Header from '../components/Header.js';
import InputCadastro from '../components/InputCadastro.js';
import Footer from '../components/Footer';
import BtnCadastrar from '../components/BtnCadastrar.js';

export default function Inventory() {
    const [fornecedor, setFornecedor] = useState('');
    const [produto, setProduto] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header style={styles.container} title='CADASTRO DE ESTOQUE' />
                <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
                    <View style={styles.form}>
                        <View>
                            <InputCadastro placeholder="Fornecedor" icon='cnpj' onChange={setFornecedor} />
                        </View>

                        <View>
                            <InputCadastro placeholder="Produto" icon='produto' onChange={setProduto} />
                        </View>

                        <View>
                            <InputCadastro placeholder="Preço" icon='valor' onChange={setPreco} />
                        </View>
                        <View>
                            <InputCadastro placeholder="Quantidade" icon='quantidade' onChange={setQuantidade} />
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