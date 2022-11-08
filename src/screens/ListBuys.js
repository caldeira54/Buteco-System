import { View, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import colors from '../global/colors';
import Footer from '../components/Footer';
import BtnEditar from '../components/BtnEditar';
import BtnExcluir from '../components/BtnExcluir';
import Header from '../components/Header';
import CardLine from '../components/CardLine';

export default function ListBuys() {
    const [selectedId, setSelectedId] = useState(null);

    const DATA = [
        {
            id: "1",          
            item1: "R$ 12000,00",
            item2: "25/10/2022",
            item3: null,
            item4: null,
        },
        {
            id: "2",
            item1: "R$ 12000,00",
            item2: "25/10/2022",
            item3: null,
            item4: null,
        },
        {
            id: "3",         
            item1: "R$ 12000,00",
            item2: "25/10/2022",
            item3: null,
            item4: null,
        },
        {
            id: "4",
            item1: "R$ 12000,00",
            item2: "25/10/2022",
            item3: null,
            item4: null,
        },
        {
            id: "5",
            item1: "R$ 12000,00",
            item2: "25/10/2022",
            item3: null,
            item4: null,
        },
        {
            id: "6",
            item1: "R$ 12000,00",
            item2: "25/10/2022",
            item3: null,
            item4: null,
        },
        {
            id: "7",
            item1: "R$ 12000,00",
            item2: "25/10/2022",
            item3: null,
            item4: null,
        },
        {
            id: "8",
            item1: "R$ 12000,00",
            item2: "25/10/2022",
            item3: null,
            item4: null,
        },
        {
            id: "9",
            item1: "R$ 12000,00",
            item2: "25/10/2022",
            item3: null,
            item4: null,
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
                <Header title="RELATÓRIO DE COMPRAS" />
                <View style={styles.table}>
                    <View style={styles.inLine}>
                        <View style={styles.column1}>
                            <Text style={styles.header}>Valor</Text>
                        </View>

                        <View style={styles.column2}>
                            <Text style={styles.header}>Data</Text>
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
        height: '60%',
        width: '95%',
        marginTop: 20,
        backgroundColor: colors("preto"),
        borderRadius: 10,
    },
    inLine: {
        flexDirection: 'row',
        width: '100%',
    },
    line: {
        width: '100%',
        borderBottomWidth: 1,
    },
    column1: {
        width: '47%',
        marginLeft: 60,
    },
    column2: {
        width: '47%',
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