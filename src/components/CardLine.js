import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../global/colors';

export default function CardLine({ item1, item2, item3, item4 }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.cards}>
                {item1 && (
                    <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.item, { width: '47.5%' }]}>{item1}</Text>
                )}
                {item2 && (
                    <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.item, { width: '47.5%' }]}>{item2}</Text>
                )}
                {item3 && (
                    <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.item, { width: '31.4%' }]}>{item3}</Text>
                )}
                {item4 && (
                    <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.item, { width: '23.5%' }]}>{item4}</Text>
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
        //paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors('cinzaclaro'),
        borderRadius: 5,
    },
    item: {
        fontSize: 15,
        textAlign: 'center',
        overflow: 'hidden',
        flexShrink: 1,
        flexWrap: 'nowrap',
        flexGrow: 1,
    },
})