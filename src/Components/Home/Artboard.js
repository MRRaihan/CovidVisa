import React from 'react'
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from "react-native-paper";

const ArtBoard = () => {
    return (
        <ScrollView>
            <SafeAreaView styl={styles.container}>

            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
    }
})

export default ArtBoard;
