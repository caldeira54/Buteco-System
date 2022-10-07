import React from 'react';
import { View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../global/colors';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RegisterLists() {

    const navigation = useNavigation();

    const handleProvider = () => {
        navigation.navigate("provider");
    }

    const handleInventory = () => {
        navigation.navigate("inventory");
    }

    const handleProduct = () => {
        navigation.navigate("product");
    }

    const handleNotes = () => {
        navigation.navigate("note");
    }

    const handleBuy= () => {
        navigation.navigate("buy");
    }

    return (
        <View style={styles.container}>
            <Header title="CADASTRO" backButton={false} />
            <View style={styles.list}>
                <Card title="Fornecedores" type="provider" onPress={handleProvider} />
                <Card title="Produtos" type="product" onPress={handleProduct} />
                <Card title="Estoque" type="inventory" onPress={handleInventory} />
                <Card title="Compras" type="buy" onPress={handleBuy} />
                <Card title="Notas" type="note" onPress={handleNotes} />
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