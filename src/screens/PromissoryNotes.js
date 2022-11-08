import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Keyboard } from 'react-native';
import colors from '../global/colors';
import Header from '../components/Header.js';
import InputCadastro from '../components/InputCadastro.js';
import Footer from '../components/Footer';
import BtnCadastrar from '../components/BtnCadastrar.js';
import { maskDate } from '../utils/functions';

export default function PromissoryNotes() {
    const [fornecedor, setFornecedor] = useState('');
    const [valor, setValor] = useState('');
    const [dataCompra, setDataCompra] = useState('');
    const [dataPgto, setDataPgto] = useState('');
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header style={styles.container} title='CADASTRO DE NOTA PROMISSÓRIA' />
                <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
                    <View style={styles.form}>
                        <View>
                            <InputCadastro placeholder="Fornecedor" icon='cnpj' value={fornecedor} onChange={setFornecedor} />
                        </View>

                        <View>
                            <InputCadastro placeholder="Valor" icon='valor' value={valor} onChange={setValor} keyboardType="number-pad" />
                        </View>

                        <View>
                            <InputCadastro placeholder="Data da Compra" icon='data' value={dataCompra} onChange={text => setDataCompra(maskDate(text))} keyboardType="number-pad" />
                        </View>
                        <View>
                            <InputCadastro placeholder="Data do Pagamento" icon='data' value={dataPgto} onChange={text => setDataPgto(maskDate(text))} keyboardType="number-pad" />
                        </View>
                    </View>
                    <BtnCadastrar />
                </ScrollView>
                {!keyboardVisible && (
                    <Footer />
                )}
            </SafeAreaView>
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
        width: "75%",
        justifyContent: 'center',
        marginTop: 50,
    },
});