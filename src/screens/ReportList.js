import React from 'react';
import { View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../global/colors';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ReportLists() {

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


    return (
        <View style={styles.container}>
            <Header title="RELATÓRIOS" backButton={false} />
            <View style={styles.list}>
                <Card title="Fornecedores" type="provider" onPress={handlePressProviders} />
                <Card title="Produtos" type="product" onPress={handlePressProducts} />
                <Card title="Vendas" type="sale" onPress={handlePressSales} />
                <Card title="Compras" type="buy" onPress={handlePressBuys} />
                <Card title="Notas" type="note" onPress={handlePressNotes} />
            </View>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors("verdeclaro"),
        alignItems: 'center'
    },
    list: {
        flex: 1,
        alignItems: 'center',
    }
})