import { View, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import colors from '../global/colors';
import Footer from '../components/Footer';
import BtnExcluir from '../components/BtnExcluir';
import Header from '../components/Header';
import CardLine from '../components/CardLine';

export default function ListProducts() {
    const [selectedId, setSelectedId] = useState(null);


    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header title="RELATÓRIO DE NOTAS PROMISSÓRIAS" />
                <View style={styles.table}>
                    <View style={styles.inLine}>
                        <View style={styles.column1}>
                            <Text style={styles.header}>Nome</Text>
                        </View>

                        <View style={styles.column2}>
                            <Text style={styles.header}>Valor</Text>
                        </View>

                        <View style={styles.column3}>
                            <Text style={styles.header}>Data da compra</Text>
                        </View>

                        <View style={styles.column4}>
                            <Text style={styles.header}>Data da venda</Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.inLine}>
                    <FlatList style={styles.list} 
                        showsVerticalScrollIndicator={false}
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
                <View style={styles.position}>
                    <BtnExcluir />
                </View>
            </SafeAreaView>
            <Footer />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '92%',
        backgroundColor: colors("pretosignin"),
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
        height: '62%',
        width: '90%',
        marginTop: 20,
        backgroundColor: colors("preto"),
        borderRadius: 10,
    },
    inLine: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    line: {
        width: '100%',
        borderBottomWidth: 1,
    },
    column1: {
        width: '22%',
        marginLeft: 25,
    },
    column2: {
        width: '22%',
        marginLeft: 5
    },
    column3: {
        width: '22%',
    },
    column4: {
        width: '22%',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors("branco"),
    },
    list:{
        height: '75%',
    }
})