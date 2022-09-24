import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../global/colors';

import Header from '../components/Header';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header title="Home" backButton={false} exitButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors("cinzaclaro"),
    },
    title: {
        fontSize: 25,
        color: colors('branco')
    }
})