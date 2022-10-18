import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../global/colors';
import Footer from '../components/Footer';
import BtnEditar from '../components/BtnEditar';
import BtnExcluir from '../components/BtnExcluir';
import Header from '../components/Header';

export default function ListSales() {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header title="RELATÓRIO DE VENDAS"/>
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
    button: {
        
    }
})