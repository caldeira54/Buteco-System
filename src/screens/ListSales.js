import { View, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import colors from '../global/colors';
import Footer from '../components/Footer';
import BtnEditar from '../components/BtnEditar';
import BtnExcluir from '../components/BtnExcluir';
import Header from '../components/Header';
import CardLine from '../components/CardLine';

export default function ListSales() {
    const [selectedId, setSelectedId] = useState(null);

    const DATA = [
        {
            id: "1",
            item1: "Mateus",
            item2: "R$ 1200,00",
            item3: "25/10/2022",
            item4: null,
        },
        {
            id: "2",
            item1: "Mateus",
            item2: "R$ 1200,00",
            item3: "25/10/2022",
            item4: null,
        },
        {
            id: "3",
            item1: "Mateus",
            item2: "R$ 1200,00",
            item3: "25/10/2022",
            item4: null,
        },
        {
            id: "4",
            item1: "Mateus",
            item2: "R$ 1200,00",
            item3: "25/10/2022",
            item4: null,
        },
        {
            id: "5",
            item1: "Mateus",
            item2: "R$ 1200,00",
            item3: "25/10/2022",
            item4: null,
        },
        {
            id: "6",
            item1: "Mateus",
            item2: "R$ 1200,00",
            item3: "25/10/2022",
            item4: null,
        },
        {
            id: "6",
            item1: "Mateus",
            item2: "R$ 1200,00",
            item3: "25/10/2022",
            item4: null,
        },
        {
            id: "6",
            item1: "Mateus",
            item2: "R$ 1200,00",
            item3: "25/10/2022",
            item4: null,
        },
        {
            id: "6",
            item1: "Maaaaaaaaaaaas",
            item2: "R$ 1200,00",
            item3: "25/10/2022",
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
                <Header title="RELATÓRIO DE VENDAS" />
                <View style={styles.table}>
                    <View style={styles.inLine}>
                        <View style={styles.column1}>
                            <Text>Funcionário</Text>
                        </View>

                        <View style={styles.column2}>
                            <Text>Valor</Text>
                        </View>

                        <View style={styles.column3}>
                            <Text>Data</Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.inLine}>
                        <FlatList
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
        height: '60%',
        width: '75%',
        marginTop: 20,
        backgroundColor: colors("cinzaclaro"),
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
        width: '39%',
        marginLeft: 10,
        overflow: 'hidden',
        flexWrap: 'nowrap',
    },
    column2: {
        width: '27.5%',
    },
    column3: {
        width: '27.5%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})