import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../global/colors';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {

    const navigation = useNavigation();

    function handleHome() {
        navigation.navigate("home");
    }

    return (
        <View style={styles.tab}>
            <TouchableOpacity onPress={handleHome}>
                <Image
                    source={require('../assets/img/iconHome.png')}
                    resizeMode="contain"
                    style={{ width: 50, height: 50 }}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tab: {
        backgroundColor: colors("cinzaescuro"),
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: '12%',
        bottom: 0,
        position: 'absolute',
        padding: 20,
    }
})