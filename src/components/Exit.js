import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../global/colors';

export default function Exit({ title }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}>
                {title}
            </Text>
            <TouchableOpacity>  
            <Image
                source={require('../assets/img/SignOut.png')}
                resizeMode="contain"
                style={{ width: 50, height: 50, justifyContent: 'flex-end' }}
            />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        margin: 20,
        borderRadius: 12,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%',
    },
    textLabel: {
        color: colors('branco'),
        textAlign: 'center',
        fontSize: 20
    }
})