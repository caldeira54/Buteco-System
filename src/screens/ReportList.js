import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../global/colors';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ReportLists() {
    const [selectedId, setSelectedId] = useState(null);
    const navigation = useNavigation();

    const handlePressProviders = () => {
        navigation.navigate("providers");
    }

    const handlePressSales = () => {
        navigation.navigate("sales");
    }

    const handlePressProducts = () => {
        navigation.navigate("products");
    }

    const handlePressBuys = () => {
        navigation.navigate("buys");
    }

    const handlePressNotes = () => {
        navigation.navigate("notes");
    }

    const DATA = [
        {
            id: "1",
            title: "Fornecedores",
            type: "provider",
            onPress: handlePressProviders
        },
        {
            id: "2",
            title: "Produtos",
            type: "product",
            onPress: handlePressProducts
        },
        {
            id: "3",
            title: "Vendas",
            type: "sale",
            onPress: handlePressSales
        },
        {
            id: "4",
            title: "Compras",
            type: "buy",
            onPress: handlePressBuys
        },
        {
            id: "5",
            title: "Notas",
            type: "note",
            onPress: handlePressNotes
        },
    ];

    const Item = ({ item }) => (
        <Card title={item.title} type={item.type} onPress={item.onPress} />
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
                <Header title="RELATÓRIOS" />
                <SafeAreaView style={styles.list}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                    />
                </SafeAreaView>
            </SafeAreaView>
            <Footer />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '88%',
        backgroundColor: colors("verdeclaro"),
        alignItems: 'center',
    },
    list: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    }
})