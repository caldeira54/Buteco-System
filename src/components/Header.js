import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SignOut } from 'phosphor-react-native';
import colors from '../global/colors';

export default function Header({ title }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors('cinzaescuro'),
        height: 80,
        margin: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
    textLabel: {
        color: colors('branco'),
        textAlign: 'center',
        fontSize: 20
    }
})