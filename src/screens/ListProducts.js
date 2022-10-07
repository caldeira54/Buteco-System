import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../global/colors';
import Footer from '../components/Footer';

export default function ListProducts() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Footer />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors("verdeclaro"),
        alignItems: 'center'
    },
})