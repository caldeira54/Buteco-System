import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../global/colors';
import Footer from '../components/Footer';

export default function ListSales() {
    return (
        <View style={styles.container}>
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
})