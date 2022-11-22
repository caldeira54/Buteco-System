import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Alert, View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, StatusBar } from 'react-native';
import Input from '../components/Input';
import colors from '../global/colors';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    function handleSignIn() {
        if (!email && !password) {
            return Alert.alert('Erro', 'Preencha todos os campos.');
        }

        if (email && !password) {
            return Alert.alert('Erro', 'Informe a senha.');
        }

        if (!email && password) {
            return Alert.alert('Erro', 'Informe o e-mail.');
        }

        setIsLoading(true);

        auth()
            .signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error);
                setIsLoading(false);

                console.log('code', error.code);

                if (error.code === 'auth/invalid-email') {
                    return Alert.alert('Erro', 'E-mail inválido.');
                }

                if (error.code === 'auth/wrong-password') {
                    return Alert.alert('Erro', 'E-mail ou senha inválida.');
                }

                if (error.code === 'auth/user-not-found') {
                    return Alert.alert('Erro', 'E-mail ou senha inválida.');
                }

                return Alert.alert('Erro', 'Ocorreu um erro ao fazer login.');
            });

        //navigation.navigate("home");
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <StatusBar />
                <Image
                    source={require('../assets/img/fundomain.png')}
                    resizeMode="contain"
                    style={{ width: '60%', height: '40%' }}
                />
                <View style={styles.form}>
                    <Input placeholder="Usuário" keyboardType="email-address" icon="user" value={email} onChange={setEmail} />

                    <Input placeholder="Senha" security autoCorrect={false} returnKeyType="go" icon="pass" value={password} onChange={setPassword} />

                    <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                        <Text style={styles.textButton}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors("pretosignin"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        flex: 0.5,
        width: "75%",
        justifyContent: 'center',
    },
    button: {
        backgroundColor: colors("amarelo"),
        padding: 10,
        width: '100%',
        borderRadius: 12,
        top: 15
    },
    textButton: {
        fontSize: 20,
        color: colors("preto"),
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});