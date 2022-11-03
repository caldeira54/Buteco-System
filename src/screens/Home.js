import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import colors from '../global/colors';
import { useNavigation } from '@react-navigation/native';
import Exit from '../components/Exit';

export default function Home() {
    const navigation = useNavigation();

    function handleRegister() {
        navigation.navigate("register");
    }

    function handleSale() {
        navigation.navigate("sale");
    }

    function handleReport() {
        navigation.navigate("report");
    }

    return (
        <View style={styles.container}>
            <Exit />
            <Image
                source={require('../assets/img/homer.png')}
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
                <TouchableOpacity onPress={handleRegister}>
                    <Image
                        source={require('../assets/img/iconCadastrar.png')}
                        resizeMode="contain"
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSale}>
                    <Image
                        source={require('../assets/img/iconCarteira.png')}
                        resizeMode="contain"
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleReport}>
                    <Image
                        source={require('../assets/img/iconListagem.png')}
                        resizeMode="contain"
                        style={styles.icon}
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
    icon: {
        width: 50,
        height: 50,
        tintColor: colors("cinzaclaro"),
    },
    title: {
        fontSize: 17,
        color: colors('branco'),
        textAlign: 'center',
    },
    name: {
        fontSize: 25,
        color: colors('verdeescuro'),
        textAlign: 'center',
        backgroundColor: colors('branco'),
        borderRadius: 10,
        width: 200,
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