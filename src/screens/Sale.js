import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, Keyboard } from 'react-native';
import colors from '../global/colors';
import Header from '../components/Header.js';
import InputCadastro from '../components/InputCadastro.js';
import Footer from '../components/Footer.js';
import BtnCadastrar from '../components/BtnCadastrar.js';
import { maskDate, maskMoney } from '../utils/functions';

export default function Sale() {
    const [funcionario, setFuncionario] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState('');
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
                <Header style={styles.container} title='CADASTRO DE VENDA' />
                <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
                    <View style={styles.form}>
                        <View>
                            <InputCadastro placeholder="Funcionário" icon='funcionario' value={funcionario} onChange={setFuncionario} />
                        </View>

                        <View>
                            <InputCadastro placeholder="Valor" icon='valor' value={valor} onChange={text => setValor(maskMoney(text))} keyboardType="number-pad" />
                        </View>

                        <View>
                            <InputCadastro placeholder="Data" icon='data' value={data} onChange={text => setData(maskDate(text))} keyboardType="number-pad" />
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
        backgroundColor: colors("pretosignin"),
        alignItems: 'center',
    },
    form: {
        //flex: 0.5,
        width: "75%",
        justifyContent: 'center',
        marginTop: 50,
    }

});