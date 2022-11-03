import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, Keyboard } from 'react-native';
import colors from '../global/colors';
import Header from '../components/Header.js';
import InputCadastro from '../components/InputCadastro.js';
import Footer from '../components/Footer';
import BtnCadastrar from '../components/BtnCadastrar.js';

export default function Provider() {
    const [cnpj, setCnpj] = useState('');
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
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
                <Header title='CADASTRO DE FORNECEDORES' />
                <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
                    <View style={styles.form}>
                        <View>
                            <InputCadastro placeholder="Cnpj" icon='cnpj' value={cnpj} onChange={setCnpj} />
                        </View>

                        <View>
                            <InputCadastro placeholder="Nome" icon='nome' value={nome} onChange={setNome} />
                        </View>

                        <View>
                            <InputCadastro placeholder="Endereço" icon='endereco' value={endereco} onChange={setEndereco} />
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