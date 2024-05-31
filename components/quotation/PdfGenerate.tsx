import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        padding: 20,
        fontFamily: "Helvetica",
        fontSize: 12,
    },
    section: {
        marginBottom: 10,
        marginTop: 30,
    },
    header: {
        fontSize: 12,
        marginBottom: 10,
        textAlign: "center",
        textDecoration: "underline",
    },
    detailsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    detailsColumn: {
        width: "48%",
    },
    detailsLabel: {
        fontWeight: "bold",
        marginBottom: 4,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopColor: "#ccc",
        paddingTop: 4,
        paddingBottom: 6,
    },
    headingItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingTop: 4,
        paddingBottom: 6,
    },
    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        paddingTop: 4,
        marginTop: 10,
    },
    footer: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        fontSize: 10,
        textAlign: "center",
        color: "grey",
    },
    itemText: {
        width: "20%",
        wrap: "wrap",
    },
    quantityText: {
        width: "15%",
        wrap: "wrap",
    },
    priceText: {
        width: "15%",
        wrap: "wrap",
    },
    gstText: {
        width: "15%",
        wrap: "wrap",
    },
    totalText: {
        width: "20%",
        wrap: "wrap",
    },
    description: {
        marginTop: 15,
        marginBottom: 10,
        textAlign: "center"
    },
    bulletPoint: {
        marginLeft: 10,
    },
});

const QuotationPDF = ({ state, items, total}: any) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.header}>Quotation For the Work</Text>
                <Text>Quotation Number: {state.quotationNo}</Text>
                <Text>Quotation Date: {state.quotationDate}</Text>
                <Text>Validity Date: {state.validTillDate}</Text>
                <Text style={styles.description}>
                    This quotation outlines the cost and details of the work to be performed.
                    Please review the information below and let us know if you have any questions.
                </Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.detailsColumn}>
                        <Text style={styles.detailsLabel}>Client :</Text>
                        <Text>{state.clientBusinessName}</Text>
                        <Text>{state.clientAddress}</Text>
                        <Text>{state.clientEmail}</Text>
                        <Text>{state.clientPhoneNo}</Text>
                        <Text>{state.clientGST}</Text>
                    </View>
                    <View style={styles.detailsColumn}>
                        <Text style={styles.detailsLabel}>Enterprise :</Text>
                        <Text>{state.enterpriseName}</Text>
                        <Text>{state.address}</Text>
                        <Text>{state.emailAddress}</Text>
                        <Text>{state.phoneNo}</Text>
                        <Text>{state.gstNumber}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.header}>Quotation Items</Text>
                <View style={styles.headingItem}>
                    <Text style={styles.itemText}>Description</Text>
                    <Text style={styles.quantityText}>Qty (sft/Kgs)</Text>
                    <Text style={styles.priceText}> Price</Text>
                    <Text style={styles.priceText}>₹ Price</Text>
                    <Text style={styles.gstText}>GST %</Text>
                    <Text style={styles.totalText}>Total</Text>
                </View>
                {items.map((item: any, index: number) => (
                    <View style={styles.item} key={index}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.quantityText}>{item.quantity}</Text>
                        <Text style={styles.priceText}>₹ {item.rate}</Text>
                        <Text style={styles.gstText}>{item.gst} %</Text>
                        <Text style={styles.totalText}>{item.total}</Text>
                    </View>
                ))}
                <View style={styles.totalRow}>
                    <Text style={{ fontWeight: "bold", width: "65%" }}>Total</Text>
                    <Text style={styles.totalText}>{total()}</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.header}>Payment Schedule</Text>
                <View style={styles.description}>
                    <Text style={styles.bulletPoint}>50% payment due upon acceptance of the quotation.</Text>
                    <Text style={styles.bulletPoint}>Remaining 50% payment due upon completion of the work.</Text>
                </View>
            </View>
            <Text style={styles.footer}>Thank you for your business!</Text>
        </Page>
    </Document>
);

export default QuotationPDF;
