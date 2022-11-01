import { View, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import colors from '../global/colors';
import Footer from '../components/Footer';
import BtnEditar from '../components/BtnEditar';
import BtnExcluir from '../components/BtnExcluir';
import Header from '../components/Header';
import CardLine from '../components/CardLine';

export default function ListProducts() {
    const [selectedId, setSelectedId] = useState(null);

    const DATA = [
        {
            id: "1",
            item1: "Guarani",
            item2: "RS 1200,00",
            item3: "25/10/2022",
            item4: "25/10/2022",
        },
        {
            id: "2",
            item1: "Guarani",
            item2: "RS 1200,00",
            item3: "25/10/2022",
            item4: "25/10/2022",
        },
        {
            id: "3",
            item1: "Guarani",
            item2: "RS 1200,00",
            item3: "25/10/2022",
            item4: "25/10/2022",
        },
        {
            id: "4",
            item1: "Guarani",
            item2: "RS 1200,00",
            item3: "25/10/2022",
            item4: "25/10/2022",
        },
        {
            id: "5",
            item1: "Guarani",
            item2: "RS 1200,00",
            item3: "25/10/2022",
            item4: "25/10/2022",
        },
        {
            id: "6",
            item1: "Guarani",
            item2: "RS 1200,00",
            item3: "25/10/2022",
            item4: "25/10/2022",
        },
        {
            id: "7",
            item1: "Guarani",
            item2: "RS 1200,00",
            item3: "25/10/2022",
            item4: "25/10/2022",
        },
        {
            id: "8",
            item1: "Guarani",
            item2: "RS 1200,00",
            item3: "25/10/2022",
            item4: "25/10/2022",
        },
        {
            id: "9",
            item1: "Guarani",
            item2: "RS 1200,00",
            item3: "25/10/2022",
            item4: "25/10/2022",
        },
    ];

    const Item = ({ item }) => (
        <CardLine item1={item.item1} item2={item.item2} item3={item.item3} item4={item.item4} />
    );

    const renderItem = ({ item }) => {

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
            />
        );
    };

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
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            extraData={selectedId}
                        />
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
        height: '62%',
        width: '90%',
        marginTop: 20,
        backgroundColor: colors("verdeescuro"),
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