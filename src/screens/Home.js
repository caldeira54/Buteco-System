import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import colors from '../global/colors';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';

export default function Home() {
    const navigation = useNavigation();

    function handleProvider() {
        navigation.navigate("provider");
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/img/sinuca.png')}
                resizeMode="contain"
                style={{ width: '70%', height: '40%' }}
            />
            <View style={styles.box}>
                <View>
                    <Text style={styles.title}>Receitas</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.textReceita}>R$ 12000,00</Text>
                </View>
                <View>
                    <Text style={styles.title}>Despesas</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.textDespesa}>R$ 12000,00</Text>
                </View>
            </View>
            <View style={styles.tab}>
                <TouchableOpacity onPress={handleProvider}>
                    <Image
                        source={require('../assets/img/List.png')}
                        resizeMode="contain"
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/img/Wallet.png')}
                        resizeMode="contain"
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/img/SignOut.png')}
                        resizeMode="contain"
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors("verdeclaro"),
        alignItems: 'center'
    },
    tab: {
        backgroundColor: colors("cinzaescuro"),
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '12%',
        bottom: 0,
        position: 'absolute',
        padding: 20,

    },
    box: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: colors("verdeescuro"),
        alignItems: 'center',
        width: '77%',
        height: '30%',
        borderRadius: 15,
        paddingVertical: 5,
    },
    title: {
        fontSize: 17,
        color: colors('branco'),
        textAlign: 'center',
    },
    line: {
        borderColor: colors("branco"),
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
    },
    textReceita: {
        fontSize: 17,
        color: colors('verdeclaro'),
        textAlign: 'center',
    },
    textDespesa: {
        fontSize: 17,
        color: colors('vermelho'),
        textAlign: 'center',
    }

})