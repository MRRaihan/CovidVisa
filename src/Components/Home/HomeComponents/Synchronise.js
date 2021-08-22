import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import BeAware from "../../../../assets/images/BeAware.png";

const Synchronise = () => {
    return (
        <View style={StyleSheet.container}>
            <View>
                <Text style={styles.mainTitle}>Trusted app for Bahrain</Text>

                <Card style={styles.cardStyleCovidVisa}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                        <View style={{flexDirection:"column", justifyContent: "flex-start", padding: 10}}>
                            <View style={{fontSize: 30, fontWeight: 'bold' }}>Be Aware</View> 
                            <Text>United against COVID-19</Text>
                        </View>
                        <View style={{justifyContent: "flex-end", height: 100}}>
                            <Image style={styles.ImageShow} source={BeAware} />
                        </View>
                    </View>
                </Card>

                <Text style={styles.mainTitle}>Trusted app for Bangladesh</Text>
                <Card style={styles.cardStyleSurokkha}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                        <View style={{flexDirection:"column", justifyContent: "flex-start", padding: 10}}>
                            <View style={{fontSize: 30, fontWeight: 'bold' }}>Surokkha</View> 
                            <Text>United against COVID-19</Text>
                        </View>
                        <View style={{justifyContent: "flex-end", height: 100}}>
                            <Image style={styles.ImageShow} source={BeAware} />
                        </View>
                    </View>
                </Card>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        width: "90%",
    },
    cardStyleCovidVisa:{
        flexDirection: 'row',
        width: "90%",
        backgroundColor: "#4484eb",
    },
    cardStyleSurokkha:{
        flexDirection: 'row',
        width: "90%",
        backgroundColor: "#bb44eb",
    },
    mainTitle:{
        fontSize: 20,
        paddingTop:5,
        marginTop: 10,
        marginLeft: 10,
    },
    ImageShow:{
        height: 70,
        width: 100
    }
})

export default Synchronise;
