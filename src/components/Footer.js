import React from 'react';
import { View } from 'react-native';

export default function Footer() {

    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate("signIn");
    }

    return (
        <View style={styles.tab}>
            <TouchableOpacity onPress={handleSignIn}>
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
        justifyContent: 'space-between',
        width: '100%',
        height: '12%',
        bottom: 0,
        position: 'absolute',
        padding: 20,
    }
})