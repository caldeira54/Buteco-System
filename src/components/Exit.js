import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../global/colors';

export default function Exit() {
    const navigation = useNavigation();

    function handleSignOut() {
        navigation.navigate("signIn");
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSignOut}>  
            <Image
                source={require('../assets/img/SignOut.png')}
                resizeMode="contain"
                style={styles.icon}
            />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        margin: 20,
        borderRadius: 12,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%',
    },
    icon: {
        width: 50,
        height: 50,
        justifyContent: 'flex-end',
        tintColor: colors('cinzaclaro')
    }
})