import React from 'react';
import { View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../global/colors';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Lists() {

    const navigation = useNavigation();

    const handlePressProviders = () => {
        navigation.navigate("providers");
    }

    const handlePressSales = () => {
        navigation.navigate("sales");
    }

    return (
        <View style={styles.container}>
            <Header title="RELATÓRIOS" backButton={false} />
            <View style={styles.list}>
                <Card title="Fornecedores" type="provider" onPress={handlePressProviders} />
                <Card title="Vendas" type="sale" onPress={handlePressSales} />
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