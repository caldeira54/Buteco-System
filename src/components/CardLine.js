import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../global/colors';

export default function CardLine({ item1, item2, item3, item4 }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.cards}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.item}>{item1}</Text>
                <Text ellipsizeMode='tail' style={styles.item}>{item2}</Text>
                {item3 && (
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.item}>{item3}</Text>
                )}
                {item4 && (
                    <Text ellipsizeMode='tail' style={styles.item}>{item4}</Text>
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
        height: 35,
        width: '95%',
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors('cinzaclaro'),
        borderRadius: 5,
        textAlign: 'center',
        justifyContent: 'space-between',
    },
    item: {
        width: '33.3%',
        fontSize: 15,
        textAlign: 'center',
        overflow: 'hidden',
        flexShrink: 1,
        flexWrap: 'nowrap',
        flexGrow: 1,
    },
})