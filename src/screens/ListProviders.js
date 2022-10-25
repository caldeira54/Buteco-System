import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import colors from '../global/colors';
import Footer from '../components/Footer';
import BtnEditar from '../components/BtnEditar';
import BtnExcluir from '../components/BtnExcluir';
import Header from '../components/Header';

export default function ListProviders() {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header title="RELATÓRIO DE FORNECEDORES" />
                <View style={styles.table}>
                    <View style={styles.inLine}>
                        <View style={styles.column1}>
                            <Text>CNPJ</Text>
                        </View>

                        <View style={styles.column2}>
                            <Text>Nome</Text>
                        </View>

                        <View style={styles.column3}>
                            <Text>Endereço</Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.inLine}>
                        <View style={styles.column1}>
                            <Text>12.345.678/0001-90</Text>
                        </View>

                        <View style={styles.column2}>
                            <Text>Coca</Text>
                        </View>

                        <View style={styles.column3}>
                            <Text>Itramandiba</Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.inLine}>
                        <View style={styles.column1}>
                            <Text>12.345.678/0001-80</Text>
                        </View>

                        <View style={styles.column2}>
                            <Text>Macol</Text>
                        </View>

                        <View style={styles.column3}>
                            <Text>Itramandiba</Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.inLine}>
                        <View style={styles.column1}>
                            <Text>12.345.678/0001-70</Text>
                        </View>

                        <View style={styles.column2}>
                            <Text>Gildane</Text>
                        </View>

                        <View style={styles.column3}>
                            <Text>Itramandiba</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.position}>
                    <BtnEditar />
                    <BtnExcluir />
                </View>
            </SafeAreaView>
            <Footer />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '88%',
        backgroundColor: colors("verdeclaro"),
        alignItems: 'center'
    },
    position: {
        display: 'flex',
        flexDirection: 'row',
        bottom: 0,
        position: 'absolute',
        justifyContent: 'space-evenly',
        width: '75%',
        marginBottom: 30
    },
    table: {
        height: '60%',
        width: '90%',
        marginTop: 20,
        backgroundColor: colors("cinzaclaro"),
    },
    inLine: {
        flexDirection: 'row',
        //justifyContent: 'space-between',
        padding: 8,
    },
    line: {
        borderBottomWidth: 1,
    },
    column1: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
    },
    column2: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
    },
    column3: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})