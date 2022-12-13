import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Keyboard, SafeAreaView, TouchableOpacity, Text, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import colors from '../global/colors';
import Header from '../components/Header.js';
import InputCadastro from '../components/InputCadastro.js';
import Footer from '../components/Footer';
import { maskDate } from '../utils/functions';

export default function Buy() {
    const [funcionario, setFuncionario] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState('');
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [valid, setValid] = useState(false);

    useEffect(() => {
        if (funcionario && valor && data) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [funcionario, valor, data])

    function invalid() {
        return Alert.alert('Erro', 'Preencha todos os campos.');
    }

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

    function handleAdd() {
        firestore()
            .collection('buy')
            .add({
                funcionario,
                valor,
                data,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Compras", "Compra cadastrada com sucesso!")
                navigation.goBack();
            })
            .catch((error) => console.log(error));
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header style={styles.container} title='CADASTRO DE COMPRAS' />
                <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
                    <View style={styles.form}>
                        <View>
                            <InputCadastro placeholder="Funcionário" icon='funcionario' value={funcionario} onChange={setFuncionario} />
                        </View>

                        <View>
                            <InputCadastro placeholder="Valor" icon='valor' value={valor} onChange={setValor} keyboardType="number-pad" />
                        </View>

                        <View>
                            <InputCadastro placeholder="Data" icon='data' value={data} onChange={text => setData(maskDate(text))} keyboardType="number-pad" />
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={valid ? handleAdd : invalid}>
                            <Text style={styles.textButton}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
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
        width: "75%",
        justifyContent: 'center',
        marginTop: 50,
    },
    button: {
        backgroundColor: colors("verdeclaro"),
        width: 200,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 20,
        color: colors("branco"),
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});