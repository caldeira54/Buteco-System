import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import colors from '../global/colors';
import Footer from '../components/Footer';
import BtnEditar from '../components/BtnEditar';
import BtnExcluir from '../components/BtnExcluir';
import Header from '../components/Header';

export default function ListSales() {

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header title="RELATÓRIO DE VENDAS" />
                <View style={styles.table}>
                    <View style={styles.inLine}>
                        <View style={styles.column1}>
                            <Text>Funcionário</Text>
                        </View>
                        
                        <View style={styles.column2}>
                            <Text>Valor</Text>
                        </View>

                        <View style={styles.column3}>
                            <Text>Data</Text>
                        </View>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.inLine}>
                    <View style={styles.column1}>
                            <Text>Arthur</Text>
                        </View>
                        
                        <View style={styles.column2}>
                            <Text>1200</Text>
                        </View>

                        <View style={styles.column3}>
                            <Text>18/10/2022</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.position}>
                    <BtnEditar />
                    <BtnExcluir />
                </View>
            </SafeAreaView>
            <Footer />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '88%',
        backgroundColor: colors("verdeclaro"),
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
        width: '75%',
        marginTop: 20,
        backgroundColor: colors("cinzaclaro"),
    },
    inLine: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        padding: 8
    },
    line: {
        borderBottomWidth: 1,
    },
    column1: {
        width: '50%',
        // borderRightWidth: 1,
    },
    column2: {
        width: '25%',
        // borderRightWidth: 1,
    },
    column3: {
        width: '25%',
        // borderRightWidth: 1,
    }
})