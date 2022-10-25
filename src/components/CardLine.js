import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../global/colors';

export default function CardLine({ item1, item2, item3, item4 }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.cards}>
                <Text style={styles.item}>{item1}</Text>
                <Text style={styles.item}>{item2}</Text>
                <Text style={styles.item}>{item3}</Text>
                {item4 && (
                    <Text style={styles.item}>{item4}</Text>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        marginVertical: 8,
    },
    cards: {
        height: 40,
        width: '100%',
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors('cinzaclaro'),
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'space-between',
    },
    item: {
        fontSize: 16,
        textAlign: 'center',
    },
})