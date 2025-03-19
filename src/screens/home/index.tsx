import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import logo from "../../assets/logo.png"
import setting from "../../assets/setting.png"
import mastercard from "../../assets/mastercard.png"
import wallet from "../../assets/wallet.png"
import pix from "../../assets/pix.png"
import boleto from "../../assets/boleto.png"
import dinheiro from "../../assets/dinheiro.png"
import transferir from "../../assets/transferir.png"

export function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.header}>
                <Image source={logo}/>
                <Image source={setting}/>
            </View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Image source={mastercard}/>
                </View>
                <Text style={styles.cardText}>Patrick Conceição</Text>
            </View>
            <View style={styles.cardDetails}>
                <View style={styles.cardDetailsHeader}>
                    <Text style={styles.cardDetailsHeaderText}>Saldo disponível</Text>
                    <Image source={wallet}/>
                </View>
                <Text style={styles.cardDetailsText}>R$6.385,00</Text>
            </View>
        </View>
        <Text style={styles.wynText}>Do que precisa?</Text>
        <ScrollView style={styles.scrollViewContent} showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.footerCard}>
                <Image source={pix}/>
                <Text style={styles.footerCardText}>Fazer um pix</Text>
            </View>
            <View style={styles.footerCard}>
                <Image source={boleto}/>
                <Text style={styles.footerCardText}>Pagar um boleto</Text>
            </View>
            <View style={styles.footerCard}>
                <Image source={dinheiro}/>
                <Text style={styles.footerCardText}>Fazer um depósito</Text>
            </View>
            <View style={styles.footerCard}>
                <Image source={transferir}/>
                <Text style={styles.footerCardText}>Transferir</Text>
            </View>
        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1",
    },
    content: {
        paddingHorizontal: 30,
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 40,
    },
    card: {
        width: "100%",
        height: 190,
        backgroundColor: "#9500F6",
        borderRadius: 20,
        elevation: 5,
        marginBottom: 20,
        padding: 20,
        justifyContent: "space-between",
    },
    cardHeader: {
        flexDirection: "row-reverse",
    },
    cardText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 600,
    },
    cardDetails: {
        width: "100%",
        height: 120,
        backgroundColor: "#9500F6",
        borderRadius: 20,
        elevation: 5,
        padding: 20,
        justifyContent: "space-between",
        marginBottom: 30,
    },
    cardDetailsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cardDetailsHeaderText: {
        color: "#fff",
    },
    cardDetailsText: {
        color: "#fff",
        fontSize: 34,
        fontWeight: 600,
    },
    wynText: {
        color: "#fff",
        marginHorizontal: 20,
        marginBottom: 30,
        fontWeight: 600,
        fontSize: 14,
    },
    scrollViewContent: {
        marginLeft: 20,
    },
    footerCard: {
        width: 100,
        height: 127,
        backgroundColor: "#9500F6",
        borderRadius: 20,
        elevation: 5,
        padding: 20,
        justifyContent: "space-between",
        marginLeft: 10,
    },
    footerCardText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 18,
    },
});
