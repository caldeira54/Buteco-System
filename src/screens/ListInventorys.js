import { View, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import colors from '../global/colors';
import Footer from '../components/Footer';
import BtnEditar from '../components/BtnEditar';
import BtnExcluir from '../components/BtnExcluir';
import Header from '../components/Header';
import CardLine from '../components/CardLine';

export default function ListInventorys() {
    const [selectedId, setSelectedId] = useState(null);

    const DATA = [
        {
            id: "1",
            item1: "Guaraniaaaaaa",
            item2: "Coca-Cola",
            item3: "R$ 1200aaaaaa,00",
            item4: "10",
        },
        {
            id: "2",
            item1: "Guarani",
            item2: "Coca-Cola",
            item3: "R$ 1200,00",
            item4: "10",
        },
        {
            id: "3",
            item1: "Guarani",
            item2: "Coca-Cola",
            item3: "R$ 1200,00",
            item4: "10",
        },
        {
            id: "4",
            item1: "Guarani",
            item2: "Coca-Cola",
            item3: "R$ 1200,00",
            item4: "10",
        },
        {
            id: "5",
            item1: "Guarani",
            item2: "Coca-Cola",
            item3: "R$ 1200,00",
            item4: "10",
        },
        {
            id: "6",
            item1: "Guarani",
            item2: "Coca-Cola",
            item3: "R$ 1200,00",
            item4: "10",
        },
        {
            id: "7",
            item1: "Guarani",
            item2: "Coca-Cola",
            item3: "R$ 1200,00",
            item4: "10",
        },
        {
            id: "8",
            item1: "Guarani",
            item2: "Coca-Cola",
            item3: "R$ 1200,00",
            item4: "10",
        },
        {
            id: "9",
            item1: "Guarani",
            item2: "Coca-Cola",
            item3: "R$ 1200,00",
            item4: "12",
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
                <Header title="RELATÓRIO DE ESTOQUE" />
                <View style={styles.table}>
                    <View style={styles.inLine}>
                        <View style={styles.column1}>
                            <Text style={styles.header}>Fornecedor</Text>
                        </View>

                        <View style={styles.column2}>
                            <Text style={styles.header}>Produto</Text>
                        </View>

                        <View style={styles.column3}>
                            <Text style={styles.header}>Preço</Text>
                        </View>

                        <View style={styles.column4}>
                            <Text style={styles.header}>QTD</Text>
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
        width: '90%',
        marginTop: 20,
        backgroundColor: colors("preto"),
        borderRadius: 10,
    },
    inLine: {
        flexDirection: 'row',
        width: '100%',
        //justifyContent: 'space-evenly',
    },
    line: {
        width: '100%',
        borderBottomWidth: 1,
    },
    column1: {
        width: '30%',
        marginLeft: 5,
    },
    column2: {
        width: '25%',
    },
    column3: {
        width: '22%',
    },
    column4: {
        width: '15%',
    },
    header: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors("branco"),
    },
    list:{
        height: '75%',
    }
})