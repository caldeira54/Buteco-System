import { View, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import colors from '../global/colors';
import Footer from '../components/Footer';
import BtnExcluir from '../components/BtnExcluir';
import Header from '../components/Header';
import CardLine from '../components/CardLine';

export default function ListProducts() {
    const [selectedId, setSelectedId] = useState(null);

    const [data, setData] = useState([]);

    const renderItem = ({ item }) => (
        <Item funcionario={item.funcionario} valor={item.valor} data={item.data} />
    );

    const Item = ({ funcionario, valor, data }) => (
        <CardLine item1={funcionario} item2={valor} item3={data} />
    );

    const getSale = () => {
        firestore()
            .collection('provider')
            .get()
            .then((querySnapshot) => {
                let d = [];
                querySnapshot.forEach((doc, index) => {
                    const provider = {
                        id: index.toString(),
                        funcionario: doc.data().funcionario,
                        valor: doc.data().valor,
                        data: doc.data().data
                    };
                    d.push(provider);
                });
                setData(d);
            })
            .catch((e) => {
                console.log('Erro: ' + e);
            });
    }

    useEffect(() => {
        getSale();
    }, []);
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header title="RELATÓRIO DE FORNECEDORES" />
                <View style={styles.table}>
                    <View style={styles.inLine}>
                        <View style={styles.column1}>
                            <Text style={styles.header}>CNPJ</Text>
                        </View>

                        <View style={styles.column2}>
                            <Text style={styles.header}>Nome</Text>
                        </View>

                        <View style={styles.column3}>
                            <Text style={styles.header}>Endereço</Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.inLine}>
                    <FlatList style={styles.list} 
                        showsVerticalScrollIndicator={false}
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
                <View style={styles.position}>
                    <BtnExcluir />
                </View>
            </SafeAreaView>
            <Footer />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '92%',
        backgroundColor: colors("pretosignin"),
        alignItems: 'center'
    },
    position: {
        display: 'flex',
        flexDirection: 'row',
        bottom: 0,
        position: 'absolute',
        justifyContent: 'space-evenly',
        width: '75%',
        marginBottom: 30
    },
    table: {
        height: '60%',
        width: '90%',
        marginTop: 20,
        backgroundColor: colors("preto"),
        borderRadius: 10,
    },
    inLine: {
        flexDirection: 'row',
        width: '100%',
    },
    line: {
        width: '100%',
        borderBottomWidth: 1,
    },
    column1: {
        width: '25%',
        marginLeft: 50,
    },
    column2: {
        width: '20%',
        marginLeft: 15,
    },
    column3: {
        width: '50%',
        marginLeft: 15,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors("branco"),
    },
    list:{
        height: '75%',
    }
})