import React from 'react';
import { View, StyleSheet} from 'react-native';
import colors from '../global/colors';

export default function Lists() {

    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors("verdeclaro"),
        alignItems: 'center'
    }
})