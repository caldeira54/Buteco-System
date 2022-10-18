import React, { useState } from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../global/colors';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ReportLists() {

    const DATA = [
        {
            id: "1",
            title: "Fornecedores",
            type: "provider",
        },
        {
            id: "2",
            title: "Produtos",
            type: "product",
        },
        {
            id: "3",
            title: "Vendas",
            type: "sale",
        },
        {
            id: "4",
            title: "Compras",
            type: "buy",
        },
        {
            id: "5",
            title: "Notas",
            type: "note",
        },
    ];

    const Item = ({ item, onPress, type }) => (
        <Card title={item.title} type={type} onPress={onPress} />
    );

    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header title="RELATÓRIOS" backButton={false} />
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
            <Footer />
        </SafeAreaView>
    );

    // const navigation = useNavigation();

    // const handlePressProviders = () => {
    //     navigation.navigate("providers");
    // }

    // const handlePressSales = () => {
    //     navigation.navigate("sales");
    // }

    // const handlePressProducts = () => {
    //     navigation.navigate("products");
    // }

    // const handlePressBuys = () => {
    //     navigation.navigate("buys");
    // }

    // const handlePressNotes = () => {
    //     navigation.navigate("notes");
    // }


    // return (
    //     <View style={styles.container}>
    //         <Header title="RELATÓRIOS" backButton={false} />
    //         <View style={styles.list}>
    //             <Card title="Fornecedores" type="provider" onPress={handlePressProviders} />
    //             <Card title="Produtos" type="product" onPress={handlePressProducts} />
    //             <Card title="Vendas" type="sale" onPress={handlePressSales} />
    //             <Card title="Compras" type="buy" onPress={handlePressBuys} />
    //             <Card title="Notas" type="note" onPress={handlePressNotes} />
    //         </View>
    //         <Footer />
    //     </View>
    // );
}

const styles = StyleSheet.create({
    container: {
        height: '88%',
        backgroundColor: colors("verdeclaro"),
        alignItems: 'center',
    },
    list: {
        display: 'flex',
        flex: 1,
    },

})